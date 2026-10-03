import type { Pagina, Seo } from "./tipi";

// Testi della pagina Come funziona.

export const comeFunziona: Pagina & {
  passi: { titolo: string; testo: string }[];
  fascia: string;
  seo: Seo;
} = {
  titolo: { testo: "Dal quiz all'agenzia giusta,", evidenza: "in tre passi." },
  seo: {
    title: "Come funziona AgenziaGiusta.it: dal quiz al brief",
    description:
      "Rispondi al quiz, ricevi il brief via email e vieni contattato da un'agenzia adatta al tuo progetto. Per le aziende è gratis: ecco come funziona.",
  },
  intro: [
    "AgenziaGiusta.it non è un'agenzia. Ti aiuta a mettere per iscritto cosa ti serve e ti mette in contatto con un'agenzia adatta.",
    "Chi cerca un'agenzia di solito parte da una ricerca online, apre una decina di siti che si somigliano e manda qualche richiesta di contatto. Poi aspetta, ripete la stessa spiegazione a ogni telefonata e riceve preventivi che non riesce a confrontare. È un percorso lungo, e il risultato dipende più dal caso che dal merito.",
    "Noi partiamo dall'altro capo: prima di cercare l'agenzia, mettiamo in ordine la richiesta. Il quiz ti fa le domande che un'agenzia ti farebbe al primo incontro e con le tue risposte costruisce un brief, cioè il documento che descrive il progetto. Il brief è tuo e puoi usarlo come vuoi; noi lo inviamo a un'agenzia adatta, che ti contatta per presentarti la sua proposta.",
    "Qui sotto trovi i tre passi, quanto costa il servizio e cosa succede dopo l'invio del brief.",
  ],
  passi: [
    {
      titolo: "Rispondi al quiz",
      testo:
        "Poche domande su azienda, comunicazione attuale, obiettivi, servizi e budget. Non servono competenze di marketing.",
    },
    {
      titolo: "Ricevi il tuo brief",
      testo:
        "Con le tue risposte componiamo un documento ordinato e te lo mandiamo via email. È tuo: puoi usarlo con qualsiasi agenzia.",
    },
    {
      titolo: "Ti contatta un'agenzia adatta",
      testo:
        "Con il tuo consenso selezioniamo un'agenzia adatta al tuo progetto e le inviamo il brief. Sarà lei a contattarti con una proposta.",
    },
  ],
  sezioni: [
    {
      titolo: "Quanto costa",
      blocchi: [
        // DA CONFERMARE: il compenso solo a contratto firmato.
        "Per le aziende il servizio è gratuito. L'agenzia ci riconosce un compenso solo se firmi un contratto con lei.",
      ],
    },
    {
      titolo: "Come scegliamo l'agenzia",
      blocchi: [
        "In base a quattro criteri: i servizi che offre, i settori in cui ha esperienza, la fascia di budget su cui lavora e la zona.",
      ],
    },
    {
      titolo: "Cosa succede dopo",
      blocchi: [
        "L'agenzia ti contatta e ti presenta la sua proposta. Scegli tu se lavorarci: non hai nessun obbligo.",
      ],
    },
  ],
  fascia: "Pronto a costruire il tuo brief?",
};
