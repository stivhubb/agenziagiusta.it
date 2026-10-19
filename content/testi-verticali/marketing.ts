import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const marketing: Testi = {
  intro: [
    "Un'agenzia di marketing aiuta un'azienda a decidere come vendere: a quali clienti rivolgersi, con quale offerta e attraverso quali canali, e mette in pratica le attività che portano contatti e vendite.",
    "Rispetto a un'agenzia di comunicazione, che lavora soprattutto su immagine e messaggi, un'agenzia marketing parte dagli obiettivi commerciali: il lancio di un prodotto, l'ingresso in un nuovo mercato, l'aumento dei contatti. Le agenzie di marketing lavorano online e offline; quelle che lavorano solo sui canali digitali si chiamano di solito agenzie di web marketing.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di marketing",
      blocchi: [
        "La prima parte del lavoro è l'analisi: ricerche di mercato, studio dei concorrenti, segmentazione dei clienti. Su questa base l'agenzia scrive il piano di marketing, il documento che fissa obiettivi, pubblico, posizionamento dell'offerta, canali, budget e calendario delle attività.",
        "La seconda parte è l'esecuzione. A seconda del piano, l'agenzia organizza il lancio di un prodotto, le campagne per acquisire contatti (lead generation), le promozioni, il trade marketing, cioè le attività rivolte a rivenditori e punti vendita, la presenza a fiere ed eventi e l'email marketing. Per le attività più tecniche, come le campagne online o la produzione dei materiali, può coordinare fornitori specializzati.",
        "Un incarico di marketing procede per cicli: analisi, piano, attivazione, misurazione dei risultati rispetto agli indicatori concordati (KPI) e correzione delle attività. Alcune piccole e medie imprese affidano all'agenzia anche il ruolo di responsabile marketing esterno, quando in azienda non c'è una figura dedicata.",
        "Al progetto lavorano il marketing strategist, che imposta il piano; l'account, referente del cliente; il product manager per i progetti di prodotto; gli specialisti dei singoli canali; l'analista che segue dati e risultati.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo le stime di UNA, l'associazione delle aziende della comunicazione, nel 2026 il mercato italiano della comunicazione vale 17,8 miliardi di euro (+4,4%). Oltre alla pubblicità sui mezzi, circa 5,2 miliardi vanno ad attività che rientrano spesso in un piano di marketing: eventi (+14,9%), sponsorizzazioni, influencer marketing e branded content (+8%).",
      "Le piccole imprese sono una parte decisiva della domanda: con i loro investimenti e quelli dei professionisti il mercato pubblicitario cresce del 2,9%, senza dello 0,9%. Resta ampio lo spazio sui canali di vendita digitali: secondo l'Istat, nel 2025 vende online il 14,7% delle imprese con almeno 10 addetti.",
    ],
    fonti: [
      { nome: "UNA, Media Hub: stime sul mercato della comunicazione, giugno 2026", url: "https://www.primaonline.it/wp-content/uploads/2026/06/Una-chart.pdf" },
      { nome: "Istat, Imprese e Ict, dicembre 2025", url: "https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/" },
    ],
  },
  costi: {
    testo: [
      "Un'agenzia di marketing è remunerata con un canone mensile per l'affiancamento continuativo e con un compenso a progetto per gli incarichi definiti, come un piano di marketing, una ricerca di mercato o il lancio di un prodotto. Per le attività di acquisizione di contatti si usano anche compensi legati ai risultati, per esempio per contatto qualificato.",
      "Il costo dipende dalle attività comprese, dal numero di canali e dalla durata dell'incarico. Restano a parte il budget pubblicitario e i costi di eventi, fiere e materiali. Per confrontare due proposte conviene chiedere il dettaglio delle attività e del tempo previsto per ciascuna.",
    ],
  },
  domande: [
    {
      domanda: "Agenzia marketing o agenzia di comunicazione: che differenza c'è?",
      risposta: "L'agenzia di marketing parte dagli obiettivi commerciali e lavora su offerta, canali di vendita e acquisizione dei clienti; l'agenzia di comunicazione lavora su immagine, messaggi e relazioni con il pubblico. Per una piccola impresa le due competenze sono spesso nella stessa struttura: conta che l'incarico parta dall'obiettivo giusto.",
    },
    {
      domanda: "Che cosa contiene un piano di marketing?",
      risposta: "L'analisi del mercato e dei concorrenti, gli obiettivi misurabili, il pubblico e il posizionamento dell'offerta, le leve scelte (prodotto, prezzo, canali, promozione), il calendario delle attività, il budget e gli indicatori con cui si misureranno i risultati.",
    },
    {
      domanda: "Un'agenzia di marketing può sostituire il responsabile marketing interno?",
      risposta: "In parte. Molte piccole imprese affidano all'agenzia la pianificazione e il coordinamento delle attività, come farebbe un responsabile marketing. Serve comunque un referente in azienda che conosca prodotti, clienti e numeri di vendita e che prenda le decisioni.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia di marketing",
    gruppi: [
      gruppo("Analisi", [
        ["Ricerche di mercato", "Indagini su clienti, domanda e tendenze del settore."],
        ["Analisi dei concorrenti", "Offerta, prezzi, canali e comunicazione dei competitor."],
        ["Segmentazione dei clienti", "Suddivisione del pubblico in gruppi con bisogni simili."],
        ["Analisi dei dati di vendita", "Lettura di vendite, clienti e canali per individuare le priorità."],
      ]),
      gruppo("Strategia", [
        ["Piano di marketing", "Obiettivi, pubblico, leve, calendario e budget delle attività."],
        ["Posizionamento dell'offerta", "Che cosa distingue prodotti e servizi da quelli dei concorrenti."],
        ["Politica di prezzo", "Livelli di prezzo, listini e condizioni commerciali."],
        ["Strategia di ingresso sul mercato", "Come portare un'offerta nuova al suo pubblico (go-to-market)."],
      ]),
      gruppo("Lancio e promozione", [
        ["Lancio di prodotto", "Pianificazione e coordinamento delle attività di lancio."],
        ["Promozioni", "Offerte, concorsi e iniziative a tempo."],
        ["Trade marketing", "Attività rivolte a rivenditori, distributori e punti vendita."],
        ["Fiere ed eventi", "Partecipazione, organizzazione e comunicazione."],
      ]),
      gruppo("Acquisizione dei clienti", [
        ["Lead generation", "Campagne e strumenti per raccogliere contatti di potenziali clienti."],
        ["Email marketing", "Newsletter e comunicazioni a clienti e contatti."],
        ["Marketing automation", "Comunicazioni automatiche attivate dal comportamento dell'utente."],
        ["Campagne online", "Annunci a pagamento su motori di ricerca e social."],
      ]),
      gruppo("Fidelizzazione", [
        ["CRM", "Organizzazione dei dati e della storia di ogni cliente."],
        ["Programmi fedeltà", "Iniziative per premiare e trattenere i clienti."],
        ["Soddisfazione dei clienti", "Indagini e indicatori sulla qualità percepita."],
      ]),
      gruppo("Affiancamento e misurazione", [
        ["Responsabile marketing esterno", "Un professionista dell'agenzia che svolge il ruolo per un periodo (temporary marketing manager)."],
        ["KPI e report", "Indicatori concordati e sintesi periodica dei risultati."],
        ["Analisi dei risultati", "Lettura dei dati e indicazioni per le attività successive."],
      ]),
    ],
  },
};
