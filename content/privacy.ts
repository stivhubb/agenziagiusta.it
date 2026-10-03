import { sito } from "./sito";
import type { Sezione } from "./tipi";

// Testi della pagina Privacy e policy.
// Testo provvisorio: va redatto con un consulente.

export const privacy: { titolo: string; aggiornamento: string; sezioni: Sezione[] } = {
  titolo: "Privacy e policy",
  aggiornamento: "Ultimo aggiornamento: [DATA]",
  sezioni: [
    {
      titolo: "Titolare del trattamento",
      blocchi: [
        `${sito.ragioneSociale}, ${sito.indirizzo}, P. IVA ${sito.partitaIva}. Per le richieste sui tuoi dati scrivi a ${sito.emailPrivacy}.`,
      ],
    },
    {
      titolo: "Quali dati raccogliamo",
      blocchi: [
        "Le risposte che dai nel quiz, i contatti che ci lasci per ricevere il brief e i messaggi che ci invii dai moduli del sito.",
      ],
    },
    {
      titolo: "Perché li trattiamo",
      blocchi: [
        "Per comporre il tuo brief e inviartelo via email e per rispondere alle tue richieste.",
        { segnaposto: "[BASI GIURIDICHE DEL TRATTAMENTO: DA REDIGERE CON IL CONSULENTE]" },
      ],
    },
    {
      titolo: "Invio del brief alle agenzie",
      blocchi: [
        "Inviamo il tuo brief e i tuoi contatti a 2-3 agenzie solo se ci dai un consenso esplicito alla fine del quiz. Senza consenso il brief resta a te.",
      ],
    },
    {
      titolo: "Per quanto tempo li conserviamo",
      blocchi: [{ segnaposto: "[TEMPI DI CONSERVAZIONE: DA DEFINIRE]" }],
    },
    {
      titolo: "I tuoi diritti",
      blocchi: [
        `Puoi chiedere in ogni momento di vedere, correggere o cancellare i tuoi dati e di revocare il consenso all'invio alle agenzie, scrivendo a ${sito.emailPrivacy}.`,
      ],
    },
    {
      titolo: "Cookie",
      blocchi: [{ segnaposto: "[COOKIE E STRUMENTI DI MISURAZIONE USATI: DA DEFINIRE]" }],
    },
  ],
};
