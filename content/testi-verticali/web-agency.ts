import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const webAgency: Testi = {
  intro: [
    "Una web agency progetta, realizza e gestisce la presenza online di un'azienda: sito, e-commerce e applicazioni web. Un'agenzia di digital marketing si occupa di portare su quei canali un pubblico qualificato e di trasformarlo in contatti e vendite.",
    "Le due competenze sono spesso riunite nella stessa struttura: un sito produce risultati solo se viene raggiunto dal pubblico a cui è destinato, e una campagna online è efficace solo se la pagina di destinazione è costruita per la conversione.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa una web agency",
      blocchi: [
        "Sul versante della realizzazione, l'agenzia definisce l'architettura delle informazioni, cioè l'organizzazione dei contenuti e dei percorsi di navigazione, progetta l'interfaccia (UX e UI design) e sviluppa il sito su un sistema di gestione dei contenuti (CMS) o su una piattaforma e-commerce. Cura inoltre le integrazioni con i sistemi aziendali, come gestionale, CRM e sistemi di pagamento, e la manutenzione successiva alla pubblicazione.",
        "Sul versante del marketing, pianifica e gestisce le attività che generano traffico e conversioni: ottimizzazione per i motori di ricerca (SEO), campagne a pagamento su motori di ricerca e social media, email marketing e marketing automation. Ogni attività è misurata con strumenti di web analytics, che rilevano il comportamento degli utenti e il risultato economico delle campagne.",
        "Un progetto di sito segue fasi definite: analisi dei requisiti, progettazione della struttura e dei wireframe (gli schemi delle pagine), design grafico, sviluppo, test e messa online. Le attività di marketing procedono invece per cicli: pianificazione, attivazione delle campagne, analisi dei dati e ottimizzazione.",
        "Le figure coinvolte sono il project manager, che coordina tempi e risorse; lo UX/UI designer; gli sviluppatori front-end e back-end; lo specialista SEO; il performance marketing specialist, che gestisce le campagne; il web analyst.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo Netcomm e l'Osservatorio eCommerce B2c del Politecnico di Milano, nel 2026 gli acquisti online degli italiani superano i 66,6 miliardi di euro (+6%) e valgono l'11,5% degli acquisti di prodotto al dettaglio. Le imprese italiane con un sito e-commerce sono 87.000, per oltre il 90% micro o piccole.",
      "La diffusione tra le imprese resta limitata: secondo l'Istat nel 2025 vende online il 14,7% delle imprese con almeno 10 addetti, mentre il 59% usa i social media. Sul fronte della promozione, l'Osservatorio Internet Media del Politecnico di Milano stima per il 2025 investimenti in pubblicità online per 6,2 miliardi di euro (+11%).",
    ],
    fonti: [
      { nome: "Netcomm e Osservatorio eCommerce B2c del Politecnico di Milano, maggio 2026", url: "https://www.consorzionetcomm.it/lecommerce-b2c-in-italia-supera-i-666-miliardi-di-e-nel-2026-6-con-35-milioni-di-consumatori-digitali/" },
      { nome: "Istat, Imprese e Ict, dicembre 2025", url: "https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/" },
      { nome: "Osservatorio Internet Media del Politecnico di Milano, giugno 2026", url: "https://www.osservatori.net/comunicato/internet-media/internet-advertising-italia-in-crescita/" },
    ],
  },
  costi: {
    testo: [
      "La realizzazione di un sito è remunerata a progetto. Per il sito aziendale di una piccola impresa il costo si colloca in genere tra 1.200 e 3.500 euro; per un e-commerce si parte in genere da 4.500 euro e si sale con il numero di prodotti e con le integrazioni richieste. Si aggiungono i costi ricorrenti di dominio, hosting e manutenzione.",
      "Le attività di digital marketing sono remunerate con un canone mensile. Per la gestione delle campagne pubblicitarie online il compenso si colloca in genere tra 500 e 2.500 euro al mese, budget pubblicitario escluso.",
    ],
    nota: "Fasce elaborate da AgenziaGiusta.it su listini e guide ai prezzi pubblicati da agenzie italiane, ottobre 2026. Sono valori indicativi.",
  },
  domande: [
    {
      domanda: "Il sito resta di proprietà dell'azienda?",
      risposta: "Dipende dal contratto. Conviene verificare che dominio e hosting siano intestati all'azienda, che a fine lavori vengano consegnati gli accessi e i file del sito e che i diritti su testi, immagini e codice siano ceduti. Con le piattaforme in abbonamento il sito resta online finché si paga il canone.",
    },
    {
      domanda: "Che differenza c'è tra un sito su CMS e uno sviluppato su misura?",
      risposta: "Un CMS, cioè un sistema di gestione dei contenuti già pronto, riduce tempi e costi e permette all'azienda di aggiornare il sito in autonomia. Lo sviluppo su misura serve quando occorrono funzioni o integrazioni che le piattaforme esistenti non offrono, e comporta costi di realizzazione e di manutenzione più alti.",
    },
    {
      domanda: "Come si misura il rendimento di un sito o di una campagna online?",
      risposta: "Con gli strumenti di web analytics: visite per canale di provenienza, tasso di conversione, cioè la quota di visitatori che compie l'azione desiderata, e costo per contatto o per vendita. La misurazione richiede che il tracciamento delle conversioni sia configurato prima dell'avvio.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di una web agency",
    gruppi: [
      gruppo("Analisi e progettazione", [
        ["Analisi dei requisiti", "Obiettivi del progetto, funzionalità necessarie e vincoli tecnici."],
        ["Architettura delle informazioni", "Struttura dei contenuti e dei percorsi di navigazione."],
        ["UX design", "Progettazione dell'esperienza d'uso attraverso wireframe e prototipi."],
        ["UI design", "Aspetto grafico dell'interfaccia, coerente con l'identità del marchio."],
      ]),
      gruppo("Sviluppo", [
        ["Sito aziendale", "Sito istituzionale o di prodotto, realizzato su CMS."],
        ["E-commerce", "Negozio online con catalogo, carrello e pagamenti."],
        ["Landing page", "Pagine dedicate a una campagna o a un'offerta."],
        ["Applicazioni web", "Aree riservate, configuratori e strumenti su misura."],
        ["Integrazioni", "Collegamento con gestionale, CRM, magazzino e sistemi di pagamento."],
        ["Accessibilità", "Adeguamento del sito ai requisiti di accessibilità."],
      ]),
      gruppo("Gestione e manutenzione", [
        ["Hosting e manutenzione", "Aggiornamenti, sicurezza e continuità del servizio."],
        ["Ottimizzazione delle prestazioni", "Velocità di caricamento e stabilità delle pagine."],
        ["Gestione dei contenuti", "Inserimento e aggiornamento di testi, immagini e schede prodotto."],
      ]),
      gruppo("Acquisizione di traffico", [
        ["SEO", "Ottimizzazione per il posizionamento organico sui motori di ricerca."],
        ["Search advertising", "Annunci a pagamento nei risultati di ricerca."],
        ["Social advertising", "Campagne a pagamento sulle piattaforme social."],
        ["Display e remarketing", "Annunci rivolti a chi ha già visitato il sito."],
        ["Marketplace", "Gestione della presenza e delle campagne sui marketplace."],
      ]),
      gruppo("Conversione e fidelizzazione", [
        ["Ottimizzazione del tasso di conversione (CRO)", "Test e interventi per aumentare contatti e vendite."],
        ["Email marketing", "Newsletter e campagne rivolte a clienti e contatti."],
        ["Marketing automation", "Comunicazioni automatiche attivate dal comportamento dell'utente."],
        ["Lead management", "Gestione dei contatti acquisiti e del loro avanzamento commerciale."],
      ]),
      gruppo("Misurazione", [
        ["Web analytics", "Configurazione degli strumenti di analisi e del tracciamento."],
        ["Dashboard e report", "Lettura periodica dei risultati."],
        ["Gestione del consenso", "Banner cookie e conformità alla normativa sulla privacy."],
      ]),
    ],
  },
};
