import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const media: Testi = {
  intro: [
    "Un'agenzia media, detta anche centro media, è la struttura specializzata nella pianificazione e nell'acquisto degli spazi pubblicitari: stabilisce su quali mezzi, in quali periodi e con quale investimento una campagna deve uscire per raggiungere il pubblico previsto.",
    "Non realizza i contenuti della campagna, che restano di competenza dell'agenzia creativa o dell'azienda: interviene sulla loro diffusione, con l'obiettivo di ottenere la massima efficacia dal budget disponibile.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia media",
      blocchi: [
        "Il lavoro si divide in due aree. La prima è il media planning, la pianificazione: l'agenzia analizza il target, le sue abitudini di fruizione dei mezzi e gli investimenti dei concorrenti, e definisce il media mix, cioè la combinazione di mezzi più adatta agli obiettivi, tra televisione, radio, stampa, affissioni, cinema e canali digitali. Il risultato è il piano mezzi, che indica per ciascun mezzo formati, date, frequenza delle uscite e costi.",
        "La seconda area è il media buying, l'acquisto. L'agenzia negozia gli spazi con editori e concessionarie, le società che vendono la pubblicità per conto dei mezzi, e li prenota. Per i canali digitali l'acquisto avviene in larga parte attraverso piattaforme automatizzate (programmatic advertising) e direttamente sulle piattaforme pubblicitarie dei motori di ricerca e dei social media.",
        "Un progetto parte dal brief, in cui l'azienda indica obiettivi, target, periodo e budget. L'agenzia elabora la strategia media e il piano, lo sottopone all'approvazione del cliente e procede all'acquisto. Durante la campagna verifica che le uscite avvengano come previsto e interviene sulla pianificazione digitale per migliorarne il rendimento. Al termine consegna un report con i risultati rispetto agli indicatori concordati, come copertura (la quota di pubblico raggiunta), frequenza e costo per contatto.",
        "Le figure coinvolte sono il media strategist, che imposta la strategia; il media planner, che costruisce il piano; il media buyer, che negozia e acquista gli spazi; gli specialisti delle piattaforme digitali; l'analista, che elabora i dati di campagna.",
      ],
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia media",
    gruppi: [
      gruppo("Strategia e analisi", [
        ["Analisi del target e dei consumi media", "Quali mezzi utilizza il pubblico di riferimento, e in quali momenti."],
        ["Analisi degli investimenti dei concorrenti", "Dove e quanto investono in pubblicità le altre aziende del settore."],
        ["Strategia media", "Obiettivi della campagna in termini di copertura, frequenza e periodo."],
        ["Media mix", "Ripartizione del budget tra i diversi mezzi."],
      ]),
      gruppo("Pianificazione", [
        ["Piano mezzi", "Calendario delle uscite con formati, frequenze e costi."],
        ["Stima dei risultati", "Previsione di copertura, frequenza e contatti prima dell'uscita."],
        ["Pianificazione locale", "Campagne concentrate su aree geografiche definite."],
      ]),
      gruppo("Acquisto sui mezzi tradizionali", [
        ["Televisione", "Spot sulle reti nazionali, locali e sulla tv connessa."],
        ["Radio", "Comunicati su emittenti nazionali e locali."],
        ["Stampa", "Spazi su quotidiani, periodici e riviste di settore."],
        ["Affissioni e out of home", "Manifesti, impianti digitali, pubblicità su mezzi di trasporto e nelle stazioni."],
        ["Cinema", "Spot proiettati nelle sale."],
        ["Negoziazione", "Trattativa su prezzi e posizioni con editori e concessionarie."],
      ]),
      gruppo("Acquisto digitale", [
        ["Search advertising", "Annunci a pagamento sui motori di ricerca."],
        ["Social advertising", "Campagne sulle piattaforme social."],
        ["Display e video online", "Banner e video su siti e piattaforme di streaming."],
        ["Programmatic advertising", "Acquisto automatizzato degli spazi in base ai dati sul pubblico."],
        ["Digital audio", "Annunci su podcast e piattaforme di streaming musicale."],
        ["Retail media", "Spazi pubblicitari sui siti e nelle app dei rivenditori."],
      ]),
      gruppo("Controllo e misurazione", [
        ["Monitoraggio delle uscite", "Verifica che gli spazi acquistati escano come previsto."],
        ["Ottimizzazione", "Correzione della pianificazione durante la campagna."],
        ["Tracciamento", "Configurazione degli strumenti che rilevano i risultati online."],
        ["Reportistica", "Risultati per mezzo rispetto ai KPI concordati."],
        ["Analisi post-campagna", "Valutazione complessiva e indicazioni per le pianificazioni successive."],
      ]),
    ],
  },
};
