import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const videoFoto: Testi = {
  intro: [
    "Un'agenzia di produzione video e foto, o casa di produzione, realizza i contenuti audiovisivi e fotografici di un'azienda: spot, video istituzionali, contenuti per il web e i social media, servizi fotografici di prodotto e di campagna.",
    "Segue l'intero processo, dall'ideazione alla consegna dei file definitivi, oppure interviene sulla sola realizzazione, a partire da un progetto creativo già definito dall'azienda o dalla sua agenzia.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di produzione video e foto",
      blocchi: [
        "Il lavoro si svolge in tre fasi. La pre-produzione comprende tutto ciò che precede le riprese: sviluppo del soggetto e della sceneggiatura, storyboard, scelta del regista o del fotografo, selezione degli interpreti (casting) e dei luoghi (location scouting), piano di lavorazione e preventivo.",
        "La produzione è la fase delle riprese o degli scatti, in studio o in esterni, con una troupe dimensionata sul progetto: regia, direzione della fotografia, operatori, fonici, scenografia, trucco e costumi. La post-produzione trasforma il materiale girato nel prodotto finito: montaggio, correzione del colore (color grading), grafica animata, effetti visivi, sonorizzazione e, per le fotografie, selezione e ritocco.",
        "Il progetto parte da un brief che indica obiettivo, pubblico, canali di diffusione e budget: la destinazione del contenuto determina durata, formato e modalità di ripresa. L'agenzia presenta un trattamento, il documento che descrive l'impostazione creativa e tecnica, e un preventivo. Dopo l'approvazione procede alla realizzazione, sottopone al cliente le versioni di lavorazione e consegna i file definitivi nei formati richiesti, con le licenze d'uso di musiche, immagini e interpreti.",
        "Le figure coinvolte sono il producer, responsabile dell'organizzazione e del budget; il regista o il fotografo; il direttore della fotografia; il montatore; il motion designer, che realizza le animazioni; il sound designer.",
      ],
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia di produzione",
    gruppi: [
      gruppo("Pre-produzione", [
        ["Soggetto e sceneggiatura", "L'idea e il testo del video."],
        ["Storyboard", "La sequenza disegnata delle inquadrature."],
        ["Casting", "Selezione di attori, modelli e speaker."],
        ["Location scouting", "Ricerca e scelta dei luoghi delle riprese."],
        ["Piano di lavorazione", "Organizzazione di giornate, troupe e attrezzature."],
        ["Permessi e liberatorie", "Autorizzazioni per luoghi, persone e marchi ripresi."],
      ]),
      gruppo("Produzione video", [
        ["Spot pubblicitari", "Film per televisione, cinema e web."],
        ["Video istituzionali", "Presentazione dell'azienda, della sua storia e delle sue attività."],
        ["Video di prodotto", "Dimostrazioni, tutorial e presentazioni."],
        ["Contenuti per i social media", "Video brevi nei formati delle piattaforme."],
        ["Interviste e testimonianze", "Racconti di clienti, dipendenti e vertici aziendali."],
        ["Riprese di eventi", "Documentazione e dirette streaming."],
        ["Riprese aeree", "Immagini realizzate con drone."],
      ]),
      gruppo("Fotografia", [
        ["Still life e prodotto", "Fotografie per cataloghi ed e-commerce."],
        ["Fotografia di campagna", "Immagini per pubblicità e comunicazione."],
        ["Ritratti aziendali", "Fotografie di persone e gruppi di lavoro."],
        ["Reportage", "Documentazione di sedi, impianti e processi produttivi."],
        ["Fotografia di eventi", "Documentazione di convegni, fiere e inaugurazioni."],
      ]),
      gruppo("Post-produzione", [
        ["Montaggio", "Selezione e composizione delle riprese."],
        ["Color grading", "Correzione e uniformazione del colore."],
        ["Motion graphics", "Grafica animata, titoli e infografiche."],
        ["Animazione 2D e 3D", "Video realizzati interamente in animazione."],
        ["Effetti visivi", "Interventi digitali sulle immagini."],
        ["Sound design e musiche", "Sonorizzazione, voce fuori campo e colonna sonora."],
        ["Fotoritocco", "Selezione e lavorazione delle fotografie."],
      ]),
      gruppo("Consegna", [
        ["Adattamenti", "Versioni per formati, durate e piattaforme diverse."],
        ["Sottotitoli e versioni in lingua", "Sottotitolazione e doppiaggio."],
        ["Licenze d'uso", "Gestione dei diritti di musiche, immagini e interpreti."],
      ]),
    ],
  },
};
