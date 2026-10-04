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
