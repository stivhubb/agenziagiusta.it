import type { Pagina } from "./tipi";

// Testi della guida alla scelta dell'agenzia.

export const guida: Pagina = {
  titolo: { testo: "Come scegliere un'agenzia e scrivere", evidenza: "un buon brief." },
  intro: [
    "Scegliere un'agenzia è più semplice se sai già cosa chiedere. Il brief serve a questo: mette per iscritto cosa ti serve, con quale budget e in quali tempi, così ogni agenzia risponde alla stessa domanda.",
    "Molte collaborazioni tra aziende e agenzie partono male per un motivo semplice: la richiesta iniziale è vaga. L'azienda chiede \"un preventivo per la comunicazione\", ogni agenzia interpreta a modo suo e le proposte che arrivano non si possono confrontare, perché rispondono a domande diverse. Si finisce per scegliere in base al prezzo o alla simpatia, e i problemi emergono dopo qualche mese.",
    "Un buon brief evita tutto questo. Non serve che sia lungo né scritto in gergo tecnico: deve dire chi sei, cosa vuoi ottenere, quanto puoi investire e in che tempi. Con queste informazioni un'agenzia capisce subito se il progetto fa per lei, e tu ricevi proposte costruite sulle tue esigenze invece che su un modello standard.",
    "Questa guida segue l'ordine in cui conviene muoversi: prima chiarire cosa ti serve, poi scrivere il brief, poi valutare le proposte. In fondo trovi gli errori più frequenti, che sono quasi sempre gli stessi.",
  ],
  sezioni: [
    {
      titolo: "Prima di cercare: chiarisci cosa ti serve",
      blocchi: [
        "Parti dall'obiettivo, non dal servizio. \"Voglio più richieste di preventivo\" è un obiettivo; \"voglio una campagna social\" è già una soluzione, e forse non la migliore. Un'agenzia seria ti aiuta a scegliere la strada, ma ha bisogno di sapere dove vuoi arrivare.",
      ],
    },
    {
      titolo: "Cosa deve contenere un brief",
      blocchi: [
        {
          elenco: [
            { termine: "L'azienda:", testo: "cosa fai, per chi, in quale mercato." },
            { termine: "L'obiettivo:", testo: "cosa deve cambiare grazie al progetto." },
            {
              termine: "I servizi richiesti:",
              testo: "quelli che pensi ti servano, anche se non ne sei sicuro.",
            },
            { termine: "Il budget:", testo: "anche solo una fascia indicativa." },
            { termine: "I tempi:", testo: "quando vuoi partire e se ci sono scadenze." },
          ],
        },
      ],
    },
    {
      titolo: "Come confrontare le proposte",
      blocchi: [
        "Se tutte le agenzie partono dallo stesso brief, puoi confrontarle sugli stessi punti: cosa propongono, chi ci lavora, cosa è incluso nel prezzo e come misurano i risultati. Diffida delle proposte che promettono numeri senza spiegare come ci arrivano.",
      ],
    },
    {
      titolo: "Gli errori più comuni",
      blocchi: [
        "Non dichiarare il budget, chiedere preventivi a troppe agenzie insieme e scegliere solo in base al prezzo. In tutti e tre i casi ricevi proposte difficili da confrontare e rischi di ripartire da capo dopo pochi mesi.",
      ],
    },
  ],
};
