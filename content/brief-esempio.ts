import type { Risposte } from "./brief";

// Risposte di esempio al quiz, con un'azienda e dati inventati.
// La pagina /brief/esempio/ le passa a content/brief.ts, che scrive il brief:
// quello che si vede è quindi il risultato vero delle regole, non un testo scritto a mano.

export const risposteEsempio: Risposte = {
  // L'azienda
  settore: "Altro",
  settoreAltro: "Nautica",
  modelloBusiness: "Entrambi",
  classeDimensionale: "Piccola (10-49)",
  mercato: ["Nazionale", "Internazionale"],
  sede: "Napoli",
  prodottoPosizionamento:
    "progettiamo e produciamo attrezzatura di coperta per barche a vela. Lavoriamo l'acciaio internamente e consegniamo i pezzi su misura in tempi più brevi dei concorrenti",
  concorrenti:
    "due produttori italiani di attrezzatura di coperta e i grandi marchi francesi e inglesi, più presenti nella distribuzione e sulle riviste di settore",
  sitoWeb: "officinemarea.example",

  // Comunicazione attuale
  canali: ["Sito web", "Social media organico", "Eventi e fiere"],
  gestione: ["Risorsa interna dedicata", "Freelance"],
  toneAttuale: ["Tecnico e specialistico"],
  investimentoAnnuo: "Meno di 20.000 €",

  // Obiettivi
  obiettiviMarketing: [
    "Acquisizione di nuovi clienti",
    "Ingresso in nuovi mercati",
    "Sviluppo del canale e-commerce",
  ],
  obiettiviComunicazione: ["Brand awareness", "Posizionamento o riposizionamento"],
  toneDesiderato: ["Tecnico e specialistico", "Autorevole"],
  target:
    "cantieri di piccola e media dimensione che costruiscono barche a vela tra 30 e 50 piedi, dove la scelta passa dall'ufficio tecnico, e armatori esperti che sostituiscono l'attrezzatura da soli e si informano su forum e riviste specializzate",
  kpi: "richieste di preventivo dai cantieri esteri, vendite dall'e-commerce, visite al sito da Francia e Germania",

  // Servizi ricercati
  areeServizio: [
    "Digital marketing e performance",
    "Sito web ed e-commerce",
    "Brand identity e design",
    "SEO e SEM",
  ],
  budgetAgenzia: "20.000-50.000 €",
  localizzazione: "Indifferente",
  vincoli:
    "logo e colori aziendali non si modificano. Il catalogo tecnico esistente resta la base per le schede prodotto",

  // Considerazioni
  considerazioni:
    "vogliamo un unico interlocutore per sito, campagne e contenuti. Preferiamo partire dal mercato francese, dove abbiamo già due distributori. Il tono deve restare tecnico: il nostro pubblico riconosce subito chi non conosce il prodotto",

  // Contatti
  referente: "Giulia Esposito",
  funzione: "Direzione commerciale",
  ragioneSociale: "Officine Marea Srl",
  email: "g.esposito@officinemarea.example",
  telefono: "081 000 0000",
};
