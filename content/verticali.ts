import type { Pagina } from "./tipi";

// Le pagine verticali. Aggiungere un verticale significa aggiungere una voce a questo elenco.
// - slug: indirizzo della pagina (/social-media/)
// - nome e descrizione: scheda in home
// - percorso: voce nel percorso di navigazione in cima alla pagina (se manca, si usa il nome)
// - pagina: i testi. Se manca, la pagina mostra i segnaposto e non viene indicizzata.

export type Verticale = {
  slug: string;
  nome: string;
  descrizione: string;
  percorso?: string;
  pagina?: Pagina;
};

export const verticali: Verticale[] = [
  {
    slug: "pubblicita",
    nome: "Pubblicità e advertising",
    descrizione:
      "Campagne su stampa, tv, radio, affissioni e online: dall'idea creativa alla pianificazione dei mezzi.",
  },
  {
    slug: "marketing",
    nome: "Marketing",
    descrizione:
      "Strategia, posizionamento e piano di attività per far crescere vendite e notorietà del marchio.",
  },
  {
    slug: "digital-marketing",
    nome: "Digital e web marketing",
    descrizione:
      "Campagne online, email, automazioni e analisi dei dati per portare contatti e vendite dal web.",
  },
  {
    slug: "web-agency",
    nome: "Web agency, siti ed e-commerce",
    descrizione: "Progettazione e sviluppo di siti aziendali, landing page e negozi online.",
  },
  {
    slug: "branding",
    nome: "Branding, grafica e design",
    descrizione:
      "Nome, logo, identità visiva e materiali coordinati per dare un volto riconoscibile al marchio.",
  },
  {
    slug: "social-media",
    nome: "Social media e influencer",
    descrizione:
      "Piani editoriali, gestione delle pagine, campagne a pagamento e collaborazioni con i creator.",
    percorso: "Agenzie social media",
    pagina: {
      titolo: {
        testo: "Agenzia social media: cosa fa e come trovare",
        evidenza: "quella giusta.",
      },
      intro: [
        "Un'agenzia social media gestisce la presenza della tua azienda sulle piattaforme: decide cosa pubblicare, produce i contenuti, risponde alle persone e pianifica le campagne a pagamento.",
        // DA VERIFICARE prima della pubblicazione: il calo della portata dei contenuti non sponsorizzati.
        "Negli ultimi anni questo lavoro è cambiato molto. La portata dei contenuti non sponsorizzati si è ridotta su quasi tutte le piattaforme, i video brevi hanno preso il posto di buona parte dei post statici e i creator sono diventati un canale a sé. Per questo oggi un'agenzia social non si limita a \"fare i post\": tiene insieme strategia, produzione, gestione della community e investimento pubblicitario, e misura quanto ognuna di queste voci contribuisce ai risultati.",
        "Non tutte le agenzie fanno tutto, e non tutte lo fanno allo stesso livello. Alcune sono forti nella creatività e nei contenuti, altre nelle campagne orientate alle vendite, altre ancora lavorano bene solo in certi settori o con certe fasce di budget. Capire quale di questi profili ti serve è il primo passo, e viene prima della ricerca dell'agenzia.",
        "In questa pagina trovi cosa aspettarti da un'agenzia social media, quando ha senso affidarsi a una struttura esterna, da cosa dipende il costo e quali domande fare prima di firmare.",
      ],
      sezioni: [
        {
          titolo: "Cosa fa un'agenzia social media",
          blocchi: [
            "Parte dalla strategia: a chi parlare, su quali piattaforme e con quale tono. Poi costruisce il piano editoriale, realizza testi, grafiche e video, gestisce commenti e messaggi e misura i risultati. Molte agenzie seguono anche le campagne a pagamento e le collaborazioni con i creator.",
          ],
        },
        {
          titolo: "Quando serve davvero",
          blocchi: [
            "Quando i social sono un canale importante per farti conoscere o per vendere e in azienda mancano il tempo o le competenze per seguirli con continuità. Se ti serve solo qualche contenuto ogni tanto, può bastare un freelance.",
          ],
        },
        {
          titolo: "Quanto costa",
          blocchi: [
            "Il prezzo dipende dal numero di piattaforme, dalla quantità di contenuti e dalla presenza di campagne a pagamento, il cui budget va considerato a parte.",
            { segnaposto: "[FASCE DI PREZZO INDICATIVE: DA DEFINIRE]" },
          ],
        },
        {
          titolo: "Come scegliere quella giusta",
          blocchi: [
            "Guarda i lavori fatti per aziende simili alla tua, chiedi chi seguirà il tuo account ogni giorno e come vengono misurati i risultati. Un brief chiaro ti permette di confrontare le proposte sugli stessi punti.",
          ],
        },
      ],
    },
  },
  {
    slug: "pr-ufficio-stampa",
    nome: "PR, ufficio stampa e media",
    descrizione:
      "Rapporti con giornalisti e testate, comunicati, eventi e cura della reputazione.",
  },
  {
    slug: "seo-sem",
    nome: "SEO e SEM",
    descrizione:
      "Posizionamento sui motori di ricerca e campagne a pagamento sui risultati di Google.",
  },
  {
    slug: "video-foto",
    nome: "Video, foto e spot",
    descrizione: "Video aziendali, spot, servizi fotografici e contenuti per i social.",
  },
];
