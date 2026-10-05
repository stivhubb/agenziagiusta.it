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
  mercato: {
    testo: [
      "Secondo l'Osservatorio Internet Media del Politecnico di Milano, nel 2025 gli investimenti pubblicitari in Italia hanno raggiunto 11,8 miliardi di euro (+5%) e nel 2026 sono previsti a 12,7 miliardi. Il 53% passa da Internet, che nel 2026 dovrebbe arrivare a 7 miliardi (+12%); l'83% della raccolta online va ai grandi operatori internazionali.",
      "Nelle stime di UNA, che per questo dato non considerano gli investimenti delle piccole imprese, nel 2026 la televisione, tra lineare e advanced TV, raccoglie il 46,3% della spesa, il digitale il 36,1%, la pubblicità esterna il 7,5% e la radio il 5%. UPA, l'associazione delle aziende che investono in pubblicità, prevede per il 2026 una chiusura del mercato a +1,2%.",
    ],
    fonti: [
      { nome: "Osservatorio Internet Media del Politecnico di Milano, giugno 2026", url: "https://www.osservatori.net/comunicato/internet-media/internet-advertising-italia-in-crescita/" },
      { nome: "UNA, Media Hub: stime sul mercato della comunicazione, giugno 2026", url: "https://www.primaonline.it/wp-content/uploads/2026/06/Una-chart.pdf" },
      { nome: "UPA, luglio 2026", url: "https://www.upa.it/static/upload/com/0000/comunicato-stampa-upa26.pdf" },
    ],
  },
  costi: {
    testo: [
      "Il compenso di un'agenzia media è distinto dal budget pubblicitario, che viene speso sui mezzi. È calcolato come percentuale del budget gestito oppure come compenso fisso (fee); per le campagne digitali sono diffusi i compensi fissi e le formule miste.",
      "Per la gestione delle campagne digitali di una piccola o media impresa il compenso si colloca in genere tra 500 e 2.500 euro al mese, budget pubblicitario escluso. Per le pianificazioni sui mezzi tradizionali il compenso si definisce sul singolo piano.",
    ],
    nota: "Fasce elaborate da AgenziaGiusta.it su listini e guide ai prezzi pubblicati da agenzie italiane, ottobre 2026. Sono valori indicativi.",
  },
  domande: [
    {
      domanda: "Che differenza c'è tra agenzia media e agenzia creativa?",
      risposta: "L'agenzia creativa idea e realizza il messaggio; l'agenzia media decide dove, quando e con quale investimento diffonderlo, e acquista gli spazi. Le due attività possono essere svolte da strutture diverse o da reparti della stessa agenzia.",
    },
    {
      domanda: "Il budget pubblicitario viene pagato all'agenzia?",
      risposta: "Dipende dal contratto. L'agenzia può acquistare gli spazi per conto del cliente e rifatturarli, oppure il cliente paga direttamente editori e piattaforme e riconosce all'agenzia il solo compenso. In entrambi i casi il piano mezzi dovrebbe indicare separatamente la spesa sui mezzi e il compenso dell'agenzia.",
    },
    {
      domanda: "Come si valuta l'efficacia di una pianificazione?",
      risposta: "Con indicatori definiti prima della campagna. Sui mezzi tradizionali si misurano la copertura, cioè la quota del pubblico raggiunta, la frequenza media di esposizione e il costo per contatto. Sui canali digitali si aggiungono impression visibili, clic e conversioni. A campagna conclusa l'agenzia confronta quanto pianificato con quanto erogato (post-valutazione).",
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
