import type { BloccoBrief, BriefComposto } from "@/content/brief";
import { Logo } from "./Header";

// Impaginazione del brief, uguale per tutti. I testi arrivano da content/brief.ts.

function Blocco({ blocco }: { blocco: BloccoBrief }) {
  if (blocco.tipo === "paragrafo") return <p>{blocco.testo}</p>;
  if (blocco.tipo === "parole") {
    return (
      <blockquote className="brief__parole">
        <p>{blocco.testo}</p>
      </blockquote>
    );
  }
  return (
    <dl className="brief__voci">
      {blocco.voci.map((voce) => (
        <div key={voce.nome}>
          <dt>{voce.nome}</dt>
          <dd>{voce.testo}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Brief({ brief }: { brief: BriefComposto }) {
  return (
    <article className="brief">
      <header className="brief__testa">
        <div className="brief__marchio">
          <span>Brief di comunicazione</span>
          <span className="logo">
            <Logo />
          </span>
        </div>
        <h1 className="brief__azienda">{brief.ragioneSociale}</h1>
        <div className="brief__meta">
          <span>{brief.referente}</span>
          <span>{brief.data}</span>
        </div>
      </header>

      {brief.sezioni.map((sezione, i) => (
        <section key={sezione.titolo} className="brief__sezione">
          <h2 className="brief__titolo">
            <span className="brief__numero">{i + 1}</span>
            {sezione.titolo}
          </h2>
          {sezione.blocchi.map((blocco, j) => (
            <Blocco key={j} blocco={blocco} />
          ))}
        </section>
      ))}

      <footer className="brief__piede">Preparato con AgenziaGiusta.it</footer>
    </article>
  );
}
