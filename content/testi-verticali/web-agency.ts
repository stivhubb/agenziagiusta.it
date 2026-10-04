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
