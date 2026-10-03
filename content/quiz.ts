// Passi del quiz. Seguono i cinque temi del brief: attività, servizi richiesti, budget, tempi, città.
// Solo il passo "Servizi richiesti" ha una domanda di esempio: le altre domande e il contenuto
// del brief sono da definire. Un passo senza opzioni mostra un segnaposto.

export type Passo = {
  nome: string;
  domanda: string;
  aiuto?: string;
  multipla?: boolean;
  opzioni: string[];
};

export const passi: Passo[] = [
  { nome: "Attività", domanda: "[DOMANDA SULL'ATTIVITÀ: DA DEFINIRE]", opzioni: [] },
  {
    nome: "Servizi richiesti",
    domanda: "Di quali servizi hai bisogno?",
    aiuto:
      "Puoi sceglierne più di uno. Se non sei sicuro, indica quelli che ti sembrano più vicini.",
    multipla: true,
    opzioni: [
      "Pubblicità e advertising",
      "Marketing",
      "Digital e web marketing",
      "Sito web o e-commerce",
      "Branding, grafica e design",
      "Social media e influencer",
      "PR e ufficio stampa",
      "SEO e SEM",
      "Video, foto e spot",
    ],
  },
  { nome: "Budget", domanda: "[DOMANDA SUL BUDGET: DA DEFINIRE]", opzioni: [] },
  { nome: "Tempi", domanda: "[DOMANDA SUI TEMPI: DA DEFINIRE]", opzioni: [] },
  { nome: "Città", domanda: "[DOMANDA SULLA CITTÀ: DA DEFINIRE]", opzioni: [] },
];

export const quiz = {
  titoloPagina: "Crea il tuo brief",
  descrizione:
    "Rispondi a poche domande su attività, servizi richiesti, budget, tempi e città: alla fine ricevi il tuo brief via email.",
  segnapostoOpzioni: "[OPZIONI DI RISPOSTA: DA DEFINIRE]",
  // Ultimo passo: contatti, consenso e invio del brief sono fuori dal primo giro.
  segnapostoFine:
    "[FINE DEL QUIZ: RACCOLTA DEI CONTATTI, CONSENSO ALL'INVIO A 2-3 AGENZIE E INVIO DEL BRIEF VIA EMAIL, DA DEFINIRE]",
  brief: {
    titolo: "Il tuo brief prende forma",
    nota: "Alla fine ricevi il brief via email. Decidi tu se farlo arrivare a 2-3 agenzie adatte al tuo progetto.",
  },
};
