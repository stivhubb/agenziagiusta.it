import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const socialMedia: Testi = {
  intro: [
    "Un'agenzia di social media marketing gestisce la presenza di un'azienda sulle piattaforme social: definisce la strategia, produce i contenuti, cura il rapporto con gli utenti e pianifica le campagne a pagamento.",
    "L'attività comprende una componente organica, cioè i contenuti pubblicati sui profili senza investimento pubblicitario, e una componente a pagamento, il social advertising, che ne estende la diffusione verso pubblici definiti.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di social media marketing",
      blocchi: [
        "Il punto di partenza è la strategia: l'agenzia analizza i profili esistenti, i concorrenti e il pubblico, e stabilisce su quali piattaforme essere presenti, con quali obiettivi e con quale linea editoriale. Da qui deriva il piano editoriale, il calendario che programma temi, formati e frequenza delle pubblicazioni.",
        "Seguono la produzione dei contenuti, cioè testi, grafiche, fotografie e video nei formati richiesti da ciascuna piattaforma, e il community management: la moderazione dei commenti e la risposta ai messaggi, che incidono sulla reputazione dell'azienda e, in molti settori, sul servizio al cliente. Molte agenzie gestiscono anche l'influencer marketing, le collaborazioni con creator seguiti dal pubblico di riferimento.",
        "Le campagne a pagamento vengono pianificate sulle piattaforme pubblicitarie dei singoli social: l'agenzia definisce obiettivo, pubblico, budget e creatività, e ottimizza la campagna in base ai risultati. Il lavoro procede per cicli mensili: pianificazione, produzione, pubblicazione, analisi dei dati. Il report periodico misura l'andamento rispetto agli indicatori concordati, come copertura, interazioni, contatti generati e vendite.",
        "Le figure coinvolte sono il social media strategist; il social media manager, che coordina le attività quotidiane; il content creator e il graphic designer; il community manager; l'advertising specialist, che gestisce le campagne.",
      ],
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia social media",
    gruppi: [
      gruppo("Strategia", [
        ["Audit dei profili", "Analisi dello stato attuale dei canali e dei risultati."],
        ["Analisi dei concorrenti", "Presenza e attività social delle aziende del settore."],
        ["Scelta delle piattaforme", "Su quali social essere presenti, e con quali obiettivi."],
        ["Linea editoriale", "Temi, rubriche e tone of voice."],
        ["Social media policy", "Regole per la gestione dei profili e delle situazioni critiche."],
      ]),
      gruppo("Contenuti", [
        ["Piano editoriale", "Calendario delle pubblicazioni per ciascuna piattaforma."],
        ["Copywriting", "Testi dei post e delle didascalie."],
        ["Grafiche", "Immagini statiche, caroselli e modelli."],
        ["Video brevi", "Reel, short e video verticali."],
        ["Servizi fotografici e riprese", "Produzione di materiale originale."],
        ["Dirette", "Organizzazione e gestione di trasmissioni in diretta."],
      ]),
      gruppo("Gestione", [
        ["Apertura e configurazione dei profili", "Pagine, account pubblicitari e cataloghi."],
        ["Pubblicazione", "Programmazione e uscita dei contenuti."],
        ["Community management", "Moderazione dei commenti e risposta ai messaggi."],
        ["Social customer care", "Gestione delle richieste di assistenza."],
        ["Gestione delle crisi", "Intervento in caso di critiche o segnalazioni diffuse."],
      ]),
      gruppo("Advertising", [
        ["Strategia delle campagne", "Obiettivi, pubblici e ripartizione del budget."],
        ["Creatività per gli annunci", "Formati e messaggi pensati per la pubblicità."],
        ["Gestione delle campagne", "Attivazione e ottimizzazione sulle piattaforme pubblicitarie."],
        ["Remarketing", "Annunci rivolti a chi ha già interagito con l'azienda."],
        ["Tracciamento", "Configurazione degli strumenti che rilevano le conversioni."],
      ]),
      gruppo("Influencer marketing", [
        ["Selezione dei creator", "Individuazione dei profili coerenti con marca e target."],
        ["Accordi e contratti", "Definizione di compensi, contenuti e obblighi di trasparenza."],
        ["Coordinamento delle collaborazioni", "Brief ai creator e controllo delle pubblicazioni."],
      ]),
      gruppo("Misurazione", [
        ["Social listening", "Rilevazione di ciò che viene detto online su marca e settore."],
        ["Report periodici", "Risultati rispetto ai KPI concordati."],
      ]),
    ],
  },
};
