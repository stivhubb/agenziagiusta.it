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
      "Rispondi al quiz, ricevi il brief via email e decidi se inviarlo a 2-3 agenzie adatte. Per le aziende è gratis: ecco come funziona.",
  },
  intro: [
    "AgenziaGiusta.it non è un'agenzia. Ti aiuta a mettere per iscritto cosa ti serve e, se vuoi, a farlo arrivare alle agenzie più adatte.",
    "Chi cerca un'agenzia di solito parte da una ricerca online, apre una decina di siti che si somigliano e manda qualche richiesta di contatto. Poi aspetta, ripete la stessa spiegazione a ogni telefonata e riceve preventivi che non riesce a confrontare. È un percorso lungo, e il risultato dipende più dal caso che dal merito.",
    "Noi partiamo dall'altro capo: prima di cercare l'agenzia, mettiamo in ordine la richiesta. Il quiz ti fa le domande che un'agenzia ti farebbe al primo incontro e con le tue risposte costruisce un brief, cioè il documento che descrive il progetto. A quel punto decidi tu cosa farne: usarlo per conto tuo, oppure chiederci di inviarlo alle agenzie più adatte.",
    "Qui sotto trovi i tre passi, quanto costa il servizio e cosa succede dopo l'invio del brief.",
  ],
  passi: [
    {
      titolo: "Rispondi al quiz",
      testo:
        "Poche domande su attività, servizi richiesti, budget, tempi e città. Non servono competenze di marketing.",
    },
    {
      titolo: "Ricevi il tuo brief",
      testo:
        "Con le tue risposte componiamo un documento ordinato e te lo mandiamo via email. È tuo: puoi usarlo con qualsiasi agenzia.",
    },
    {
      titolo: "Decidi se inviarlo alle agenzie",
      testo:
        "Se ci dai il consenso, lo inviamo a 2-3 agenzie adatte al tuo progetto. Saranno loro a contattarti con una proposta.",
    },
  ],
  sezioni: [
    {
      titolo: "Quanto costa",
      blocchi: [
        // DA CONFERMARE: il compenso solo a contratto firmato.
        "Per le aziende il servizio è gratuito. Le agenzie ci riconoscono un compenso solo se firmi un contratto con una di loro.",
      ],
    },
    {
      titolo: "Come scegliamo le agenzie",
      blocchi: [
        "In base a quattro criteri: i servizi che offrono, i settori in cui hanno esperienza, la fascia di budget su cui lavorano e la zona.",
      ],
    },
    {
      titolo: "Cosa succede dopo",
      blocchi: [
        "Le agenzie ti contattano e ti presentano la loro proposta. Scegli tu se e con chi lavorare: non hai nessun obbligo.",
      ],
    },
  ],
  fascia: "Pronto a costruire il tuo brief?",
};
