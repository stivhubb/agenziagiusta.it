import type { Agenzia } from "@/content/tipi";
import { Freccia } from "./Icone";
import { Segnaposto } from "./Testo";

// Agenzie in evidenza, al massimo dieci compresi i partner.
const IN_EVIDENZA = 10;

// Numero della settimana (ISO): la scelta delle agenzie in evidenza cambia ogni settimana.
function settimana(data: Date): string {
  const d = new Date(Date.UTC(data.getFullYear(), data.getMonth(), data.getDate()));
  const giorno = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - giorno);
  const inizio = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const numero = Math.ceil(((d.getTime() - inizio.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-${numero}`;
}

// Generatore casuale con seme: stessa pagina e stessa settimana danno la stessa scelta.
function casuale(seme: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seme.length; i++) h = Math.imul(h ^ seme.charCodeAt(i), 16777619);
  return () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sorteggia(agenzie: Agenzia[], quante: number, seme: string): Agenzia[] {
  const r = casuale(seme);
  const copia = [...agenzie];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, quante);
}

const sito = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const alfabetico = (a: Agenzia, b: Agenzia) => a.nome.localeCompare(b.nome, "it");

// Elenco delle agenzie di un tipo in una città: prima i partner (★), poi agenzie scelte a rotazione
// casuale ogni settimana dall'elenco completo, che si apre sotto.
export function ElencoAgenzie({
  titolo,
  agenzie,
  partner,
  citta,
  chiave,
}: {
  titolo: string;
  agenzie: Agenzia[];
  partner: Agenzia[];
  citta: string;
  chiave: string;
}) {
  const isPartner = (a: Agenzia) => partner.some((p) => sito(p.url) === sito(a.url));
  const altre = agenzie.filter((a) => !isPartner(a));
  const scelte = sorteggia(altre, IN_EVIDENZA - partner.length, `${chiave}|${settimana(new Date())}`);
  const evidenza = [...partner, ...scelte.sort(alfabetico)];
  const tutte = [...agenzie].sort(alfabetico);
  return (
    <section className="contenitore agenzie">
      <h2 className="titolo-blocco">{titolo}</h2>
      {agenzie.length > 0 ? (
        <>
          <ul className="griglia agenzie__elenco">
            {evidenza.map((agenzia) => (
              <li key={agenzia.url} className="scheda scheda--scelta">
                <h3 className="titolo-scheda">
                  {agenzia.nome}
                  {agenzia.partner && (
                    <span className="agenzie__partner" title="Agenzia partner">
                      {" "}★
                    </span>
                  )}
                </h3>
                <a href={agenzia.url} target="_blank" rel="noopener" className="link-freccia">
                  Vai al sito
                  <Freccia size={16} />
                </a>
              </li>
            ))}
          </ul>
          <details className="agenzie__tutte">
            <summary>Mostra tutte le agenzie ({tutte.length})</summary>
            <ul>
              {tutte.map((agenzia) => (
                <li key={agenzia.url}>
                  <a href={agenzia.url} target="_blank" rel="noopener">
                    {agenzia.nome}
                  </a>
                  {isPartner(agenzia) && " ★"}
                </li>
              ))}
            </ul>
          </details>
          <p className="agenzie__nota">
            Le agenzie in evidenza sono scelte a rotazione, in modo casuale, dall&apos;elenco completo
            delle agenzie con sede a {citta} e provincia che offrono questo servizio; l&apos;elenco
            completo è consultabile qui sopra. Le informazioni sono raccolte dai siti web delle
            agenzie e la presenza in elenco non implica alcuna collaborazione con AgenziaGiusta.it.
            {partner.length > 0 &&
              " ★ Fanno eccezione le agenzie partner, che collaborano con AgenziaGiusta.it, possono ricevere le richieste inviate tramite il sito e possono avere sede in un'altra città."}
          </p>
        </>
      ) : (
        <Segnaposto alto>[ELENCO DELLE AGENZIE: DA COMPILARE]</Segnaposto>
      )}
    </section>
  );
}
