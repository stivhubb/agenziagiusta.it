import { percorsi, sito } from "./sito";
import type { Sezione } from "./tipi";

// Cookie policy. Oggi il sito non installa cookie (Vercel Web Analytics non ne usa): se si aggiunge
// un altro strumento di misurazione o un servizio esterno (video, mappe, chat), questo testo va aggiornato e può servire il banner.

export const cookie: { titolo: string; aggiornamento: string; sezioni: Sezione[] } = {
  titolo: "Cookie policy",
  aggiornamento: "Ultimo aggiornamento: 20 ottobre 2026",
  sezioni: [
    {
      titolo: "Cosa sono i cookie",
      blocchi: [
        "I cookie sono piccoli file che un sito salva nel browser per ricordare informazioni durante la visita o tra una visita e l'altra. Strumenti simili sono la memoria locale del browser e i pixel di tracciamento.",
      ],
    },
    {
      titolo: "Cookie usati da questo sito",
      blocchi: [
        `${sito.nome} non usa cookie di profilazione, cookie di statistica o di terze parti, né strumenti simili. I caratteri sono serviti dal sito stesso e non ci sono video, mappe o pulsanti di social network incorporati.`,
        "Le visite sono misurate con Vercel Web Analytics, che non usa cookie e non salva dati nel browser: conta le pagine viste in forma aggregata, senza identificare chi visita il sito.",
        "Le risposte che dai nel brief guidato restano nella pagina mentre la compili e non vengono salvate nel browser.",
        "Per questo il sito non mostra un banner: il consenso è richiesto solo per i cookie che non sono tecnici.",
      ],
    },
    {
      titolo: "Link ad altri siti",
      blocchi: [
        "Le pagine del sito contengono link ai siti delle agenzie. Quando li apri valgono le informative e le cookie policy di quei siti.",
      ],
    },
    {
      titolo: "Come gestire i cookie",
      blocchi: [
        "Puoi vedere e cancellare i cookie dalle impostazioni del browser, nella sezione dedicata a privacy e sicurezza.",
      ],
    },
    {
      titolo: "Titolare e contatti",
      blocchi: [
        `Il titolare del trattamento è ${sito.titolare}. Per domande scrivi a ${sito.emailPrivacy}. Come trattiamo i dati personali è spiegato nell'informativa privacy.`,
        { link: { testo: "Informativa privacy", href: percorsi.privacy } },
      ],
    },
    {
      titolo: "Modifiche",
      blocchi: [
        "Se il sito inizia a usare altri cookie o strumenti di misurazione, aggiorniamo questa pagina e, quando serve, chiediamo il consenso con un banner prima di attivarli.",
      ],
    },
  ],
};
