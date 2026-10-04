import Link from "next/link";
import { percorsi } from "@/content/sito";
import type { Blocco, Sezione, Titolo } from "@/content/tipi";

export function Segnaposto({ children, alto }: { children: React.ReactNode; alto?: boolean }) {
  return <div className={alto ? "segnaposto segnaposto--alto" : "segnaposto"}>{children}</div>;
}

// Titolo di pagina: l'ultima parte della frase è in magenta.
export function TitoloPagina({ titolo, className }: { titolo: Titolo; className: string }) {
  return (
    <h1 className={className}>
      {titolo.testo}
      {titolo.evidenza && (
        <>
          {" "}
          <span className="evidenza">{titolo.evidenza}</span>
        </>
      )}
    </h1>
  );
}

// Intro delle pagine di contenuto: percorso o occhiello, titolo, apertura e intro lunga.
export function Intro({
  occhiello,
  percorso,
  titolo,
  intro,
  variante,
}: {
  occhiello?: string;
  percorso?: string;
  titolo: Titolo;
  intro?: string[];
  variante?: "contatti";
}) {
  return (
    <section className={`contenitore intro${variante ? ` intro--${variante}` : ""}`}>
      {percorso && (
        <nav aria-label="Percorso" className="percorso">
          <Link href={percorsi.home}>Home</Link>
          <span>/</span>
          <span>{percorso}</span>
        </nav>
      )}
      {occhiello && <div className="occhiello occhiello--punto">{occhiello}</div>}
      <TitoloPagina titolo={titolo} className="titolo-pagina" />
      {intro ? (
        intro.map((paragrafo, i) => (
          <p key={i} className={i === 0 ? "apertura" : "paragrafo"}>
            {paragrafo}
          </p>
        ))
      ) : (
        <Segnaposto>[TESTO INTRODUTTIVO: DA SCRIVERE]</Segnaposto>
      )}
    </section>
  );
}

function BloccoTesto({ blocco }: { blocco: Blocco }) {
  if (typeof blocco === "string") {
    return <p className="paragrafo">{blocco}</p>;
  }
  if ("segnaposto" in blocco) {
    return <Segnaposto alto={blocco.alto}>{blocco.segnaposto}</Segnaposto>;
  }
  return (
    <ul className="elenco">
      {blocco.elenco.map((voce) => (
        <li key={voce.termine}>
          <strong>{voce.termine}</strong> {voce.testo}
        </li>
      ))}
    </ul>
  );
}

// Continuazione del testo: sezioni con titolo e blocchi.
// "seguito": il testo continua subito dopo l'intro, senza il blocco quiz in mezzo.
export function Testo({
  sezioni,
  variante,
}: {
  sezioni?: Sezione[];
  variante?: "privacy" | "seguito";
}) {
  return (
    <section
      className={`contenitore sezione-testo${variante ? ` sezione-testo--${variante}` : ""}`}
    >
      <div className={`testo${variante ? ` testo--${variante}` : ""}`}>
        {sezioni ? (
          sezioni.map((sezione) => (
            <div key={sezione.titolo} className="testo__sezione">
              <h2 className="titolo-testo">{sezione.titolo}</h2>
              {sezione.blocchi.map((blocco, i) => (
                <BloccoTesto key={i} blocco={blocco} />
              ))}
            </div>
          ))
        ) : (
          <Segnaposto>[TESTO DELLA PAGINA: DA SCRIVERE]</Segnaposto>
        )}
      </div>
    </section>
  );
}
