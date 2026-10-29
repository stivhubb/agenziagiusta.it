import type { Pagina, Seo } from "./tipi";

// Testi della pagina Per le agenzie.
// Il modulo per diventare partner è nella pagina Contatti (switch "Sono un'agenzia").

export const perLeAgenzie: Pagina & {
  blocco: { occhiello: string; titolo: string; testo: string; vantaggi: string[] };
  modulo: { testo: string; pulsante: string };
  seo: Seo;
} = {
  titolo: { testo: "Clienti che arrivano con", evidenza: "un brief già scritto." },
  seo: {
    title: "Per le agenzie: ricevi brief già scritti",
    description:
      "Ricevi brief già scritti da aziende in linea con i tuoi servizi, settori e budget. Scopri come diventare agenzia partner.",
  },
  intro: [
    "Le aziende che passano da AgenziaGiusta.it hanno già chiarito cosa cercano, con quali obiettivi e con quale budget. Ti inviamo solo i progetti in linea con quello che fai.",
    "Chi si occupa di nuovi clienti lo sa: buona parte del tempo va in richieste che non portano a nulla. Contatti senza budget, aziende che non sanno ancora cosa vogliono, preventivi chiesti a dieci agenzie insieme solo per confrontare i prezzi. Ogni risposta costa ore di lavoro, e la maggior parte non diventa un contratto.",
    "AgenziaGiusta.it lavora sul passaggio precedente. Le aziende compilano un quiz guidato su azienda, comunicazione attuale, obiettivi, servizi e budget, e ricevono un brief ordinato. Ogni azienda chiede esplicitamente di essere contattata, e ogni brief va a una sola agenzia scelta in base al profilo, non a un elenco aperto.",
    "Per te significa ricevere meno richieste, ma più vicine a quello che fai: sai già di cosa si parla, con quali obiettivi e con quale budget, prima ancora della prima telefonata.",
  ],
  blocco: {
    occhiello: "Diventa partner",
    titolo: "Raccontaci la tua agenzia e parliamone.",
    testo:
      "Ci servono poche informazioni per capire quali progetti fanno al caso tuo. Ti ricontattiamo noi.",
    vantaggi: [
      "Brief già strutturati e completi",
      "Condizioni definite con ogni agenzia",
      "Ogni brief va a una sola agenzia",
    ],
  },
  modulo: {
    testo:
      "Compila il modulo per le agenzie nella pagina Contatti: servizi, settori, fascia di budget dei clienti e zona.",
    pulsante: "Diventa agenzia partner",
  },
  sezioni: [
    {
      titolo: "Come funziona",
      blocchi: [
        "Le aziende compilano un quiz e ricevono un brief. Su loro richiesta lo inviamo a una sola agenzia adatta al progetto: nessun'altra lo riceve.",
      ],
    },
    {
      titolo: "Condizioni",
      blocchi: [
        "Le condizioni di collaborazione le definiamo direttamente con ogni agenzia partner, in base ai progetti e ai clienti che segue. Scrivici dal modulo per parlarne.",
      ],
    },
    {
      titolo: "Come assegniamo i brief",
      blocchi: [
        "Confrontiamo ogni brief con il profilo delle agenzie partner: servizi, settori, fascia di budget e zona. Ricevi solo i progetti che corrispondono al tuo profilo.",
      ],
    },
    {
      titolo: "Cosa ricevi",
      blocchi: [
        "Un brief strutturato con profilo dell'azienda, comunicazione attuale, obiettivi, servizi richiesti e budget, insieme ai contatti per presentare la tua proposta.",
      ],
    },
  ],
};
