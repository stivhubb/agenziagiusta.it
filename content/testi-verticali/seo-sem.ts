import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const seoSem: Testi = {
  intro: [
    "Un'agenzia SEO lavora sulla visibilità di un sito nei motori di ricerca. La SEO (Search Engine Optimization) è l'insieme degli interventi che migliorano il posizionamento nei risultati organici, cioè non a pagamento.",
    "A questa si affianca la SEM (Search Engine Marketing), che comprende gli annunci a pagamento nelle pagine dei risultati. Le due attività sono complementari: entrambe intercettano utenti che stanno già cercando un prodotto, un servizio o un'informazione.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia SEO",
      blocchi: [
        "L'attività SEO si articola in tre ambiti. La SEO tecnica interviene sulla struttura del sito perché i motori di ricerca possano scansionarlo e indicizzarlo correttamente: velocità, compatibilità con i dispositivi mobili, architettura delle pagine. La SEO on-page riguarda i contenuti: attraverso la ricerca delle parole chiave l'agenzia individua le ricerche effettuate dagli utenti e ottimizza testi, titoli e struttura delle pagine per rispondere a quell'intento. La SEO off-page lavora sull'autorevolezza del sito, in particolare attraverso i collegamenti provenienti da altri siti (link building).",
        "L'attività SEM consiste nella gestione delle campagne sulle piattaforme pubblicitarie dei motori di ricerca: scelta delle parole chiave, redazione degli annunci, definizione delle offerte e delle pagine di destinazione, controllo del costo per clic e del costo per conversione.",
        "Il lavoro inizia con un audit, un'analisi dello stato del sito, del suo posizionamento e dei concorrenti, da cui deriva un piano di interventi ordinati per priorità. La SEO produce risultati progressivi e richiede un'attività continuativa di ottimizzazione e di produzione di contenuti; le campagne SEM hanno effetto immediato e durano quanto l'investimento. Entrambe sono misurate con report periodici su posizionamenti, traffico e conversioni.",
        "Le figure coinvolte sono il SEO specialist; il SEO copywriter, che redige i contenuti ottimizzati; lo specialista delle campagne sui motori di ricerca (SEM o PPC specialist); il web analyst; per gli interventi tecnici, lo sviluppatore.",
      ],
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia SEO",
    gruppi: [
      gruppo("Analisi", [
        ["Audit SEO", "Analisi tecnica, dei contenuti e dell'autorevolezza del sito."],
        ["Ricerca delle parole chiave", "Individuazione delle ricerche rilevanti e dei relativi volumi."],
        ["Analisi dei concorrenti", "Posizionamento e strategie dei siti concorrenti."],
        ["Analisi dell'intento di ricerca", "Che cosa si aspetta di trovare l'utente per ciascuna ricerca."],
      ]),
      gruppo("SEO tecnica", [
        ["Scansione e indicizzazione", "Verifica che i motori di ricerca leggano correttamente le pagine."],
        ["Prestazioni", "Velocità di caricamento e stabilità delle pagine."],
        ["Architettura del sito", "Struttura delle sezioni e dei collegamenti interni."],
        ["Dati strutturati", "Marcatura che aiuta i motori a interpretare i contenuti."],
        ["Migrazioni", "Passaggio a un nuovo sito o dominio senza perdita di posizionamento."],
        ["SEO internazionale", "Configurazione di siti in più lingue e per più paesi."],
      ]),
      gruppo("Contenuti", [
        ["Ottimizzazione on-page", "Titoli, descrizioni, intestazioni e testi delle pagine."],
        ["Piano editoriale SEO", "Programmazione dei contenuti da produrre."],
        ["SEO copywriting", "Redazione di testi ottimizzati per utenti e motori di ricerca."],
        ["SEO per e-commerce", "Ottimizzazione di categorie e schede prodotto."],
        ["Visibilità nelle risposte AI", "Ottimizzazione dei contenuti per le risposte generate dall'intelligenza artificiale."],
      ]),
      gruppo("Autorevolezza", [
        ["Link building", "Acquisizione di collegamenti da siti pertinenti e autorevoli."],
        ["Digital PR", "Citazioni e menzioni su testate e siti di settore."],
        ["Analisi del profilo di link", "Controllo della qualità dei collegamenti in ingresso."],
      ]),
      gruppo("SEO locale", [
        ["Scheda dell'attività", "Profilo con sede, orari e servizi sui motori di ricerca e sulle mappe."],
        ["Citazioni locali", "Presenza coerente dei dati aziendali su mappe ed elenchi."],
        ["Gestione delle recensioni", "Monitoraggio e risposta alle recensioni degli utenti."],
      ]),
      gruppo("SEM", [
        ["Campagne sulla rete di ricerca", "Annunci testuali nei risultati di ricerca."],
        ["Campagne Shopping", "Annunci di prodotto con immagine e prezzo."],
        ["Display e remarketing", "Annunci rivolti a chi ha già visitato il sito."],
        ["Landing page", "Pagine di destinazione costruite per la conversione."],
        ["Gestione delle offerte", "Controllo del costo per clic e del budget."],
      ]),
      gruppo("Misurazione", [
        ["Tracciamento delle conversioni", "Configurazione degli strumenti di analisi."],
        ["Monitoraggio dei posizionamenti", "Andamento delle parole chiave nel tempo."],
        ["Report periodici", "Traffico, conversioni e ritorno dell'investimento."],
      ]),
    ],
  },
};
