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
  mercato: {
    testo: [
      "Secondo l'Osservatorio Internet Media del Politecnico di Milano, la pubblicità online in Italia vale 6,2 miliardi di euro nel 2025 e dovrebbe raggiungere i 7 miliardi nel 2026 (+12%). La pubblicità sui motori di ricerca rappresenta il 24% del totale ed è prevista in crescita del 9% nel 2026.",
      "La ricerca è anche un canale di vendita: secondo Netcomm e il Politecnico di Milano, nel 2026 gli acquisti online degli italiani superano i 66,6 miliardi di euro (+6%).",
    ],
    fonti: [
      { nome: "Osservatorio Internet Media del Politecnico di Milano, giugno 2026", url: "https://www.osservatori.net/comunicato/internet-media/internet-advertising-italia-in-crescita/" },
      { nome: "Osservatorio Internet Media del Politecnico di Milano, luglio 2026", url: "https://www.osservatori.net/blog/internet-media-advertising/15-statistiche-sul-digital-advertising-in-italia-nel-2026-tutto-quello-che-devi-sapere/" },
      { nome: "Netcomm e Osservatorio eCommerce B2c del Politecnico di Milano, maggio 2026", url: "https://www.consorzionetcomm.it/lecommerce-b2c-in-italia-supera-i-666-miliardi-di-e-nel-2026-6-con-35-milioni-di-consumatori-digitali/" },
    ],
  },
  costi: {
    testo: [
      "La SEO è remunerata con un canone mensile, perché richiede un lavoro continuativo. Per una piccola impresa o per un progetto locale si colloca in genere tra 500 e 1.500 euro al mese; per un'azienda strutturata, un e-commerce o un settore molto competitivo si parte in genere da 2.500 euro al mese. L'analisi iniziale del sito (audit), se acquistata da sola, costa in genere tra 500 e 2.000 euro.",
      "Per le campagne SEM il compenso dell'agenzia si colloca in genere tra 500 e 2.500 euro al mese e non comprende il budget pubblicitario, che viene pagato a parte alla piattaforma.",
    ],
    nota: "Fasce elaborate da AgenziaGiusta.it su listini e guide ai prezzi pubblicati da agenzie italiane, ottobre 2026. Sono valori indicativi.",
  },
  domande: [
    {
      domanda: "In quanto tempo si vedono i risultati?",
      risposta: "I primi risultati della SEO arrivano in genere tra tre e sei mesi dall'inizio del lavoro; per le ricerche più competitive ne servono da sei a dodici. Le campagne SEM producono visite dal giorno dell'attivazione e si fermano quando termina il budget.",
    },
    {
      domanda: "È meglio investire in SEO o in SEM?",
      risposta: "Le due attività rispondono a esigenze diverse e spesso si usano insieme. La SEM dà visibilità immediata e misurabile, a un costo per ogni clic. La SEO richiede tempo ma costruisce un traffico che non dipende dalla spesa pubblicitaria. Una scelta frequente è avviare le campagne SEM mentre il lavoro SEO matura.",
    },
    {
      domanda: "Un'agenzia può garantire la prima posizione su Google?",
      risposta: "No. L'ordine dei risultati organici è deciso dagli algoritmi dei motori di ricerca, che cambiano di frequente e non sono controllabili dall'esterno. Un'agenzia può impegnarsi sulle attività da svolgere e su obiettivi di traffico e di conversioni, non su una posizione. Negli annunci a pagamento la posizione dipende da un'asta, in cui contano l'offerta e la qualità dell'annuncio.",
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
