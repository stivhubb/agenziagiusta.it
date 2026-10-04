import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const comunicazione: Testi = {
  intro: [
    "Un'agenzia di comunicazione è la struttura a cui un'azienda affida la gestione della propria immagine e delle attività con cui si fa conoscere dal mercato: posizionamento, messaggi, campagne e canali.",
    "Le denominazioni agenzia di marketing e agenzia pubblicitaria indicano, per una piccola o media impresa, lo stesso tipo di fornitore: un interlocutore unico che parte dagli obiettivi commerciali dell'azienda e li traduce in un piano di comunicazione integrato, cioè coordinato su più mezzi.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di comunicazione",
      blocchi: [
        "L'attività parte dalla fase di analisi: l'agenzia esamina l'azienda, il mercato di riferimento, i concorrenti e il pubblico, e definisce una strategia di comunicazione, cioè che cosa comunicare, a chi e attraverso quali canali. Su questa base sviluppa o aggiorna la brand identity, l'insieme degli elementi che rendono riconoscibile il marchio, elabora il concept creativo delle campagne e produce i materiali: annunci stampa, spot, sito, contenuti per i social media.",
        "La seconda area è la diffusione. L'agenzia pianifica e acquista gli spazi pubblicitari, online e sui mezzi tradizionali, gestisce i canali proprietari dell'azienda, cura le relazioni con i media e organizza eventi. Alcune strutture svolgono tutte le lavorazioni al proprio interno; altre coordinano fornitori specializzati per le attività più tecniche, come la produzione video o lo sviluppo web.",
        "Un progetto si articola di norma in quattro fasi. Il punto di partenza è il brief, il documento con cui l'azienda indica obiettivi, target e budget. L'agenzia risponde con una proposta strategica e creativa, che viene discussa e affinata con il cliente. Seguono la produzione dei materiali e la loro pubblicazione sui canali previsti. L'ultima fase è la misurazione dei risultati rispetto agli indicatori concordati (KPI), da cui dipendono le decisioni successive.",
        "Al progetto lavorano figure con competenze diverse: l'account, referente del cliente e responsabile del coordinamento; lo strategist, che imposta il piano; il copywriter e l'art director, che sviluppano testi e immagini; il media planner, che definisce dove e quando investire; gli specialisti dei singoli canali.",
      ],
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia di comunicazione",
    gruppi: [
      gruppo("Strategia", [
        ["Analisi di mercato e dei concorrenti", "Studio del settore, dei competitor e della loro comunicazione."],
        ["Posizionamento del marchio", "Definizione di ciò che distingue il marchio e di come deve essere percepito."],
        ["Piano di marketing", "Obiettivi commerciali, leve e attività per raggiungerli."],
        ["Piano di comunicazione", "Messaggi, canali, tempi e budget delle attività."],
        ["Definizione del target", "Individuazione e descrizione dei pubblici a cui rivolgersi."],
        ["Tone of voice", "Il registro con cui il marchio si esprime su tutti i canali."],
      ]),
      gruppo("Identità del marchio", [
        ["Naming", "Ideazione del nome di un'azienda, di un prodotto o di un servizio."],
        ["Logo e identità visiva", "Marchio, colori, caratteri e stile grafico."],
        ["Brand guideline", "Il manuale con le regole d'uso dell'identità."],
        ["Payoff", "La frase che accompagna il marchio e ne sintetizza la promessa."],
        ["Packaging", "Progettazione grafica delle confezioni."],
      ]),
      gruppo("Campagne pubblicitarie", [
        ["Concept creativo", "L'idea di fondo da cui derivano tutti i materiali della campagna."],
        ["Campagne stampa", "Annunci per quotidiani, periodici e riviste di settore."],
        ["Spot tv e radio", "Ideazione e realizzazione di comunicati video e audio."],
        ["Affissioni", "Manifesti e impianti pubblicitari esterni (out of home)."],
        ["Campagne digitali e social", "Annunci su motori di ricerca, siti e piattaforme social."],
      ]),
      gruppo("Pianificazione media", [
        ["Piano mezzi", "Scelta dei mezzi e ripartizione del budget pubblicitario."],
        ["Acquisto degli spazi", "Negoziazione e prenotazione con editori e concessionarie."],
        ["Monitoraggio e ottimizzazione", "Controllo delle uscite e correzione della campagna in corso."],
      ]),
      gruppo("Digital", [
        ["Sito web", "Progettazione, contenuti e sviluppo del sito aziendale."],
        ["E-commerce", "Realizzazione e gestione del negozio online."],
        ["SEO", "Ottimizzazione per il posizionamento sui motori di ricerca."],
        ["Campagne sui motori di ricerca", "Annunci a pagamento nei risultati di ricerca (SEM)."],
        ["Email marketing", "Newsletter e comunicazioni automatiche a clienti e contatti."],
      ]),
      gruppo("Social media", [
        ["Piano editoriale", "Programmazione dei contenuti per ciascuna piattaforma."],
        ["Gestione dei profili", "Pubblicazione, moderazione e risposta agli utenti."],
        ["Influencer marketing", "Collaborazioni con creator seguiti dal pubblico di riferimento."],
      ]),
      gruppo("Contenuti e produzione", [
        ["Copywriting", "Scrittura dei testi per campagne, sito e materiali."],
        ["Video", "Spot, video aziendali e contenuti brevi per il web."],
        ["Fotografia", "Servizi fotografici di prodotto, aziendali e di campagna."],
        ["Brochure e cataloghi", "Materiali istituzionali e commerciali, stampati o digitali."],
        ["Materiali per il punto vendita", "Espositori, cartelli e allestimenti."],
      ]),
      gruppo("PR ed eventi", [
        ["Ufficio stampa", "Comunicati e rapporti con giornalisti e testate."],
        ["Eventi", "Ideazione e organizzazione di eventi aziendali e di lancio."],
        ["Fiere", "Progettazione dello stand e comunicazione della partecipazione."],
        ["Sponsorizzazioni", "Selezione e gestione delle iniziative da sostenere."],
      ]),
      gruppo("Misurazione", [
        ["Report periodici", "Sintesi dei risultati delle attività."],
        ["Analisi dei risultati", "Lettura dei dati rispetto ai KPI e indicazioni per le attività successive."],
      ]),
    ],
  },
};
