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
