import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const pubblicita: Testi = {
  intro: [
    "Un'agenzia di pubblicità, o agenzia pubblicitaria, idea e realizza le campagne con cui un'azienda promuove marchio, prodotti e servizi sui mezzi: televisione, radio, stampa, affissioni e canali online.",
    "Rispetto a un'agenzia di comunicazione, che segue l'immagine dell'azienda nel suo insieme, l'agenzia di pubblicità lavora sulla campagna: il messaggio, la sua forma creativa e la sua diffusione sui mezzi scelti. Molte agenzie pubblicitarie offrono entrambe le cose; la differenza sta nel punto di partenza dell'incarico.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di pubblicità",
      blocchi: [
        "Il lavoro parte dal brief dell'azienda: obiettivo della campagna, prodotto, pubblico, periodo e budget. L'agenzia definisce la strategia della campagna, cioè il messaggio principale e i mezzi su cui diffonderlo, e sviluppa il concept creativo, l'idea che tiene insieme tutti i materiali.",
        "Segue la produzione: annunci per la stampa, manifesti e impianti per le affissioni, spot televisivi e radiofonici, banner e video per i canali online. Per le produzioni più complesse, come uno spot, l'agenzia coordina case di produzione, fotografi e studi di registrazione.",
        "La diffusione richiede la pianificazione dei mezzi: quali testate, emittenti e spazi, in quali periodi e con quale investimento. Alcune agenzie pubblicitarie se ne occupano direttamente, altre lavorano con un'agenzia media o con un centro media, che negozia e acquista gli spazi.",
        "Al progetto lavorano l'account, referente del cliente; il direttore creativo; il copywriter e l'art director, che lavorano in coppia su testi e immagini; il producer, che segue la produzione; il media planner, che definisce dove e quando investire.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo le stime di UNA, l'associazione delle aziende della comunicazione, nel 2026 la pubblicità sui mezzi in Italia vale circa 12,6 miliardi di euro, il 71% di un mercato della comunicazione di 17,8 miliardi. La crescita dipende in buona parte dalle piccole imprese e dai professionisti: con i loro investimenti il mercato pubblicitario cresce del 2,9%, senza dello 0,9%.",
      "Secondo l'Osservatorio Internet Media del Politecnico di Milano, nel 2025 gli investimenti pubblicitari hanno raggiunto 11,8 miliardi di euro (+5%) e il 53% è passato dai canali digitali. Nelle stime di UNA, che per questo dato non considerano gli investimenti delle piccole imprese, nel 2026 la televisione raccoglie il 46,3% della spesa, la pubblicità esterna il 7,5% e la radio il 5%.",
    ],
    fonti: [
      { nome: "UNA, Media Hub: stime sul mercato della comunicazione, giugno 2026", url: "https://www.primaonline.it/wp-content/uploads/2026/06/Una-chart.pdf" },
      { nome: "Osservatorio Internet Media del Politecnico di Milano, giugno 2026", url: "https://www.osservatori.net/comunicato/internet-media/internet-advertising-italia-in-crescita/" },
    ],
  },
  costi: {
    testo: [
      "Un'agenzia di pubblicità è remunerata di norma a progetto, con un compenso per l'ideazione della campagna che comprende strategia, concept creativo e declinazione sui formati previsti. Per le aziende che fanno campagne durante tutto l'anno si usa anche il canone mensile.",
      "Il compenso dell'agenzia è distinto da due voci che spesso pesano di più: i costi di produzione, come le riprese di uno spot o la stampa dei manifesti, e l'acquisto degli spazi sui mezzi. Il costo dipende soprattutto dal numero di mezzi e di formati, dalla complessità della produzione e dalla durata della campagna. Per confrontare due preventivi conviene chiedere che le tre voci siano indicate separatamente.",
    ],
  },
  domande: [
    {
      domanda: "Che differenza c'è tra agenzia di pubblicità e agenzia di comunicazione?",
      risposta: "L'agenzia di pubblicità si concentra sulle campagne: messaggio, creatività e diffusione sui mezzi. L'agenzia di comunicazione ha un perimetro più ampio, che comprende la strategia complessiva, l'identità del marchio, le relazioni con i media e la gestione continuativa dei canali. Molte agenzie pubblicitarie offrono anche servizi di comunicazione, e viceversa.",
    },
    {
      domanda: "Agenzia pubblicitaria o centro media: a chi rivolgersi?",
      risposta: "L'agenzia pubblicitaria idea e produce la campagna; il centro media pianifica e acquista gli spazi sui mezzi. Per una piccola o media impresa l'agenzia pubblicitaria spesso segue anche la pianificazione, oppure la coordina con un centro media. Quando l'investimento sui mezzi è consistente, il centro media ha più forza nella negoziazione degli spazi.",
    },
    {
      domanda: "Con quanto anticipo va contattata un'agenzia di pubblicità?",
      risposta: "Dipende dai mezzi. Gli spazi su televisione, stampa e affissioni vanno prenotati in anticipo, soprattutto nei periodi più richiesti, e uno spot richiede tempi di produzione. Conviene coinvolgere l'agenzia appena sono chiari obiettivo, periodo e budget, così che strategia, creatività, produzione e prenotazione degli spazi procedano in ordine.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia pubblicitaria",
    gruppi: [
      gruppo("Strategia della campagna", [
        ["Analisi del brief", "Obiettivi, prodotto, pubblico, periodo e budget della campagna."],
        ["Strategia di campagna", "Il messaggio principale e il ruolo di ciascun mezzo."],
        ["Definizione del target", "Individuazione e descrizione del pubblico da raggiungere."],
      ]),
      gruppo("Creatività", [
        ["Concept creativo", "L'idea di fondo da cui derivano tutti i materiali della campagna."],
        ["Headline e payoff", "Il titolo della campagna e la frase che accompagna il marchio."],
        ["Copywriting", "Testi di annunci, spot e materiali."],
        ["Art direction", "Impostazione visiva della campagna."],
        ["Storyboard", "La sequenza delle scene di uno spot, prima delle riprese."],
      ]),
      gruppo("Pubblicità sui mezzi tradizionali", [
        ["Campagne stampa", "Annunci per quotidiani, periodici e riviste di settore."],
        ["Spot tv", "Comunicati video per la televisione."],
        ["Spot radio", "Comunicati audio per le emittenti radiofoniche."],
        ["Affissioni e out of home", "Manifesti, impianti esterni, mezzi di trasporto e schermi digitali."],
        ["Materiali per il punto vendita", "Espositori, cartelli e allestimenti."],
      ]),
      gruppo("Pubblicità online", [
        ["Banner e display", "Annunci grafici su siti e app."],
        ["Video online", "Versioni degli spot e formati pensati per il web e i social."],
        ["Campagne social", "Annunci a pagamento sulle piattaforme social."],
      ]),
      gruppo("Produzione", [
        ["Produzione di spot", "Coordinamento di casa di produzione, riprese e post-produzione."],
        ["Servizi fotografici", "Immagini di prodotto e di campagna."],
        ["Stampa", "Preparazione dei file e rapporti con le tipografie."],
      ]),
      gruppo("Pianificazione e misurazione", [
        ["Piano mezzi", "Scelta dei mezzi e ripartizione del budget pubblicitario."],
        ["Acquisto degli spazi", "Prenotazione diretta o tramite un centro media."],
        ["Misurazione dei risultati", "Copertura, ricordo e risultati commerciali della campagna."],
      ]),
    ],
  },
};
