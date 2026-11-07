import { percorsi, sito } from "./sito";
import type { Sezione } from "./tipi";

// Cookie policy. Il sito non installa cookie propri (Vercel Web Analytics non ne usa). L'unica terza parte
// sono i video di YouTube: si caricano solo dopo il consenso (components/Consenso.tsx).
// Se si aggiunge un altro servizio esterno (mappe, chat, pixel), questo testo e l'avviso vanno aggiornati.

export const cookie: { titolo: string; aggiornamento: string; sezioni: Sezione[] } = {
  titolo: "Cookie policy",
  aggiornamento: "Ultimo aggiornamento: 7 novembre 2026",
  sezioni: [
    {
      titolo: "Cosa sono i cookie",
      blocchi: [
        "I cookie sono piccoli file che un sito salva nel browser per ricordare informazioni durante la visita o tra una visita e l'altra. Strumenti simili sono la memoria locale del browser e i pixel di tracciamento.",
      ],
    },
    {
      titolo: "Cookie e strumenti tecnici",
      blocchi: [
        `${sito.nome} non usa cookie di profilazione propri. I caratteri sono serviti dal sito stesso.`,
        "Le visite sono misurate con Vercel Web Analytics, che non usa cookie e non salva dati nel browser: conta le pagine viste in forma aggregata, senza identificare chi visita il sito.",
        "Le risposte che dai nel brief guidato restano nella pagina mentre la compili e non vengono salvate nel browser.",
        "Quando scegli se accettare i cookie di YouTube, il sito salva la tua scelta e la data nella memoria locale del browser, per non chiedertelo a ogni pagina. È uno strumento tecnico e non richiede consenso.",
      ],
    },
    {
      titolo: "Video di YouTube",
      blocchi: [
        "Alcune pagine contengono video ospitati su YouTube, servizio di Google Ireland Limited. Usiamo la modalità di privacy avanzata (youtube-nocookie.com), ma guardando il video YouTube può comunque installare cookie e strumenti simili, anche per misurare le visualizzazioni e per finalità pubblicitarie proprie.",
        "Per questo il video non viene caricato finché non accetti: prima vedi solo un riquadro con il titolo, senza alcun collegamento ai server di Google. Nelle pagine con video un avviso ti chiede se accettare; chiudendolo con la X continui senza questi cookie, e puoi sempre guardare il video direttamente su YouTube.",
        "Se accetti, la scelta vale per 12 mesi. Se chiudi l'avviso, non te lo riproponiamo per 6 mesi; puoi comunque accettare in ogni momento dal riquadro del video.",
        "Come Google tratta i dati è spiegato nella sua informativa.",
        { link: { testo: "Informativa privacy di Google", href: "https://policies.google.com/privacy?hl=it" } },
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
        "Puoi cambiare la tua scelta sui cookie di YouTube in qualsiasi momento con il link \"Preferenze cookie\" in fondo a ogni pagina.",
        "Puoi anche vedere e cancellare i cookie dalle impostazioni del browser, nella sezione dedicata a privacy e sicurezza. I cookie già installati da YouTube si cancellano da lì.",
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
        "Se il sito inizia a usare altri cookie o servizi esterni, aggiorniamo questa pagina e chiediamo il consenso prima di attivarli, quando serve.",
      ],
    },
  ],
};
