import { Logo } from "./Header";

// Il brief: impaginazione fissa, uguale per tutti.
// I campi "scritti dal modello" sono testi rielaborati a partire dalle risposte aperte del quiz;
// tutti gli altri sono le risposte a scelta, riportate così come sono.

export type DatiBrief = {
  data: string;
  // Contatti
  ragioneSociale: string;
  referente: string;
  funzione: string;
  email: string;
  telefono: string;
  // L'azienda
  settore: string;
  modelloBusiness: string;
  classeDimensionale: string;
  mercato: string[];
  sede: string;
  sitoWeb?: string;
  // Comunicazione attuale
  canali: string[];
  gestione: string[];
  investimentoAnnuo?: string;
  // Obiettivi
  obiettiviMarketing: string[];
  obiettiviComunicazione: string[];
  // Servizi ricercati
  areeServizio: string[];
  budgetAgenzia: string;
  localizzazione: string;
  // Scritti dal modello
  contesto: string[];
  concorrenti: string;
  target: string;
  kpi?: string;
  priorita: string[];
  vincoli?: string;
};

function Sezione({
  numero,
  titolo,
  children,
}: {
  numero: number;
  titolo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="brief__sezione">
      <h2 className="brief__titolo">
        <span className="brief__numero">{numero}</span>
        {titolo}
      </h2>
      {children}
    </section>
  );
}

function Scheda({ dati }: { dati: [string, string | undefined][] }) {
  return (
    <dl className="brief__scheda">
      {dati.map(
        ([nome, valore]) =>
          valore && (
            <div key={nome}>
              <dt>{nome}</dt>
              <dd>{valore}</dd>
            </div>
          ),
      )}
    </dl>
  );
}

function Etichette({ titolo, voci }: { titolo: string; voci: string[] }) {
  return (
    <div className="brief__gruppo">
      <h3 className="brief__sotto">{titolo}</h3>
      <ul className="brief__etichette">
        {voci.map((voce) => (
          <li key={voce}>{voce}</li>
        ))}
      </ul>
    </div>
  );
}

function Testo({ titolo, children }: { titolo: string; children: React.ReactNode }) {
  return (
    <div className="brief__gruppo">
      <h3 className="brief__sotto">{titolo}</h3>
      <p>{children}</p>
    </div>
  );
}

export function Brief({ dati }: { dati: DatiBrief }) {
  return (
    <article className="brief">
      <header className="brief__testa">
        <div className="brief__marchio">
          <span>Brief di comunicazione</span>
          <span className="logo">
            <Logo />
          </span>
        </div>
        <h1 className="brief__azienda">{dati.ragioneSociale}</h1>
        <div className="brief__meta">
          <span>
            {dati.referente}, {dati.funzione}
          </span>
          <span>{dati.data}</span>
        </div>
      </header>

      <Sezione numero={1} titolo="Contesto">
        {dati.contesto.map((paragrafo, i) => (
          <p key={i}>{paragrafo}</p>
        ))}
        <Scheda
          dati={[
            ["Settore", dati.settore],
            ["Modello di business", dati.modelloBusiness],
            ["Classe dimensionale", dati.classeDimensionale],
            ["Mercato", dati.mercato.join(", ")],
            ["Sede", dati.sede],
            ["Sito web", dati.sitoWeb],
          ]}
        />
        <Testo titolo="Concorrenti">{dati.concorrenti}</Testo>
        <div className="brief__colonne">
          <Etichette titolo="Canali presidiati" voci={dati.canali} />
          <Etichette titolo="Gestione della comunicazione" voci={dati.gestione} />
        </div>
        {dati.investimentoAnnuo && (
          <Scheda dati={[["Investimento annuo in comunicazione", dati.investimentoAnnuo]]} />
        )}
      </Sezione>

      <Sezione numero={2} titolo="Obiettivi">
        <div className="brief__colonne">
          <Etichette titolo="Obiettivi di marketing" voci={dati.obiettiviMarketing} />
          <Etichette titolo="Obiettivi di comunicazione" voci={dati.obiettiviComunicazione} />
        </div>
        <Testo titolo="KPI principali">{dati.kpi ?? "Da definire."}</Testo>
      </Sezione>

      <Sezione numero={3} titolo="Target">
        <p>{dati.target}</p>
      </Sezione>

      <Sezione numero={4} titolo="Richiesta all'agenzia">
        <Etichette titolo="Servizi ricercati" voci={dati.areeServizio} />
        <div className="brief__gruppo">
          <h3 className="brief__sotto">Priorità e considerazioni</h3>
          <ul className="brief__elenco">
            {dati.priorita.map((voce) => (
              <li key={voce}>{voce}</li>
            ))}
          </ul>
        </div>
        {dati.vincoli && <Testo titolo="Vincoli e linee guida">{dati.vincoli}</Testo>}
      </Sezione>

      <Sezione numero={5} titolo="Aspetti pratici">
        <Scheda
          dati={[
            ["Budget annuo per l'agenzia", dati.budgetAgenzia],
            ["Localizzazione dell'agenzia", dati.localizzazione],
          ]}
        />
        <Scheda
          dati={[
            ["Referente", dati.referente],
            ["Funzione", dati.funzione],
            ["Email", dati.email],
            ["Telefono", dati.telefono],
          ]}
        />
      </Sezione>

      <footer className="brief__piede">Preparato con AgenziaGiusta.it</footer>
    </article>
  );
}
