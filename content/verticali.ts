import type { Sezione, Seo, Titolo } from "./tipi";

// Le pagine verticali. Aggiungere un verticale significa aggiungere una voce a questo elenco.
// - slug: indirizzo della pagina (/social-media/)
// - nome e descrizione: scheda in home
// - percorso: voce nel percorso di navigazione in cima alla pagina (se manca, si usa il nome)
// - titolo: H1 della pagina
// - seo: title e description per Google (title entro 60 caratteri, description entro 155)
// - pagina: i testi. Se manca, la pagina mostra i segnaposto e non viene indicizzata.

export type Verticale = {
  slug: string;
  nome: string;
  descrizione: string;
  percorso?: string;
  titolo: Titolo;
  seo: Seo;
  pagina?: { intro: string[]; sezioni: Sezione[] };
};

// Tutti gli H1 chiudono allo stesso modo.
function titolo(inizio: string): Titolo {
  return { testo: `${inizio}: cosa fa e come trovare`, evidenza: "quella giusta." };
}

export const verticali: Verticale[] = [
  // Una pagina sola per le tre ricerche "agenzia di comunicazione", "di marketing" e
  // "pubblicitaria": per una piccola o media impresa il bisogno è lo stesso.
  {
    slug: "comunicazione",
    nome: "Comunicazione, marketing e pubblicità",
    descrizione:
      "L'agenzia a cui affidare l'immagine dell'azienda e le campagne, online e offline: strategia, creatività e pianificazione.",
    titolo: titolo("Agenzia di comunicazione, marketing e pubblicità"),
    seo: {
      title: "Agenzia di comunicazione, marketing e pubblicità: la guida",
      description:
        "Agenzia di comunicazione, di marketing o pubblicitaria? Per una PMI spesso è lo stesso fornitore: cosa fa, quanto costa e come scegliere quella giusta.",
    },
  },
  {
    slug: "media",
    nome: "Agenzia media",
    descrizione:
      "Pianificazione e acquisto degli spazi pubblicitari su tv, radio, stampa, affissioni e online.",
    titolo: titolo("Agenzia media"),
    seo: {
      title: "Agenzia media e centro media: cosa fa e come sceglierla",
      description:
        "Cosa fa un'agenzia media, dalla pianificazione all'acquisto degli spazi pubblicitari, e quanto costa. Prepara il brief e fatti contattare da un'agenzia.",
    },
  },
  // Unisce le due aree "digital e web marketing" e "web agency, siti ed e-commerce".
  {
    slug: "web-agency",
    nome: "Web agency e digital marketing",
    descrizione:
      "Siti, e-commerce e campagne online: dalla realizzazione alla promozione, con l'analisi dei dati.",
    titolo: titolo("Web agency e agenzia di digital marketing"),
    seo: {
      title: "Web agency e digital marketing: cosa fa e come sceglierla",
      description:
        "Cosa fa una web agency, dal sito all'e-commerce alle campagne online, e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
  },
  {
    slug: "branding",
    nome: "Branding, grafica e design",
    descrizione:
      "Nome, logo, identità visiva e materiali coordinati per dare un volto riconoscibile al marchio.",
    titolo: titolo("Agenzia di branding e grafica"),
    seo: {
      title: "Agenzia di branding e grafica: cosa fa e come sceglierla",
      description:
        "Logo, identità visiva, naming: cosa fa un'agenzia di branding, quanto costa e come sceglierla. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
  },
  {
    slug: "creativita",
    nome: "Creatività e campagne",
    descrizione:
      "Idee, concept e campagne: dal messaggio alla direzione creativa di contenuti e materiali.",
    titolo: titolo("Agenzia creativa"),
    seo: {
      title: "Agenzia creativa: cosa fa, quanto costa e come sceglierla",
      description:
        "Cosa fa un'agenzia creativa, in cosa è diversa dalle altre e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta al tuo progetto.",
    },
  },
  {
    slug: "social-media",
    nome: "Social media e influencer",
    descrizione:
      "Piani editoriali, gestione delle pagine, campagne a pagamento e collaborazioni con i creator.",
    percorso: "Agenzie social media",
    titolo: titolo("Agenzia di social media marketing"),
    seo: {
      title: "Agenzia social media marketing: cosa fa e come sceglierla",
      description:
        "Cosa fa un'agenzia di social media marketing, quando serve e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta al tuo progetto.",
    },
    pagina: {
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
    titolo: titolo("Agenzia PR e ufficio stampa"),
    seo: {
      title: "Agenzia PR e ufficio stampa: cosa fa e come sceglierla",
      description:
        "Cosa fa un'agenzia PR, quando serve un ufficio stampa e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta alla tua azienda.",
    },
  },
  {
    slug: "seo-sem",
    nome: "SEO e SEM",
    descrizione:
      "Posizionamento sui motori di ricerca e campagne a pagamento sui risultati di Google.",
    titolo: titolo("Agenzia SEO"),
    seo: {
      title: "Agenzia SEO: cosa fa, quanto costa e come sceglierla",
      description:
        "Cosa fa un'agenzia SEO, quanto costa e come capire se lavora bene. Prepara il brief e fatti contattare da un'agenzia adatta al tuo progetto.",
    },
  },
  {
    slug: "video-foto",
    nome: "Produzione video e foto",
    descrizione: "Video aziendali, spot, servizi fotografici e contenuti per i social.",
    titolo: titolo("Agenzia di produzione video e foto"),
    seo: {
      title: "Agenzia di produzione video e foto: come sceglierla",
      description:
        "Video aziendali, spot e foto: cosa fa un'agenzia di produzione, quanto costa e come sceglierla. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
  },
];
