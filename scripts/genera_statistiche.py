# Genera content/statistiche.ts: i dati delle pagine città (/agenzie/[citta]/) e delle pagine
# servizio + città, dalla classificazione delle agenzie (rilevazione di ottobre 2026).
# Uso: python3 scripts/genera_statistiche.py <classificazione.csv> <istat.csv> > content/statistiche.ts
# I CSV sono claude/agenziagiusta_classificazione_agenzie.csv e claude/agenziagiusta_istat_asia_2024.csv
# del progetto.
#
# Regola delle pagine (decisa il 25 novembre 2026): ogni dato sta in una sola pagina.
# - Cambia solo con la città -> pagina città.
# - Cambia con servizio e città -> pagina servizio + città.
# - Cambia solo con il servizio -> pagina del servizio (testi in content/testi-verticali).
import csv, json, re, sys, zlib
from collections import Counter

CITTA = [("milano", "Milano"), ("torino", "Torino"), ("bologna", "Bologna"), ("padova", "Padova"),
         ("verona", "Verona"), ("roma", "Roma"), ("firenze", "Firenze"), ("napoli", "Napoli"),
         ("bari", "Bari"), ("palermo", "Palermo")]
AGGETTIVI = {"milano": "milanesi", "torino": "torinesi", "bologna": "bolognesi", "padova": "padovane",
             "verona": "veronesi", "roma": "romane", "firenze": "fiorentine", "napoli": "napoletane",
             "bari": "baresi", "palermo": "palermitane"}

# slug del sito -> voce della classificazione, cosa fanno le agenzie, nome breve come servizio abbinato
SERVIZI = {
    "comunicazione": ("comunicazione", "indicano la comunicazione tra i propri servizi", "comunicazione"),
    "pubblicita": ("pubblicità", "offrono servizi di pubblicità", "pubblicità"),
    "marketing": ("marketing", "offrono servizi di marketing", "marketing"),
    "media": ("media", "pianificano e acquistano spazi pubblicitari", "pianificazione media"),
    "web-agency": ("siti ed e-commerce", "realizzano siti web o e-commerce", "siti ed e-commerce"),
    "web-marketing": ("web marketing", "offrono web marketing e campagne online", "web marketing"),
    "branding": ("grafica e branding", "si occupano di grafica e branding", "grafica e branding"),
    "creativita": ("creatività", "offrono servizi creativi e ideazione di campagne", "servizi creativi"),
    "social-media": ("social media", "gestiscono i social media", "gestione dei social"),
    "pr-ufficio-stampa": ("PR e ufficio stampa", "offrono relazioni pubbliche o ufficio stampa", "ufficio stampa"),
    "seo-sem": ("SEO e SEM", "offrono SEO o campagne sui motori di ricerca", "SEO"),
    "societa-produzione-video-foto": ("video e foto", "producono video o foto", "produzione video e foto"),
}
VOCE_A_SLUG = {v[0]: k for k, v in SERVIZI.items()}
MIN_CLIENTI = 15  # agenzie con i clienti indicati, sotto non si scrive la frase


def stima(p):
    # Percentuale arrotondata al 5 (decisione del 25 novembre 2026): "circa 65%".
    if p >= 0.975: return "quasi tutte"
    if p < 0.05: return "meno del 5%"
    return f"circa {round(p * 20) * 5}%"


def variante(*chiavi, n=3):
    return zlib.crc32("|".join(chiavi).encode()) % n


righe = [x for x in csv.DictReader(open(sys.argv[1], encoding="utf-8-sig")) if x["basi_citta"].strip()]
for x in righe:
    x["S"] = {s.strip() for s in x["servizi"].split(";") if s.strip()}

base = {}
for slug, nome in CITTA:
    b = [x for x in righe if nome in [c.strip() for c in x["basi_citta"].split(";")]]
    for x in b:
        x.setdefault("in_citta", {})[slug] = bool(re.search(r"(^|\|)\s*" + re.escape(nome) + r" \(", x["sedi"]))
    base[slug] = b


def clienti(gruppo):
    c = Counter(x["clienti"] for x in gruppo if x["clienti"] != "non indicato")
    n = sum(c.values())
    q = lambda k: round(c[k] / n, 3) if n else 0
    return {"n": n, "pmi": q("piccole imprese"), "misto": q("misto"), "grandi": q("grandi marchi")}


# --- dati per servizio e città
servizi, medie = {}, {}
for s, (voce, _, _) in SERVIZI.items():
    servizi[s] = {}
    tutti_righe, tutti_offerenti = 0, []
    for slug, nome in CITTA:
        b = base[slug]
        g = [x for x in b if voce in x["S"]]
        tutti_righe += len(b)
        tutti_offerenti += g
        abb = Counter(t for x in g for t in x["S"] if t not in (voce, "comunicazione"))
        servizi[s][slug] = {
            "agenzie": len(g), "base": len(b), "quota": round(len(g) / len(b), 3),
            "inCitta": round(sum(1 for x in g if x["in_citta"][slug]) / len(g), 3) if g else 0,
            "clienti": clienti(g),
            "abbinati": [[SERVIZI[VOCE_A_SLUG[t]][2], k / len(g)] for t, k in abb.most_common(2)] if g else [],
        }
    medie[s] = {"quota": round(len(tutti_offerenti) / tutti_righe, 3), "clienti": clienti(tutti_offerenti)}

# --- schema delle pagine servizio + città: solo stime (niente numeri assoluti), dati che cambiano
# con servizio e città. Il testo è una frase di apertura; il resto è uno schema di voci.
testi = {}
for s, (voce, fanno, breve) in SERVIZI.items():
    testi[s] = {}
    quote = sorted(((servizi[s][c]["quota"], c) for c, _ in CITTA), reverse=True)
    for slug, nome in CITTA:
        d = servizi[s][slug]
        m = medie[s]
        pos = [c for _, c in quote].index(slug) + 1
        uguale = stima(d["quota"]) == stima(m["quota"])
        if pos == 1: confronto = ("di poco " if uguale else "") + "la quota più alta tra le dieci città"
        elif pos == 10: confronto = ("di poco " if uguale else "") + "la quota più bassa tra le dieci città"
        elif uguale: confronto = "in linea con la media delle dieci città"
        elif d["quota"] > m["quota"]: confronto = "sopra la media delle dieci città"
        else: confronto = "sotto la media delle dieci città"
        schema = [["Agenzie che " + fanno, f"{stima(d['quota'])}, {confronto} ({stima(m['quota'])})"]]
        if d["agenzie"] >= 15:
            ic = d["inCitta"]
            schema.append([f"Sede nel comune di {nome}", "quasi tutte" if ic >= 0.95 else f"{stima(ic)}, le altre in provincia"])
            cl, cm = d["clienti"], m["clienti"]
            if cl["n"] >= MIN_CLIENTI:
                schema.append(["Clienti soprattutto piccole e medie imprese", f"{stima(cl['pmi'])} (media delle dieci città: {stima(cm['pmi'])})"])
                schema.append(["Clienti soprattutto grandi marchi", f"{stima(cl['grandi'])} (media: {stima(cm['grandi'])})"])
            if d["abbinati"]:
                schema.append(["Servizi offerti più spesso insieme", ", ".join(f"{a} ({stima(p)})" for a, p in d["abbinati"])])
        testi[s][slug] = schema

# --- pagine città: dati che cambiano solo con la città (rilevazione e Istat ASIA 2024)
SEZIONI = {"B": "Estrazione di minerali", "C": "Manifattura", "D": "Energia", "E": "Acqua e rifiuti",
           "F": "Costruzioni", "G": "Commercio", "H": "Trasporti e magazzinaggio", "I": "Alloggio e ristorazione",
           "J": "Informazione e comunicazione", "K": "Finanza e assicurazioni", "L": "Attività immobiliari",
           "M": "Attività professionali, scientifiche e tecniche", "N": "Noleggio e servizi alle imprese",
           "P": "Istruzione", "Q": "Sanità e assistenza sociale", "R": "Arte, sport e intrattenimento",
           "S": "Altri servizi"}
CODICI = [("73110", "Agenzie pubblicitarie"), ("73120", "Concessionarie pubblicitarie"),
          ("70210", "Pubbliche relazioni e comunicazione"), ("73200", "Ricerche di mercato"),
          ("74102", "Studi di grafica"), ("74201", "Studi fotografici"),
          ("59110", "Produzione video e cinema"), ("63120", "Portali web")]
ist = {x[0]: x for x in csv.reader(open(sys.argv[2], encoding="utf-8-sig"))}
testa = next(csv.reader(open(sys.argv[2], encoding="utf-8-sig")))
def iv(code, terr, ind="unita_locali"):
    x = ist.get(code); i = testa.index(f"{terr}_{ind}")
    return float(x[i]) if x and x[i] else 0.0

pagine_citta = {}
pmi_citta = {slug: clienti(base[slug])["pmi"] for slug, _ in CITTA}
ordine_pmi = sorted(pmi_citta, key=lambda c: -pmi_citta[c])
media_clienti = clienti([x for slug, _ in CITTA for x in base[slug]])
for slug, nome in CITTA:
    b = base[slug]
    inc = sum(1 for x in b if x["in_citta"][slug])
    cl = clienti(b)
    nserv = [len(x["S"] - {"comunicazione"}) for x in b]
    tot, tot_it = iv("0010", nome), iv("0010", "Italia")
    settori = sorted(((iv(k, nome), k) for k in SEZIONI), reverse=True)
    pagine_citta[slug] = {
        "inCitta": round(inc / len(b), 3), "clienti": cl,
        "posizionePmi": ordine_pmi.index(slug) + 1, "mediaClienti": media_clienti,
        "fino3": round(sum(1 for n in nserv if n <= 3) / len(b), 3),
        "almeno7": round(sum(1 for n in nserv if n >= 7) / len(b), 3),
        "servizi": [[s, servizi[s][slug]["quota"], medie[s]["quota"]] for s in SERVIZI],
        "istat": {
            "unita": tot, "addettiMedi": round(iv("0010", nome, "addetti") / tot, 2),
            "addettiMediItalia": round(iv("0010", "Italia", "addetti") / tot_it, 2),
            "settori": [[SEZIONI[k], v, round(v / tot, 4), round(iv(k, "Italia") / tot_it, 4)] for v, k in settori[:8]],
            "comunicazione": [[nome_c, iv(c, nome), round(iv(c, nome, "addetti") / iv(c, nome), 2) if iv(c, nome) else 0,
                               round(iv(c, nome) / iv(c, "Italia"), 4) if iv(c, "Italia") else 0] for c, nome_c in CODICI],
        },
    }

r = lambda x: round(x, 3)
for s in servizi:
    for c in servizi[s]:
        d = servizi[s][c]
        d["quota"], d["inCitta"] = r(d["quota"]), r(d["inCitta"])
        d["clienti"] = {k: (v if k == "n" else r(v)) for k, v in d["clienti"].items()}
        d["abbinati"] = [[a, r(p)] for a, p in d["abbinati"]]
        d["schema"] = testi[s][c]
for s in medie:
    medie[s] = {"quota": r(medie[s]["quota"]), "clienti": {k: (v if k == "n" else r(v)) for k, v in medie[s]["clienti"].items()}}

j = lambda o: json.dumps(o, ensure_ascii=False)
print("""// Dati delle pagine città (/agenzie/[citta]/) e delle pagine servizio + città.
// File generato da scripts/genera_statistiche.py dalla rilevazione di ottobre 2026: non modificare a mano.
// Ogni dato sta in una sola pagina: la pagina città ha i dati che cambiano solo con la città,
// la pagina servizio + città quelli che cambiano con il servizio e con la città.

export type Clienti = { n: number; pmi: number; misto: number; grandi: number };
export type DatoServizioCitta = {
  agenzie: number; base: number; quota: number; inCitta: number; clienti: Clienti;
  abbinati: [string, number][]; schema: [string, string][];
};
// Una riga Istat: [nome, unità locali, quota sul totale della provincia, quota in Italia]
// per i settori; [nome, unità locali, addetti medi, quota sul totale nazionale] per la comunicazione.
export type DatoCitta = {
  inCitta: number; clienti: Clienti; posizionePmi: number; mediaClienti: Clienti; fino3: number; almeno7: number;
  servizi: [string, number, number][];
  istat: { unita: number; addettiMedi: number; addettiMediItalia: number;
    settori: [string, number, number, number][]; comunicazione: [string, number, number, number][] };
};
""")
print(f"export const statistiche: Record<string, Record<string, DatoServizioCitta>> = {j(servizi)};\n")
print(f"export const medie: Record<string, {{ quota: number; clienti: Clienti }}> = {j(medie)};\n")
print(f"export const datiCittaPagina: Record<string, DatoCitta> = {j(pagine_citta)};\n")
print("// Stime: percentuale arrotondata al 5 (\"circa 65%\"), \"quasi tutte\" sopra il 97,5%.")
print("""export function stima(p: number): string {
  if (p >= 0.95) return "quasi tutte";
  if (p >= 0.85) return "circa 9 su 10";
  if (p >= 0.15) return `circa ${Math.round(p * 10)} su 10`;
  if (p >= 0.075) return "circa una su dieci";
  return "meno di una su dieci";
}""")
print("""
// Numeri Istat come nei testi: arrotondati alle decine sotto mille, alle centinaia sopra.
export function circa(n: number): string {
  const r = n < 1000 ? Math.round(n / 10) * 10 : Math.round(n / 100) * 100;
  return `circa ${r.toLocaleString("it-IT")}`;
}

export function percento(p: number): string {
  return `${(p * 100).toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}

export function ordinale(n: number): string {
  return ["prima", "seconda", "terza", "quarta", "quinta", "sesta", "settima", "ottava", "nona", "decima"][n - 1];
}""")
