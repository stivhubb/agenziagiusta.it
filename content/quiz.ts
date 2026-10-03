// Quiz + brief: sei schermate, ognuna con i suoi campi.
// Per cambiare una domanda, una voce o l'ordine si modifica questo file.
//
// Tipi di campo:
// - singola / multipla: voci tra cui scegliere (multipla con "max" limita le scelte)
// - testo / testo-lungo / email / telefono / url: campi da scrivere
// - provincia: testo con i suggerimenti delle province
// - casella: una spunta da accettare
// La voce "Altro" apre un campo per specificare.

export type Campo = {
  id: string;
  etichetta: string;
  tipo:
    | "singola"
    | "multipla"
    | "testo"
    | "testo-lungo"
    | "email"
    | "telefono"
    | "url"
    | "provincia"
    | "casella";
  opzioni?: string[];
  max?: number;
  aiuto?: string;
  facoltativo?: boolean;
};

export type Passo = { nome: string; testo: string; campi: Campo[] };

export const ALTRO = "Altro";

// Fasce di budget annuo, usate in due campi.
const fasce = [
  "Meno di 20.000 €",
  "20.000-50.000 €",
  "50.000-100.000 €",
  "100.000-150.000 €",
  "Oltre 150.000 €",
];

// Chi sceglie questa voce deve lasciare anche il telefono.
export const INVIO_SI = "Sì, selezionate un'agenzia e inviatele i miei dati";

export const passi: Passo[] = [
  {
    nome: "L'azienda",
    testo: "Partiamo da chi sei: settore, dimensione e cosa offri.",
    campi: [
      {
        id: "settore",
        etichetta: "Settore merceologico",
        tipo: "singola",
        opzioni: [
          "Food & beverage",
          "Moda e lusso",
          "Arredo e design",
          "Turismo e hospitality",
          "Ho.Re.Ca.",
          "Salute e benessere",
          "Servizi professionali",
          "Tecnologia e software",
          "Industria e manifattura",
          "Edilizia e real estate",
          "Retail e GDO",
          "Formazione",
          "No profit",
          ALTRO,
        ],
      },
      {
        id: "modelloBusiness",
        etichetta: "Modello di business",
        tipo: "singola",
        aiuto: "A chi vendi.",
        opzioni: ["Consumer", "Azienda", "Entrambi"],
      },
      {
        id: "classeDimensionale",
        etichetta: "Classe dimensionale",
        tipo: "singola",
        opzioni: [
          "Microimpresa (fino a 9 addetti)",
          "Piccola (10-49)",
          "Media (50-249)",
          "Grande (250 e oltre)",
        ],
      },
      {
        id: "mercato",
        etichetta: "Mercato di riferimento",
        tipo: "multipla",
        opzioni: ["Locale", "Regionale", "Nazionale", "Internazionale"],
      },
      { id: "sede", etichetta: "Sede", tipo: "provincia", aiuto: "La provincia della sede." },
      {
        id: "prodottoPosizionamento",
        etichetta: "Prodotto e posizionamento",
        tipo: "testo-lungo",
        aiuto: "Cosa offre l'azienda e cosa la distingue dai concorrenti.",
      },
      { id: "sitoWeb", etichetta: "Sito web", tipo: "url", facoltativo: true },
    ],
  },
  {
    nome: "Comunicazione attuale",
    testo: "Cosa fate oggi e chi se ne occupa.",
    campi: [
      {
        id: "canali",
        etichetta: "Canali presidiati",
        tipo: "multipla",
        opzioni: [
          "Sito web",
          "E-commerce",
          "Social media organico",
          "Advertising online (search, social, display)",
          "Advertising offline (stampa, tv, radio, affissioni)",
          "Email marketing e CRM",
          "PR e ufficio stampa",
          "Eventi e fiere",
          "Materiali below the line",
          "Nessuna attività strutturata",
          ALTRO,
        ],
      },
      {
        id: "gestione",
        etichetta: "Gestione della comunicazione",
        tipo: "multipla",
        opzioni: [
          "Risorsa interna dedicata",
          "Team marketing interno",
          "Freelance",
          "Agenzia",
          "Nessun presidio",
        ],
      },
      {
        id: "investimentoAnnuo",
        etichetta: "Investimento annuo in comunicazione",
        tipo: "singola",
        aiuto: "Quanto spendete oggi in un anno, spesa per i mezzi inclusa.",
        opzioni: fasce,
        facoltativo: true,
      },
    ],
  },
  {
    nome: "Obiettivi",
    testo: "Cosa vuoi ottenere e a chi ti rivolgi.",
    campi: [
      {
        id: "obiettiviMarketing",
        etichetta: "Obiettivi di marketing",
        tipo: "multipla",
        max: 3,
        opzioni: [
          "Lead generation",
          "Incremento delle vendite",
          "Acquisizione di nuovi clienti",
          "Fidelizzazione e retention",
          "Lancio di prodotto o servizio",
          "Ingresso in nuovi mercati",
          "Sviluppo del canale e-commerce",
        ],
      },
      {
        id: "obiettiviComunicazione",
        etichetta: "Obiettivi di comunicazione",
        tipo: "multipla",
        max: 3,
        opzioni: [
          "Brand awareness",
          "Posizionamento o riposizionamento",
          "Rebranding",
          "Reputazione",
          "Engagement della community",
          "Employer branding",
          "Comunicazione corporate",
        ],
      },
      {
        id: "target",
        etichetta: "Target",
        tipo: "testo-lungo",
        aiuto: "A chi si rivolge l'azienda: segmenti, profilo dei clienti.",
      },
      {
        id: "kpi",
        etichetta: "KPI principali",
        tipo: "testo-lungo",
        aiuto: "Gli indicatori su cui misurare il risultato.",
        facoltativo: true,
      },
    ],
  },
  {
    nome: "Servizi ricercati",
    testo: "Di cosa hai bisogno e con quale budget.",
    campi: [
      {
        id: "areeServizio",
        etichetta: "Aree di servizio",
        tipo: "multipla",
        opzioni: [
          "Advertising e pianificazione media",
          "Strategia di marketing",
          "Digital marketing e performance",
          "Sito web ed e-commerce",
          "Brand identity e design",
          "Social media e influencer marketing",
          "PR e media relations",
          "SEO e SEM",
          "Produzione video e foto",
          "Da definire con l'agenzia",
          ALTRO,
        ],
      },
      {
        id: "budgetAgenzia",
        etichetta: "Budget annuo per l'agenzia",
        tipo: "singola",
        aiuto: "Esclusa la spesa per i mezzi.",
        opzioni: [...fasce, "Da definire"],
      },
      {
        id: "localizzazione",
        etichetta: "Localizzazione dell'agenzia",
        tipo: "singola",
        opzioni: ["Stessa provincia", "Stessa regione", "Indifferente"],
      },
    ],
  },
  {
    nome: "Considerazioni",
    testo: "Lo spazio per quello che le domande non ti hanno chiesto.",
    campi: [
      {
        id: "considerazioni",
        etichetta: "Considerazioni",
        tipo: "testo-lungo",
        aiuto:
          "Cosa ritieni più importante per questo progetto? Cosa dovrebbe sapere l'agenzia che le domande precedenti non ti hanno chiesto?",
      },
    ],
  },
  {
    nome: "Contatti",
    testo: "Dove ti mandiamo il brief.",
    campi: [
      { id: "referente", etichetta: "Referente", tipo: "testo", aiuto: "Nome e cognome." },
      {
        id: "funzione",
        etichetta: "Funzione aziendale",
        tipo: "singola",
        opzioni: ["Titolare o amministratore", "Direzione marketing", "Direzione commerciale", ALTRO],
      },
      { id: "ragioneSociale", etichetta: "Ragione sociale", tipo: "testo" },
      { id: "email", etichetta: "Email", tipo: "email" },
      {
        id: "invioAgenzie",
        etichetta:
          "Vuoi che selezioniamo un'agenzia creativa adatta al tuo progetto e le inviamo i tuoi dati per farti contattare?",
        tipo: "singola",
        aiuto:
          "Selezioniamo una sola agenzia. Senza il tuo consenso i tuoi dati non vengono inviati a nessuno.",
        opzioni: [INVIO_SI, "No, voglio solo ricevere il brief"],
      },
      {
        id: "telefono",
        etichetta: "Telefono",
        tipo: "telefono",
        aiuto: "Obbligatorio solo se vuoi essere contattato dall'agenzia.",
        facoltativo: true,
      },
      { id: "privacy", etichetta: "Consenso privacy", tipo: "casella" },
    ],
  },
];

export const quiz = {
  seo: {
    title: "Crea il brief per la tua agenzia",
    description:
      "Crea il brief per la tua agenzia in pochi minuti: rispondi a poche domande e ricevilo via email, pronto da usare.",
  },
  // Schermata tra le domande e i contatti: i contatti si chiedono solo a chi vuole il brief.
  genera: {
    titolo: "Vuoi generare il tuo brief?",
    testo:
      "Hai risposto a tutte le domande. Con le tue risposte prepariamo il brief e te lo mandiamo via email: ci servono solo i tuoi contatti.",
    pulsante: "Genera il brief",
  },
  pulsanteFine: "Ricevi il brief",
  // Primo giro: il quiz si compila ma non salva e non invia.
  segnapostoFine:
    "[QUIZ COMPLETATO. GENERAZIONE DEL BRIEF, SALVATAGGIO E INVIO VIA EMAIL: DA COLLEGARE]",
  brief: {
    titolo: "Il tuo brief prende forma",
    nota: "Alla fine ricevi il brief via email. Decidi tu se farci selezionare un'agenzia che ti contatti.",
  },
  errori: {
    obbligatorio: "Campo obbligatorio.",
    altro: "Specifica la voce Altro.",
    email: "Inserisci un indirizzo email valido.",
    telefono: "Per farti contattare dall'agenzia serve un numero di telefono.",
    casella: "Per ricevere il brief devi accettare la privacy e policy.",
  },
};
