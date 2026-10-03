import { percorsi } from "./sito";

// Testi della pagina Contatti.
// I campi del modulo sono una proposta: quelli definitivi sono da decidere.

export const contatti = {
  titolo: { testo: "Come possiamo", evidenza: "aiutarti?" },
  apertura: "Scegli il motivo per cui ci scrivi: ti portiamo subito nel posto giusto.",
  // La terza scelta porta al modulo in fondo alla pagina.
  scelte: [
    {
      titolo: "Cerco un'agenzia",
      testo: "Parti dal quiz: in pochi minuti hai il tuo brief.",
      link: "Vai al quiz",
      href: percorsi.quiz,
    },
    {
      titolo: "Sono un'agenzia",
      testo: "Scopri come diventare partner e ricevere i brief.",
      link: "Vai alla pagina per le agenzie",
      href: percorsi.perLeAgenzie,
    },
    {
      titolo: "Altro",
      testo: "Per qualsiasi altra domanda, scrivici qui sotto.",
      link: "Scrivici",
      href: "#modulo",
    },
  ],
  modulo: {
    titolo: "Scrivici",
    pulsante: "Invia il messaggio",
  },
};
