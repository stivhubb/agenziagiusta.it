import type { Blocco, Seo, Sezione, Testi, Titolo } from "./tipi";
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
// - locale: come si nomina il tipo nelle pagine con la città. "nome" è al singolare e va in
//   title e H1 ("Agenzia SEO e SEM a Milano"); "plurale" va nella description e nel titolo
//   dei link alle città ("Agenzie SEO per città")
// - pagina: i testi, uno per file nella cartella content/testi-verticali/.
//   Se manca, la pagina mostra i segnaposto e non viene indicizzata.
//   Struttura della pagina: intro; mercato, costi, cosa fa e domande; blocco quiz;
//   attività e lavorazioni; link alle città.

export type Verticale = {
  slug: string;
  nome: string;
  descrizione: string;
  percorso?: string;
  titolo: Titolo;
  seo: Seo;
  locale: { nome: string; plurale: string };
  pagina?: Testi;
};

// Un verticale è completo, e quindi va su Google, quando oltre ai testi ha mercato, costi
// e domande: finché ne manca uno la pagina mostra un segnaposto.
export function completo(v: Verticale): boolean {
  const p = v.pagina;
  return Boolean(p && p.mercato && p.costi && p.domande && p.domande.length > 0);
}

// I costi di quel tipo di agenzia: stanno nella pagina del verticale e, uguali, nell'intro
// di tutte le sue pagine con la città.
export function blocchiCosti(pagina?: Testi): Blocco[] {
  if (!pagina?.costi) return [{ segnaposto: "[COSTI: DA SCRIVERE]" }];
  return [...pagina.costi.testo, ...(pagina.costi.nota ? [{ nota: pagina.costi.nota }] : [])];
}

function sezioneDomande(pagina?: Testi): Sezione {
  return {
    titolo: "Domande frequenti",
    blocchi:
      pagina?.domande && pagina.domande.length > 0
        ? [{ domande: pagina.domande }]
        : [{ segnaposto: "[TRE DOMANDE FREQUENTI: DA SCRIVERE]" }],
  };
}

// Primo blocco della pagina di un verticale, sotto l'intro: mercato, costi, cosa fa, domande.
export function sezioniVerticale(pagina: Testi): Sezione[] {
  return [
    {
      titolo: "Il mercato",
      blocchi: pagina.mercato
        ? [...pagina.mercato.testo, ...(pagina.mercato.fonti ? [{ fonti: pagina.mercato.fonti }] : [])]
        : [{ segnaposto: "[MERCATO: DA SCRIVERE]" }],
    },
    { titolo: "Quanto costa", blocchi: blocchiCosti(pagina) },
    ...pagina.sezioni,
    sezioneDomande(pagina),
  ];
}

// Terzo blocco delle pagine tipo + città: cosa fa quel tipo di agenzia, in breve, con il link
// alla pagina del verticale, e le stesse tre domande. È uguale in tutte le città.
export function sezioniCosaFa(v: Verticale): Sezione[] {
  return [
    {
      titolo: v.pagina?.sezioni[0]?.titolo ?? `Cosa fa: ${v.nome}`,
      blocchi: [
        ...(v.pagina ? v.pagina.intro : [{ segnaposto: "[COSA FA: DA SCRIVERE]" }]),
        { link: { testo: "Vedi tutte le attività e le lavorazioni", href: `/${v.slug}/` } },
      ],
    },
    sezioneDomande(v.pagina),
  ];
}

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
    locale: { nome: "Agenzia di comunicazione, marketing e pubblicità", plurale: "Agenzie di comunicazione" },
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
    locale: { nome: "Agenzia media", plurale: "Agenzie media" },
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
    locale: { nome: "Web agency e digital marketing", plurale: "Web agency" },
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
    locale: { nome: "Agenzia di branding e grafica", plurale: "Agenzie di branding" },
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
    locale: { nome: "Agenzia creativa", plurale: "Agenzie creative" },
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
    locale: { nome: "Agenzia di social media marketing", plurale: "Agenzie social media" },
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
    locale: { nome: "Agenzia PR e ufficio stampa", plurale: "Agenzie PR e uffici stampa" },
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
    locale: { nome: "Agenzia SEO e SEM", plurale: "Agenzie SEO" },
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
    locale: { nome: "Agenzia di produzione video e foto", plurale: "Agenzie di produzione video" },
    pagina: videoFoto,
  },
];
