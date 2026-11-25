# Genera content/statistiche.ts: i dati delle pagine città (/agenzie/[citta]/) e delle pagine
# servizio + città, dalla classificazione delle agenzie (rilevazione di ottobre 2026).
# Uso: python3 scripts/genera_statistiche.py <classificazione.csv> > content/statistiche.ts
# Il CSV è claude/agenziagiusta_classificazione_agenzie.csv del progetto.
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


def su10(p):
    if p >= 0.95: return "quasi tutte"
    if p >= 0.85: return "circa 9 su 10"
    if p >= 0.15: return f"circa {round(p * 10)} su 10"
    if p >= 0.075: return "circa una su dieci"
    return "meno di una su dieci"


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

# --- testi delle pagine servizio + città (solo dati che cambiano con servizio e città)
testi = {}
for s, (voce, fanno, breve) in SERVIZI.items():
    testi[s] = {}
    quote = sorted(((servizi[s][c]["quota"], c) for c, _ in CITTA), reverse=True)
    for slug, nome in CITTA:
        d = servizi[s][slug]
        m = medie[s]
        pos = [c for _, c in quote].index(slug) + 1
        diff = d["quota"] - m["quota"]
        uguale = su10(d["quota"]) == su10(m["quota"])
        if pos == 1: confronto = ("di poco " if uguale else "") + "la quota più alta tra le dieci città analizzate"
        elif pos == 10: confronto = ("di poco " if uguale else "") + "la quota più bassa tra le dieci città analizzate"
        elif uguale: confronto = "in linea con la media delle dieci città"
        elif diff > 0: confronto = "sopra la media delle dieci città"
        else: confronto = "sotto la media delle dieci città"
        media_txt = su10(m["quota"])
        v = variante(s, slug)
        par = []
        if v == 0:
            par.append(f"AgenziaGiusta.it ha analizzato {d['base']} agenzie con sede a {nome} e provincia: {d['agenzie']} {fanno}, {su10(d['quota'])}. " + (f"È {confronto} ({media_txt})." if "media" in confronto else f"È {confronto}; la media è {media_txt}."))
        elif v == 1:
            par.append(f"Delle {d['base']} agenzie di {nome} e provincia analizzate da AgenziaGiusta.it, {d['agenzie']} {fanno}: {su10(d['quota'])}, {confronto} (la media è {media_txt}).")
        else:
            par.append(f"A {nome} e provincia {d['agenzie']} agenzie su {d['base']} tra quelle analizzate da AgenziaGiusta.it {fanno}, {su10(d['quota'])}: {confronto}" + (f", dove sono {media_txt}." if "media" in confronto else f" (la media è {media_txt})."))
        if d["agenzie"] < 15:
            # Con meno di 15 agenzie si dà solo la quota (regola della rilevazione).
            testi[s][slug] = par
            continue
        # sede
        ic = d["inCitta"]
        if ic >= 0.95: sede = f"Quasi tutte hanno sede nel comune di {nome}."
        elif ic < 0.5: sede = f"Più di metà ha sede in altri comuni della provincia; nel comune di {nome} lavorano {su10(ic)}."
        else: sede = f"{su10(ic).capitalize()} hanno sede nel comune di {nome}, le altre in provincia."
        # abbinati
        if d["abbinati"]:
            (a1, p1), *resto = d["abbinati"]
            abb = f"{su10(p1).capitalize()} offrono anche {a1}"
            if resto:
                a2, p2 = resto[0]
                abb += f" e {su10(p2)} {a2}" if su10(p2) != su10(p1) else f" e {a2}"
            abb += "."
        else:
            abb = ""
        par.append(" ".join(t for t in [sede, abb] if t))
        # clienti
        cl, cm = d["clienti"], m["clienti"]
        if cl["n"] >= MIN_CLIENTI:
            agg = AGGETTIVI[slug]
            dp = cl["pmi"] - cm["pmi"]
            tendenza = ("più orientate alle piccole imprese rispetto alla media" if dp >= 0.08 else
                        "meno orientate alle piccole imprese rispetto alla media" if dp <= -0.08 else
                        "in linea con la media sul tipo di clienti")
            vc = variante(s, slug, "clienti")
            if vc == 0:
                par.append(f"Tra quelle che mostrano i clienti sul sito, {su10(cl['pmi'])} lavorano soprattutto con piccole e medie imprese e {su10(cl['grandi'])} soprattutto con grandi marchi: sono {tendenza}, dove le PMI pesano {su10(cm['pmi']).replace('circa ', 'circa ')}.")
            elif vc == 1:
                par.append(f"Le agenzie {agg} che indicano i propri clienti sono {tendenza}: {su10(cl['pmi'])} hanno come clienti principali PMI (media delle dieci città: {su10(cm['pmi'])}), {su10(cl['misto'])} aziende di ogni dimensione.")
            else:
                par.append(f"Sul tipo di clienti, dove il dato è indicato, le agenzie {agg} sono {tendenza}: soprattutto PMI per {su10(cl['pmi'])}, contro {su10(cm['pmi'])} nella media delle dieci città.")
        testi[s][slug] = par

# --- pagine città: dati che cambiano solo con la città
pagine_citta = {}
for slug, nome in CITTA:
    b = base[slug]
    inc = sum(1 for x in b if x["in_citta"][slug])
    cl = clienti(b)
    quote = sorted(((servizi[s][slug]["quota"], s) for s in SERVIZI), reverse=True)
    pagine_citta[slug] = {
        "agenzie": len(b), "inCitta": inc, "inProvincia": len(b) - inc, "clienti": cl,
        "testo": [
            f"AgenziaGiusta.it ha analizzato {len(b)} agenzie di comunicazione, marketing e web con sede a {nome} e provincia: {su10(inc / len(b))} hanno sede nel comune, le altre in provincia. "
            f"Tra quelle che mostrano i clienti sul sito, {su10(cl['pmi'])} lavorano soprattutto con piccole e medie imprese, {su10(cl['misto'])} con aziende di ogni dimensione e {su10(cl['grandi'])} soprattutto con grandi marchi.",
            f"Quasi nessuna agenzia offre un solo servizio. I servizi più diffusi a {nome} sono {SERVIZI[quote[0][1]][2]} e {SERVIZI[quote[1][1]][2]}; i meno diffusi {SERVIZI[quote[-2][1]][2]} e {SERVIZI[quote[-1][1]][2]}. La tabella riporta, servizio per servizio, quante agenzie lo offrono, con il link alla pagina dedicata.",
        ],
    }

r = lambda x: round(x, 3)
for s in servizi:
    for c in servizi[s]:
        d = servizi[s][c]
        d["quota"], d["inCitta"] = r(d["quota"]), r(d["inCitta"])
        d["clienti"] = {k: (v if k == "n" else r(v)) for k, v in d["clienti"].items()}
        d["abbinati"] = [[a, r(p)] for a, p in d["abbinati"]]
        d["testo"] = testi[s][c]
for s in medie:
    medie[s] = {"quota": r(medie[s]["quota"]), "clienti": {k: (v if k == "n" else r(v)) for k, v in medie[s]["clienti"].items()}}
for c in pagine_citta:
    pagine_citta[c]["clienti"] = {k: (v if k == "n" else r(v)) for k, v in pagine_citta[c]["clienti"].items()}

j = lambda o: json.dumps(o, ensure_ascii=False)
print("""// Dati delle pagine città (/agenzie/[citta]/) e delle pagine servizio + città.
// File generato da scripts/genera_statistiche.py dalla rilevazione di ottobre 2026: non modificare a mano.
// Ogni dato sta in una sola pagina: la pagina città ha i dati che cambiano solo con la città,
// la pagina servizio + città quelli che cambiano con il servizio e con la città.

export type Clienti = { n: number; pmi: number; misto: number; grandi: number };
export type DatoServizioCitta = {
  agenzie: number; base: number; quota: number; inCitta: number; clienti: Clienti;
  abbinati: [string, number][]; testo: string[];
};
export type DatoCitta = {
  agenzie: number; inCitta: number; inProvincia: number; clienti: Clienti; testo: string[];
};
""")
print(f"export const statistiche: Record<string, Record<string, DatoServizioCitta>> = {j(servizi)};\n")
print(f"export const medie: Record<string, {{ quota: number; clienti: Clienti }}> = {j(medie)};\n")
print(f"export const datiCittaPagina: Record<string, DatoCitta> = {j(pagine_citta)};\n")
print("// Dicitura delle quote, come nei testi: \"circa 7 su 10\", \"quasi tutte\"...")
print("""export function su10(p: number): string {
  if (p >= 0.95) return "quasi tutte";
  if (p >= 0.85) return "circa 9 su 10";
  if (p >= 0.15) return `circa ${Math.round(p * 10)} su 10`;
  if (p >= 0.075) return "circa una su dieci";
  return "meno di una su dieci";
}""")
