import Link from "next/link";
import { Fragment } from "react";
import { percorsi } from "@/content/sito";
import type { Blocco, Fonte, Sezione, Titolo } from "@/content/tipi";
import { Freccia } from "./Icone";

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
  segnaposto = "[TESTO INTRODUTTIVO: DA SCRIVERE]",
  variante,
  children,
}: {
  occhiello?: string;
  // Voci dopo "Home": quelle con href sono link, l'ultima è la pagina in cui ci si trova.
  percorso?: { nome: string; href?: string }[];
  titolo: Titolo;
  intro?: string[];
  // Cosa mostrare finché il testo manca.
  segnaposto?: string;
  variante?: "contatti";
  // Contenuto in più sotto il testo (ad esempio le fonti).
  children?: React.ReactNode;
}) {
  return (
    <section className={`contenitore intro${variante ? ` intro--${variante}` : ""}`}>
      {percorso && (
        <nav aria-label="Percorso" className="percorso">
          <Link href={percorsi.home}>Home</Link>
          {percorso.map((voce) => (
            <Fragment key={voce.nome}>
              <span>/</span>
              {voce.href ? <Link href={voce.href}>{voce.nome}</Link> : <span>{voce.nome}</span>}
            </Fragment>
          ))}
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
        <Segnaposto>{segnaposto}</Segnaposto>
      )}
      {children}
    </section>
  );
}

// Le fonti di un testo, citate per nome con il link.
export function Fonti({ fonti }: { fonti: Fonte[] }) {
  return (
    <p className="fonti">
      Fonti:{" "}
      {fonti.map((fonte, i) => (
        <span key={fonte.url}>
          {i > 0 && ", "}
          <a href={fonte.url} target="_blank" rel="noopener">
            {fonte.nome}
          </a>
        </span>
      ))}
    </p>
  );
}

export function BloccoTesto({ blocco }: { blocco: Blocco }) {
  if (typeof blocco === "string") {
    return <p className="paragrafo">{blocco}</p>;
  }
  if ("segnaposto" in blocco) {
    return <Segnaposto alto={blocco.alto}>{blocco.segnaposto}</Segnaposto>;
  }
  if ("fonti" in blocco) {
    return <Fonti fonti={blocco.fonti} />;
  }
  if ("nota" in blocco) {
    return <p className="fonti">{blocco.nota}</p>;
  }
  if ("domande" in blocco) {
    return (
      <div className="domande">
        {blocco.domande.map((voce) => (
          <div key={voce.domanda} className="domande__voce">
            <h3 className="titolo-scheda">{voce.domanda}</h3>
            <p className="paragrafo">{voce.risposta}</p>
          </div>
        ))}
      </div>
    );
  }
  if ("link" in blocco) {
    return (
      <Link href={blocco.link.href} className="link-freccia">
        {blocco.link.testo}
        <Freccia size={16} />
      </Link>
    );
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
