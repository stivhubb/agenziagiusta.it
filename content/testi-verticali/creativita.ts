import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const creativita: Testi = {
  intro: [
    "Un'agenzia creativa idea e realizza i contenuti della comunicazione: il concept di una campagna, i testi, le immagini e i formati con cui un messaggio viene trasmesso al pubblico.",
    "La sua competenza specifica è la traduzione di un obiettivo di marketing in un'idea riconoscibile e memorabile, declinata in modo coerente su tutti i mezzi previsti.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia creativa",
      blocchi: [
        "Il lavoro prende avvio dal brief dell'azienda, da cui l'agenzia ricava un insight: un'osservazione sul pubblico o sul prodotto su cui costruire il messaggio. Dall'insight nasce il concept creativo, l'idea di fondo della campagna, che viene espressa in un titolo (headline), in un trattamento visivo e in un tono di voce.",
        "Il concept viene poi declinato nei singoli materiali: annunci stampa, spot televisivi e radiofonici, affissioni, video per il web, contenuti per i social media, materiali per il punto vendita, attivazioni ed eventi. L'agenzia cura la direzione creativa della produzione, coordinando registi, fotografi, illustratori e case di produzione, e verifica che ogni esecuzione rispetti l'idea approvata.",
        "Il processo segue quattro passaggi: analisi del brief e definizione della strategia creativa; sviluppo di una o più proposte, presentate al cliente; affinamento della soluzione scelta; produzione e adattamento dei materiali ai diversi formati. La pianificazione degli spazi pubblicitari non rientra di norma tra le sue attività ed è affidata a un'agenzia media.",
        "Il nucleo operativo è la coppia creativa, formata da copywriter e art director e guidata da un direttore creativo. La affiancano lo strategic planner, che elabora la strategia; l'account, che gestisce il rapporto con il cliente; il producer, che segue la produzione.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo le stime di UNA, l'associazione delle aziende della comunicazione, nel 2026 il mercato italiano della comunicazione vale 17,8 miliardi di euro (+4,4%). Tra le voci che crescono di più ci sono quelle in cui il contenuto creativo è il prodotto stesso: il branded content (+8%) e gli eventi (+14,9%).",
      "Il formato prevalente è il video: secondo l'Osservatorio Internet Media del Politecnico di Milano, tra televisione e online raccoglie il 55% degli investimenti pubblicitari, e nel 2026 il video online cresce del 16%.",
    ],
    fonti: [
      { nome: "UNA, Media Hub: stime sul mercato della comunicazione, giugno 2026", url: "https://www.primaonline.it/wp-content/uploads/2026/06/Una-chart.pdf" },
      { nome: "Osservatorio Internet Media del Politecnico di Milano, luglio 2026", url: "https://www.osservatori.net/blog/internet-media-advertising/15-statistiche-sul-digital-advertising-in-italia-nel-2026-tutto-quello-che-devi-sapere/" },
    ],
  },
  costi: {
    testo: [
      "Il lavoro creativo è remunerato di norma a progetto, con un compenso per l'ideazione che comprende strategia, concept e declinazione sui formati previsti. Per gli incarichi continuativi si usa un canone mensile.",
      "Il compenso creativo è distinto dai costi di produzione dei materiali e dall'acquisto degli spazi pubblicitari. Dipende dal numero di formati e di mezzi, dal coinvolgimento di registi, fotografi o interpreti e dall'estensione dei diritti d'uso, cioè per quanto tempo, in quali paesi e su quali mezzi la campagna può essere diffusa.",
    ],
  },
  domande: [
    {
      domanda: "Che differenza c'è tra agenzia creativa e agenzia di comunicazione?",
      risposta: "L'agenzia creativa è specializzata nell'ideazione e nella realizzazione dei contenuti: concept, testi, immagini. L'agenzia di comunicazione ha un perimetro più ampio, che comprende anche la strategia complessiva e il coordinamento dei canali. Molte agenzie di comunicazione hanno un reparto creativo interno.",
    },
    {
      domanda: "Che cosa viene presentato in una proposta creativa?",
      risposta: "Il concept, cioè l'idea di fondo, con il ragionamento strategico che lo sostiene; il titolo e il trattamento visivo principale (key visual); alcuni esempi di declinazione sui mezzi previsti. Spesso l'agenzia presenta più proposte alternative, tra cui l'azienda sceglie quella da sviluppare.",
    },
    {
      domanda: "Di chi sono i diritti sulla campagna?",
      risposta: "Sono regolati dal contratto. Di norma l'azienda acquisisce i diritti di utilizzazione della proposta approvata e pagata, mentre quelle non scelte restano dell'agenzia. Fotografie, musiche e prestazioni degli interpreti sono concesse da terzi con limiti di durata, territorio e mezzi, che vanno verificati prima di riutilizzare i materiali.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia creativa",
    gruppi: [
      gruppo("Strategia creativa", [
        ["Analisi del brief", "Lettura degli obiettivi e richiesta dei chiarimenti necessari."],
        ["Ricerca dell'insight", "Individuazione dell'osservazione su cui costruire il messaggio."],
        ["Strategia creativa", "Che cosa dire, a chi e con quale tono."],
        ["Piattaforma di comunicazione", "L'idea di lungo periodo da cui derivano più campagne."],
      ]),
      gruppo("Ideazione", [
        ["Concept creativo", "L'idea di fondo della campagna."],
        ["Headline e copy", "Titoli e testi degli annunci."],
        ["Art direction", "Impostazione visiva della campagna."],
        ["Key visual", "L'immagine principale da cui derivano tutti i formati."],
        ["Script e storyboard", "Sceneggiatura e sequenza delle inquadrature di spot e video."],
      ]),
      gruppo("Campagne", [
        ["Campagne stampa", "Annunci per quotidiani, periodici e riviste di settore."],
        ["Spot tv e video", "Film pubblicitari per televisione, cinema e web."],
        ["Comunicati radio e audio", "Spot per radio, podcast e piattaforme di streaming."],
        ["Affissioni", "Manifesti e impianti pubblicitari esterni."],
        ["Campagne digitali e social", "Formati per siti, motori di ricerca e piattaforme social."],
        ["Campagne integrate", "Un'unica idea sviluppata su più mezzi in modo coordinato."],
      ]),
      gruppo("Contenuti e attivazioni", [
        ["Branded content", "Contenuti editoriali o di intrattenimento prodotti dalla marca."],
        ["Contenuti per i social media", "Formati pensati per le singole piattaforme."],
        ["Attivazioni ed eventi", "Iniziative che coinvolgono direttamente il pubblico."],
        ["Materiali per il punto vendita", "Espositori, vetrine e allestimenti."],
        ["Direct marketing", "Comunicazioni indirizzate a destinatari selezionati."],
      ]),
      gruppo("Produzione", [
        ["Direzione creativa della produzione", "Supervisione di riprese, scatti e post-produzione."],
        ["Selezione dei fornitori", "Scelta di registi, fotografi, illustratori e case di produzione."],
        ["Adattamenti", "Declinazione dei materiali in formati, durate e lingue diverse."],
        ["Esecutivi", "Preparazione dei file definitivi per la stampa e la pubblicazione."],
      ]),
    ],
  },
};
