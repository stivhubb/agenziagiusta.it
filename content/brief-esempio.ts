import type { DatiBrief } from "@/components/Brief";

// Brief di esempio, con un'azienda e dati inventati.
// Serve a vedere l'impaginazione e il tono dei testi prima di collegare il modello.
// I campi dopo "Scritti dal modello" sono scritti a mano come li scriverebbe il modello.

export const briefEsempio: DatiBrief = {
  data: "4 ottobre 2026",
  ragioneSociale: "Officine Marea Srl",
  referente: "Giulia Esposito",
  funzione: "Direzione commerciale",
  email: "g.esposito@officinemarea.example",
  telefono: "081 000 0000",

  settore: "Altro: nautica",
  modelloBusiness: "Entrambi",
  classeDimensionale: "Piccola (10-49)",
  mercato: ["Nazionale", "Internazionale"],
  sede: "Napoli",
  sitoWeb: "officinemarea.example",

  canali: ["Sito web", "Social media organico", "Eventi e fiere"],
  gestione: ["Risorsa interna dedicata", "Freelance"],
  investimentoAnnuo: "Meno di 20.000 €",

  obiettiviMarketing: [
    "Acquisizione di nuovi clienti",
    "Ingresso in nuovi mercati",
    "Sviluppo del canale e-commerce",
  ],
  obiettiviComunicazione: ["Brand awareness", "Posizionamento o riposizionamento"],

  areeServizio: [
    "Digital marketing e performance",
    "Sito web ed e-commerce",
    "Brand identity e design",
    "SEO e SEM",
  ],
  budgetAgenzia: "20.000-50.000 €",
  localizzazione: "Indifferente",

  // Scritti dal modello
  contesto: [
    "Officine Marea è una piccola impresa napoletana che progetta e produce attrezzatura di coperta per barche a vela. Vende sia ai cantieri sia agli armatori, in Italia e all'estero. Si distingue per la lavorazione interna dell'acciaio e per i tempi di consegna sui pezzi su misura.",
    "Oggi la comunicazione è seguita da una risorsa interna con il supporto di un freelance. L'azienda presidia il sito web, i social media in organico e le fiere di settore; non svolge attività di advertising.",
  ],
  concorrenti:
    "Due produttori italiani di attrezzatura di coperta e i grandi marchi francesi e inglesi, più presenti nella distribuzione e sulle riviste di settore.",
  target:
    "Cantieri di piccola e media dimensione che costruiscono barche a vela tra 30 e 50 piedi, dove la scelta passa dall'ufficio tecnico, e armatori esperti che sostituiscono l'attrezzatura da soli e si informano su forum e riviste specializzate.",
  kpi: "Richieste di preventivo dai cantieri esteri, vendite dall'e-commerce, visite al sito da Francia e Germania.",
  priorita: [
    "Avere un unico interlocutore per sito, campagne e contenuti.",
    "Partire dal mercato francese, dove l'azienda ha già due distributori.",
    "Mantenere un tono tecnico: il pubblico riconosce subito chi non conosce il prodotto.",
  ],
  vincoli:
    "Logo e colori aziendali non si modificano. Il catalogo tecnico esistente resta la base per le schede prodotto.",
};
