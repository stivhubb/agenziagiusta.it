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
    "Le aziende che passano da AgenziaGiusta.it hanno già chiarito cosa cercano, con quale budget e in quali tempi. Ti inviamo solo i progetti in linea con quello che fai.",
    "Chi si occupa di nuovi clienti lo sa: buona parte del tempo va in richieste che non portano a nulla. Contatti senza budget, aziende che non sanno ancora cosa vogliono, preventivi chiesti a dieci agenzie insieme solo per confrontare i prezzi. Ogni risposta costa ore di lavoro, e la maggior parte non diventa un contratto.",
    "AgenziaGiusta.it lavora sul passaggio precedente. Le aziende compilano un quiz guidato su attività, servizi richiesti, budget, tempi e città, e ricevono un brief ordinato. Solo chi dà il consenso esplicito viene messo in contatto con le agenzie, e ogni brief va a 2-3 strutture scelte in base al profilo, non a un elenco aperto.",
    "Per te significa ricevere meno richieste, ma più vicine a quello che fai: sai già di cosa si parla, con quale budget e in che tempi, prima ancora della prima telefonata.",
  ],
  blocco: {
    occhiello: "Diventa partner",
    titolo: "Raccontaci la tua agenzia e parliamone.",
    testo:
      "Ci servono poche informazioni per capire quali progetti fanno al caso tuo. Ti ricontattiamo noi.",
    vantaggi: [
      "Nessun costo per i contatti",
      "Compenso solo a contratto firmato",
      "Ogni brief va a 2-3 agenzie, non di più",
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
        "Le aziende compilano un quiz e ricevono un brief. Se danno il consenso, lo inviamo a 2-3 agenzie adatte al progetto. L'azienda sa fin dall'inizio che il brief non è in esclusiva.",
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
        "Un brief strutturato con attività del cliente, servizi richiesti, budget, tempi e città, insieme ai contatti per presentare la tua proposta.",
      ],
    },
  ],
};
