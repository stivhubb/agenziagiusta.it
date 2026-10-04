import type { Seo, Testi, Titolo } from "./tipi";
import { branding } from "./testi-verticali/branding";
import { comunicazione } from "./testi-verticali/comunicazione";
import { creativita } from "./testi-verticali/creativita";
import { media } from "./testi-verticali/media";
import { prUfficioStampa } from "./testi-verticali/pr-ufficio-stampa";
import { seoSem } from "./testi-verticali/seo-sem";
import { socialMedia } from "./testi-verticali/social-media";
import { videoFoto } from "./testi-verticali/video-foto";
import { webAgency } from "./testi-verticali/web-agency";

// Le pagine verticali. Aggiungere un verticale significa aggiungere una voce a questo elenco.
// - slug: indirizzo della pagina (/social-media/)
// - nome e descrizione: scheda in home
// - percorso: voce nel percorso di navigazione in cima alla pagina (se manca, si usa il nome)
// - titolo: H1 della pagina
// - seo: title e description per Google (title entro 60 caratteri, description entro 155)
// - pagina: i testi, uno per file nella cartella content/testi-verticali/.
//   Se manca, la pagina mostra i segnaposto e non viene indicizzata.

export type Verticale = {
  slug: string;
  nome: string;
  descrizione: string;
  percorso?: string;
  titolo: Titolo;
  seo: Seo;
  pagina?: Testi;
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
      title: "Agenzia di comunicazione, marketing e pubblicità: cosa fa",
      description:
        "Agenzia di comunicazione, di marketing o pubblicitaria? Per una PMI spesso è lo stesso fornitore: cosa fa, come lavora e tutte le attività che segue.",
    },
    pagina: comunicazione,
  },
  {
    slug: "media",
    nome: "Agenzia media",
    descrizione:
      "Pianificazione e acquisto degli spazi pubblicitari su tv, radio, stampa, affissioni e online.",
    titolo: titolo("Agenzia media"),
    seo: {
      title: "Agenzia media e centro media: cosa fa e come lavora",
      description:
        "Cosa fa un'agenzia media, dalla pianificazione all'acquisto degli spazi pubblicitari, e come lavora. Prepara il brief e fatti contattare da un'agenzia.",
    },
    pagina: media,
  },
  // Unisce le due aree "digital e web marketing" e "web agency, siti ed e-commerce".
  {
    slug: "web-agency",
    nome: "Web agency e digital marketing",
    descrizione:
      "Siti, e-commerce e campagne online: dalla realizzazione alla promozione, con l'analisi dei dati.",
    titolo: titolo("Web agency e agenzia di digital marketing"),
    seo: {
      title: "Web agency e digital marketing: cosa fa e come lavora",
      description:
        "Cosa fa una web agency, dal sito all'e-commerce alle campagne online, e come lavora. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    pagina: webAgency,
  },
  {
    slug: "branding",
    nome: "Branding, grafica e design",
    descrizione:
      "Nome, logo, identità visiva e materiali coordinati per dare un volto riconoscibile al marchio.",
    titolo: titolo("Agenzia di branding e grafica"),
    seo: {
      title: "Agenzia di branding e grafica: cosa fa e come lavora",
      description:
        "Logo, identità visiva, naming: cosa fa un'agenzia di branding e come lavora. Prepara il brief e fatti contattare da un'agenzia adatta al tuo progetto.",
    },
    pagina: branding,
  },
  {
    slug: "creativita",
    nome: "Creatività e campagne",
    descrizione:
      "Idee, concept e campagne: dal messaggio alla direzione creativa di contenuti e materiali.",
    titolo: titolo("Agenzia creativa"),
    seo: {
      title: "Agenzia creativa: cosa fa, come lavora e tutte le attività",
      description:
        "Cosa fa un'agenzia creativa, dal concept alla produzione della campagna, e come lavora. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    pagina: creativita,
  },
  {
    slug: "social-media",
    nome: "Social media e influencer",
    descrizione:
      "Piani editoriali, gestione delle pagine, campagne a pagamento e collaborazioni con i creator.",
    percorso: "Agenzie social media",
    titolo: titolo("Agenzia di social media marketing"),
    seo: {
      title: "Agenzia social media marketing: cosa fa e come lavora",
      description:
        "Cosa fa un'agenzia di social media marketing, come lavora e tutte le attività che segue. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    pagina: socialMedia,
  },
  {
    slug: "pr-ufficio-stampa",
    nome: "PR e ufficio stampa",
    descrizione:
      "Rapporti con giornalisti e testate, comunicati, eventi e cura della reputazione.",
    titolo: titolo("Agenzia PR e ufficio stampa"),
    seo: {
      title: "Agenzia PR e ufficio stampa: cosa fa e come lavora",
      description:
        "Cosa fa un'agenzia PR, come lavora un ufficio stampa e tutte le attività che segue. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    pagina: prUfficioStampa,
  },
  {
    slug: "seo-sem",
    nome: "SEO e SEM",
    descrizione:
      "Posizionamento sui motori di ricerca e campagne a pagamento sui risultati di Google.",
    titolo: titolo("Agenzia SEO"),
    seo: {
      title: "Agenzia SEO: cosa fa, come lavora e tutte le attività",
      description:
        "Cosa fa un'agenzia SEO, come lavora e tutte le attività, dall'audit alle campagne a pagamento. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    pagina: seoSem,
  },
  {
    slug: "video-foto",
    nome: "Produzione video e foto",
    descrizione: "Video aziendali, spot, servizi fotografici e contenuti per i social.",
    titolo: titolo("Agenzia di produzione video e foto"),
    seo: {
      title: "Agenzia di produzione video e foto: cosa fa e come lavora",
      description:
        "Video aziendali, spot e foto: cosa fa un'agenzia di produzione e come lavora. Prepara il brief e fatti contattare da un'agenzia adatta al tuo progetto.",
    },
    pagina: videoFoto,
  },
];
