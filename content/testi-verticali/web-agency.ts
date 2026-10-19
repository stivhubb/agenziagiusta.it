import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const webAgency: Testi = {
  intro: [
    "Una web agency, o agenzia web, progetta, realizza e gestisce la presenza online di un'azienda: sito, e-commerce e applicazioni web, dalla progettazione grafica (web design) allo sviluppo e alla manutenzione.",
    "La realizzazione di siti è il centro del suo lavoro. Molte web agency offrono anche SEO e campagne online, che servono a portare visitatori sul sito: quando l'obiettivo principale è aumentare contatti e vendite, il fornitore da cercare è un'agenzia di web marketing.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa una web agency",
      blocchi: [
        "Sul versante della realizzazione, l'agenzia definisce l'architettura delle informazioni, cioè l'organizzazione dei contenuti e dei percorsi di navigazione, progetta l'interfaccia (UX e UI design) e sviluppa il sito su un sistema di gestione dei contenuti (CMS) o su una piattaforma e-commerce. Cura inoltre le integrazioni con i sistemi aziendali, come gestionale, CRM e sistemi di pagamento, e la manutenzione successiva alla pubblicazione.",
        "Un sito è costruito anche per essere trovato e per convertire, cioè per trasformare le visite in contatti o vendite. La web agency imposta la SEO tecnica, la struttura che permette ai motori di ricerca di leggere le pagine, cura velocità e accessibilità e configura gli strumenti di web analytics che misurano visite e conversioni. La promozione continuativa, con campagne e contenuti, è il lavoro di un'agenzia di web marketing.",
        "Un progetto di sito segue fasi definite: analisi dei requisiti, progettazione della struttura e dei wireframe (gli schemi delle pagine), design grafico, sviluppo, test e messa online. Dopo la pubblicazione restano la manutenzione, gli aggiornamenti di sicurezza e la gestione dei contenuti.",
        "Le figure coinvolte sono il project manager, che coordina tempi e risorse; lo UX/UI designer; gli sviluppatori front-end e back-end; il copywriter o content editor, che cura i testi; lo specialista SEO per l'impostazione tecnica.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo Netcomm e l'Osservatorio eCommerce B2c del Politecnico di Milano, nel 2026 gli acquisti online degli italiani superano i 66,6 miliardi di euro (+6%) e valgono l'11,5% degli acquisti di prodotto al dettaglio. Le imprese italiane con un sito e-commerce sono 87.000, per oltre il 90% micro o piccole.",
      "La diffusione tra le imprese resta limitata: secondo l'Istat nel 2025 vende online il 14,7% delle imprese con almeno 10 addetti, mentre il 59% usa i social media.",
    ],
    fonti: [
      { nome: "Netcomm e Osservatorio eCommerce B2c del Politecnico di Milano, maggio 2026", url: "https://www.consorzionetcomm.it/lecommerce-b2c-in-italia-supera-i-666-miliardi-di-e-nel-2026-6-con-35-milioni-di-consumatori-digitali/" },
      { nome: "Istat, Imprese e Ict, dicembre 2025", url: "https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/" },
    ],
  },
  costi: {
    testo: [
      "La realizzazione di un sito è remunerata a progetto. Per il sito aziendale di una piccola impresa il costo si colloca in genere tra 1.200 e 3.500 euro; per un e-commerce si parte in genere da 4.500 euro e si sale con il numero di prodotti e con le integrazioni richieste. Si aggiungono i costi ricorrenti di dominio, hosting e manutenzione.",
      "Il costo dipende dal numero di pagine e di lingue, dalla produzione di testi e immagini, dalle funzioni richieste e dalle integrazioni con i sistemi aziendali. Un preventivo chiaro indica che cosa è compreso: progettazione, sviluppo, contenuti, SEO tecnica, formazione per l'aggiornamento e manutenzione.",
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
      domanda: "Una web agency si occupa anche della promozione del sito?",
      risposta: "Spesso sì: molte web agency offrono anche SEO e campagne online. Quando la promozione è l'obiettivo principale conviene cercare un'agenzia di web marketing. In ogni caso un sito nuovo dovrebbe andare online con la SEO tecnica impostata e il tracciamento delle conversioni configurato, così che le attività successive partano dai dati.",
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
        ["SEO tecnica", "Struttura, velocità e codice che permettono ai motori di ricerca di leggere il sito."],
      ]),
      gruppo("Gestione e manutenzione", [
        ["Hosting e manutenzione", "Aggiornamenti, sicurezza e continuità del servizio."],
        ["Ottimizzazione delle prestazioni", "Velocità di caricamento e stabilità delle pagine."],
        ["Gestione dei contenuti", "Inserimento e aggiornamento di testi, immagini e schede prodotto."],
      ]),
      gruppo("Misurazione", [
        ["Web analytics", "Configurazione degli strumenti di analisi e del tracciamento."],
        ["Gestione del consenso", "Banner cookie e conformità alla normativa sulla privacy."],
      ]),
    ],
  },
};
