import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const branding: Testi = {
  intro: [
    "Un'agenzia di branding definisce e costruisce l'identità di una marca: il posizionamento, il nome, l'aspetto visivo e il linguaggio con cui un'azienda, un prodotto o un servizio si presentano al mercato.",
    "Il suo lavoro precede e orienta tutte le attività di comunicazione successive: campagne, sito, materiali commerciali e packaging applicano le regole stabilite dal progetto di identità.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di branding",
      blocchi: [
        "Il progetto ha una componente strategica e una visiva. La prima riguarda la brand strategy: l'agenzia analizza l'azienda, il mercato e i concorrenti e definisce il posizionamento, cioè lo spazio che la marca intende occupare nella percezione del pubblico, insieme a valori, personalità e promessa. Rientrano in questa fase il naming, l'ideazione del nome, e la brand architecture, che regola i rapporti tra marca principale, linee e prodotti.",
        "La seconda componente è la brand identity, la traduzione della strategia in un sistema visivo e verbale: logo, palette colori, tipografia, stile fotografico e illustrativo, tone of voice. Il sistema viene poi applicato ai diversi supporti: immagine coordinata, packaging, materiali commerciali, interfacce digitali, segnaletica.",
        "Il percorso segue fasi consecutive: ricerca e analisi, definizione della strategia, sviluppo delle proposte creative, scelta e affinamento della soluzione, declinazione sui supporti. Il progetto si chiude con le brand guideline, il manuale che documenta le regole d'uso dell'identità e ne garantisce l'applicazione coerente nel tempo, anche da parte di fornitori diversi.",
        "Le figure coinvolte sono il brand strategist; l'art director; i graphic designer; il copywriter, che cura naming e linguaggio; per i progetti di prodotto, il packaging designer.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo il rapporto Design Economy 2026 di Fondazione Symbola, Deloitte Private, POLI.design e ADI, in Italia il design genera circa 4 miliardi di euro di valore aggiunto e impiega oltre 76 mila addetti, il 21,5% di quelli europei: è il primo paese dell'Unione per numero di addetti. Il dato riguarda l'intero settore del design, di cui la comunicazione visiva e il branding sono una parte.",
      "L'attività è concentrata al Nord: la Lombardia ha il 28,7% degli occupati del settore e Milano, con oltre 7.300 imprese di design, produce il 19% del valore aggiunto nazionale.",
    ],
    fonti: [
      { nome: "Fondazione Symbola, Deloitte Private, POLI.design e ADI, Design Economy 2026", url: "https://symbola.net/ricerca/design-economy-2026/" },
    ],
  },
  costi: {
    testo: [
      "Un progetto di identità è remunerato a progetto, una sola volta. Per il solo logo il costo si colloca in genere tra 500 e 1.500 euro; per un'identità visiva completa, con logo, colori, caratteri e manuale d'uso, tra 1.500 e 6.500 euro. Quando il progetto comprende anche la strategia di marca e il naming si parte in genere da 6.000 euro.",
      "Il costo dipende dal numero di applicazioni da progettare, come packaging, sito e materiali commerciali, e dall'eventuale ricerca su mercato e concorrenti. La registrazione del marchio è un costo distinto.",
    ],
    nota: "Fasce elaborate da AgenziaGiusta.it su listini e guide ai prezzi pubblicati da agenzie italiane, ottobre 2026. Sono valori indicativi.",
  },
  domande: [
    {
      domanda: "Che differenza c'è tra logo, identità visiva e brand?",
      risposta: "Il logo è il segno che identifica l'azienda. L'identità visiva è il sistema che lo comprende insieme a colori, caratteri tipografici, immagini e regole d'uso. Il brand è l'insieme delle associazioni che il pubblico collega all'azienda: l'identità visiva ne è lo strumento, il posizionamento ne definisce il contenuto.",
    },
    {
      domanda: "A chi appartengono il marchio e i file prodotti dall'agenzia?",
      risposta: "I diritti di utilizzazione devono essere ceduti all'azienda per contratto, insieme ai file in formato vettoriale e al manuale d'uso. La registrazione del marchio è un passaggio distinto, che si effettua presso l'Ufficio Italiano Brevetti e Marchi o, per l'Unione europea, presso l'EUIPO, dopo una ricerca sui marchi già registrati.",
    },
    {
      domanda: "Che cosa contiene un manuale di identità?",
      risposta: "Le regole per usare correttamente gli elementi della marca: versioni del logo e spazi di rispetto, colori con i relativi codici, caratteri tipografici, stile delle immagini, tono di voce ed esempi di applicazione sui diversi materiali. Serve a mantenere coerente la comunicazione anche quando viene realizzata da fornitori diversi.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia di branding",
    gruppi: [
      gruppo("Ricerca e strategia", [
        ["Brand audit", "Analisi dello stato attuale della marca e della sua percezione."],
        ["Analisi dei concorrenti", "Studio del posizionamento e dell'identità delle marche concorrenti."],
        ["Posizionamento", "Definizione dello spazio distintivo della marca nel mercato."],
        ["Valori e personalità", "I principi e il carattere che la marca esprime."],
        ["Brand architecture", "Organizzazione di marca principale, linee e prodotti."],
      ]),
      gruppo("Identità verbale", [
        ["Naming", "Ideazione del nome di un'azienda, di un prodotto o di un servizio."],
        ["Verifica del nome", "Controllo preliminare della disponibilità del marchio e del dominio."],
        ["Payoff", "La frase che accompagna il marchio."],
        ["Tone of voice", "Il registro linguistico della marca."],
        ["Messaggi chiave", "Le formulazioni di base con cui presentare la marca."],
      ]),
      gruppo("Identità visiva", [
        ["Logo", "Progettazione del marchio e delle sue varianti."],
        ["Palette colori", "I colori istituzionali e le regole di abbinamento."],
        ["Tipografia", "I caratteri tipografici della marca."],
        ["Stile fotografico e illustrativo", "Criteri per immagini, icone e illustrazioni."],
        ["Restyling", "Aggiornamento di un'identità esistente."],
        ["Rebranding", "Ridefinizione complessiva di nome, identità o posizionamento."],
      ]),
      gruppo("Applicazioni", [
        ["Immagine coordinata", "Biglietti da visita, carta intestata, modelli per presentazioni e documenti."],
        ["Packaging", "Progettazione grafica di confezioni ed etichette."],
        ["Materiali commerciali", "Brochure, cataloghi e listini."],
        ["Identità digitale", "Linee guida per sito, social media e interfacce."],
        ["Segnaletica e allestimenti", "Insegne, spazi aziendali, punti vendita e stand."],
      ]),
      gruppo("Documentazione", [
        ["Brand guideline", "Il manuale con le regole d'uso dell'identità."],
        ["Kit di marca", "File esecutivi e modelli pronti all'uso."],
        ["Formazione interna", "Presentazione dell'identità a chi dovrà applicarla."],
      ]),
    ],
  },
};
