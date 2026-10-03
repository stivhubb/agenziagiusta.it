import type { Pagina, Seo } from "./tipi";

// Testi della pagina Per le agenzie.
// I campi del modulo sono una proposta: quelli definitivi sono da decidere.

export const perLeAgenzie: Pagina & {
  blocco: { occhiello: string; titolo: string; testo: string; vantaggi: string[] };
  modulo: { campi: { id: string; etichetta: string; tipo?: string }[]; pulsante: string };
  seo: Seo;
} = {
  titolo: { testo: "Clienti che arrivano con", evidenza: "un brief già scritto." },
  seo: {
    title: "Per le agenzie: ricevi brief già scritti",
    description:
      "Ricevi brief già scritti da aziende in linea con i tuoi servizi, settori e budget. Nessun costo per i contatti: scopri come diventare partner.",
  },
  intro: [
    "Le aziende che passano da AgenziaGiusta.it hanno già chiarito cosa cercano, con quali obiettivi e con quale budget. Ti inviamo solo i progetti in linea con quello che fai.",
    "Chi si occupa di nuovi clienti lo sa: buona parte del tempo va in richieste che non portano a nulla. Contatti senza budget, aziende che non sanno ancora cosa vogliono, preventivi chiesti a dieci agenzie insieme solo per confrontare i prezzi. Ogni risposta costa ore di lavoro, e la maggior parte non diventa un contratto.",
    "AgenziaGiusta.it lavora sul passaggio precedente. Le aziende compilano un quiz guidato su azienda, comunicazione attuale, obiettivi, servizi e budget, e ricevono un brief ordinato. Ogni azienda dà il consenso esplicito a essere contattata, e ogni brief va a una sola agenzia scelta in base al profilo, non a un elenco aperto.",
    "Per te significa ricevere meno richieste, ma più vicine a quello che fai: sai già di cosa si parla, con quali obiettivi e con quale budget, prima ancora della prima telefonata.",
  ],
  blocco: {
    occhiello: "Diventa partner",
    titolo: "Raccontaci la tua agenzia e parliamone.",
    testo:
      "Ci servono poche informazioni per capire quali progetti fanno al caso tuo. Ti ricontattiamo noi.",
    vantaggi: [
      "Nessun costo per i contatti",
      "Compenso solo a contratto firmato",
      "Ogni brief va a una sola agenzia",
    ],
  },
  modulo: {
    // I primi due campi occupano tutta la riga, gli altri vanno in griglia.
    campi: [
      { id: "ag-nome", etichetta: "Nome dell'agenzia" },
      { id: "ag-email", etichetta: "Email", tipo: "email" },
      { id: "ag-servizi", etichetta: "Servizi offerti" },
      { id: "ag-settori", etichetta: "Settori" },
      { id: "ag-budget", etichetta: "Fascia di budget dei clienti" },
      { id: "ag-zona", etichetta: "Zona" },
    ],
    pulsante: "Invia la richiesta",
  },
  sezioni: [
    {
      titolo: "Come funziona",
      blocchi: [
        "Le aziende compilano un quiz e ricevono un brief. Con il loro consenso lo inviamo a una sola agenzia adatta al progetto: nessun'altra lo riceve.",
      ],
    },
    {
      titolo: "Quanto costa",
      blocchi: [
        "Non paghi per ricevere i brief. Il compenso è dovuto solo quando firmi un contratto con il cliente.",
        { segnaposto: "[IMPORTO E CONDIZIONI DEL COMPENSO: DA DEFINIRE]" },
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
