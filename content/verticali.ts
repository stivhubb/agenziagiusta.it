import type { Blocco, Seo, Sezione, Testi, Titolo } from "./tipi";
import { branding } from "./testi-verticali/branding";
import { comunicazione } from "./testi-verticali/comunicazione";
import { creativita } from "./testi-verticali/creativita";
import { marketing } from "./testi-verticali/marketing";
import { media } from "./testi-verticali/media";
import { pubblicita } from "./testi-verticali/pubblicita";
import { prUfficioStampa } from "./testi-verticali/pr-ufficio-stampa";
import { seoSem } from "./testi-verticali/seo-sem";
import { socialMedia } from "./testi-verticali/social-media";
import { videoFoto } from "./testi-verticali/video-foto";
import { webAgency } from "./testi-verticali/web-agency";
import { webMarketing } from "./testi-verticali/web-marketing";

// Le pagine verticali. Aggiungere un verticale significa aggiungere una voce a questo elenco.
// - slug: indirizzo della pagina (/social-media/)
// - nome e descrizione: scheda in home
// - percorso: voce nel percorso di navigazione in cima alla pagina (se manca, si usa il nome)
// - titolo: H1 della pagina
// - seo: title e description per Google (title entro 60 caratteri, description entro 155)
// - locale: come si nomina il tipo nelle pagine con la città. "nome" è al singolare e va in
//   title e H1 ("Agenzia SEO e SEM a Milano"); "plurale" va nella description e nel titolo
//   dei link alle città ("Agenzie SEO per città") e nel titolo dell'elenco delle agenzie
// - h2: titoli delle sezioni mercato, costi e domande, con le ricerche più frequenti
//   ("Quanto costa un'agenzia pubblicitaria")
// Parole chiave: la ricerca più frequente va in indirizzo, inizio del title, H1 e prima frase;
// le varianti successive in seconda metà del title, H2, description e primo paragrafo
// (vedi il documento SEO).
// - pagina: i testi, uno per file nella cartella content/testi-verticali/.
//   Se manca, la pagina mostra i segnaposto e non viene indicizzata.
//   Struttura della pagina: intro; mercato, costi, cosa fa e domande; blocco quiz;
//   attività e lavorazioni; link alle città.

export type Verticale = {
  slug: string;
  nome: string;
  // Come compare il tipo nella ricerca in home quando si cerca per servizio.
  servizio: string;
  descrizione: string;
  percorso?: string;
  titolo: Titolo;
  seo: Seo;
  locale: { nome: string; plurale: string };
  h2: { mercato: string; costi: string; domande: string };
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

function sezioneDomande(v: Verticale): Sezione {
  return {
    titolo: v.h2.domande,
    blocchi:
      v.pagina?.domande && v.pagina.domande.length > 0
        ? [{ domande: v.pagina.domande }]
        : [{ segnaposto: "[TRE DOMANDE FREQUENTI: DA SCRIVERE]" }],
  };
}

// Primo blocco della pagina di un verticale, sotto l'intro: mercato, costi, cosa fa, domande.
export function sezioniVerticale(v: Verticale): Sezione[] {
  const pagina = v.pagina;
  if (!pagina) return [];
  return [
    {
      titolo: v.h2.mercato,
      blocchi: pagina.mercato
        ? [...pagina.mercato.testo, ...(pagina.mercato.fonti ? [{ fonti: pagina.mercato.fonti }] : [])]
        : [{ segnaposto: "[MERCATO: DA SCRIVERE]" }],
    },
    { titolo: v.h2.costi, blocchi: blocchiCosti(pagina) },
    ...pagina.sezioni,
    sezioneDomande(v),
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
    sezioneDomande(v),
  ];
}

// Gli H1 chiudono allo stesso modo. "fanno" per le parole chiave al plurale ("Agenzie SEO").
function titolo(inizio: string, verbo = "fa"): Titolo {
  return { testo: `${inizio}: cosa ${verbo} e come trovare`, evidenza: "quella giusta." };
}

export const verticali: Verticale[] = [
  // Comunicazione, pubblicità e marketing hanno pagine separate: i risultati di Google per le
  // tre ricerche hanno in comune pochi siti, quindi sono ricerche diverse.
  {
    slug: "comunicazione",
    servizio: "Strategia e comunicazione integrata",
    nome: "Agenzia di comunicazione",
    descrizione:
      "L'agenzia a cui affidare l'immagine dell'azienda e la regia della comunicazione: strategia, messaggi e canali.",
    titolo: titolo("Agenzia di comunicazione"),
    seo: {
      title: "Agenzia di comunicazione: cosa fa e quanto costa",
      description:
        "Cosa fa un'agenzia di comunicazione, come lavora e quanto costa. Le agenzie di comunicazione a confronto con quelle di marketing e di pubblicità.",
    },
    locale: { nome: "Agenzia di comunicazione", plurale: "Agenzie di comunicazione" },
    h2: {
      mercato: "Il mercato delle agenzie di comunicazione in Italia",
      costi: "Quanto costa un'agenzia di comunicazione",
      domande: "Domande frequenti sulle agenzie di comunicazione",
    },
    pagina: comunicazione,
  },
  {
    slug: "pubblicita",
    servizio: "Campagne pubblicitarie (spot, affissioni, stampa, radio)",
    nome: "Agenzia di pubblicità",
    descrizione:
      "Campagne su tv, radio, stampa, affissioni e online: dall'idea creativa alla produzione e all'uscita sui mezzi.",
    titolo: titolo("Agenzie di pubblicità", "fanno"),
    seo: {
      title: "Agenzie di pubblicità: cosa fa un'agenzia pubblicitaria",
      description:
        "Cosa fa un'agenzia pubblicitaria, dalla campagna allo spot e alle affissioni, come lavora e quanto costa. Prepara il brief e fatti contattare.",
    },
    locale: { nome: "Agenzia di pubblicità", plurale: "Agenzie pubblicitarie" },
    h2: {
      mercato: "Il mercato della pubblicità in Italia",
      costi: "Quanto costa un'agenzia pubblicitaria",
      domande: "Domande frequenti sulle agenzie pubblicitarie",
    },
    pagina: pubblicita,
  },
  {
    slug: "marketing",
    servizio: "Strategia di marketing e lancio di prodotti",
    nome: "Agenzia di marketing",
    descrizione: "Piano di marketing, lancio di prodotti e acquisizione di clienti, online e offline.",
    titolo: titolo("Agenzia di marketing"),
    seo: {
      title: "Agenzia di marketing: cosa fa e quanto costa",
      description:
        "Cosa fa un'agenzia marketing, dal piano al lancio dei prodotti, e quanto costa. Le agenzie di marketing a confronto con quelle di comunicazione.",
    },
    locale: { nome: "Agenzia di marketing", plurale: "Agenzie di marketing" },
    h2: {
      mercato: "Il mercato delle agenzie di marketing in Italia",
      costi: "Quanto costa un'agenzia di marketing",
      domande: "Domande frequenti sulle agenzie di marketing",
    },
    pagina: marketing,
  },
  {
    slug: "media",
    servizio: "Acquisto di spazi pubblicitari e pianificazione media",
    nome: "Agenzia media",
    descrizione:
      "Pianificazione e acquisto degli spazi pubblicitari su tv, radio, stampa, affissioni e online.",
    titolo: titolo("Agenzia media e centro media"),
    seo: {
      title: "Agenzia media e centro media: cosa fa e come lavora",
      description:
        "Cosa fa un'agenzia media o media agency, dalla pianificazione all'acquisto degli spazi, e quanto costa un centro media. Prepara il brief.",
    },
    locale: { nome: "Agenzia media", plurale: "Agenzie media" },
    h2: {
      mercato: "Il mercato pubblicitario in Italia",
      costi: "Quanto costa un centro media",
      domande: "Domande frequenti sulle media agency",
    },
    pagina: media,
  },
  // Web agency (siti ed e-commerce) e web marketing (campagne online) sono ricerche diverse.
  {
    slug: "web-agency",
    servizio: "Siti web ed e-commerce",
    nome: "Web agency",
    descrizione: "Progettazione, realizzazione e manutenzione di siti, e-commerce e applicazioni web.",
    titolo: titolo("Web agency"),
    seo: {
      title: "Web agency: cosa fa un'agenzia web e quanto costa un sito",
      description:
        "Cosa fa una web agency o agenzia web design: realizzazione di siti, e-commerce e applicazioni web, come lavora e quanto costa. Prepara il brief.",
    },
    locale: { nome: "Web agency", plurale: "Web agency" },
    h2: {
      mercato: "Il mercato del web e dell'e-commerce in Italia",
      costi: "Quanto costa la realizzazione di un sito",
      domande: "Domande frequenti sulle web agency",
    },
    pagina: webAgency,
  },
  {
    slug: "web-marketing",
    servizio: "Campagne online e digital marketing",
    nome: "Agenzia di web marketing",
    descrizione: "Campagne su Google e sui social, SEO ed email marketing per portare contatti e vendite online.",
    titolo: titolo("Agenzia di web marketing"),
    seo: {
      title: "Agenzia di web marketing e digital marketing: cosa fa",
      description:
        "Cosa fa un'agenzia di web marketing o digital agency, dalle campagne su Google e sui social alla SEO, e quanto costa. Prepara il brief e fatti contattare.",
    },
    locale: { nome: "Agenzia di web marketing", plurale: "Agenzie di web marketing" },
    h2: {
      mercato: "Il mercato delle agenzie digitali in Italia",
      costi: "Quanto costa un'agenzia di web marketing",
      domande: "Domande frequenti sulle agenzie di digital marketing",
    },
    pagina: webMarketing,
  },
  {
    slug: "branding",
    servizio: "Logo, immagine coordinata, grafica e packaging",
    nome: "Grafica e branding",
    descrizione:
      "Nome, logo, identità visiva e materiali coordinati per dare un volto riconoscibile al marchio.",
    titolo: titolo("Agenzia di grafica e branding"),
    seo: {
      title: "Agenzia di grafica e branding: cosa fa e quanto costa",
      description:
        "Logo, identità visiva, naming: cosa fa un'agenzia di grafica o branding agency e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    locale: { nome: "Agenzia grafica e di branding", plurale: "Agenzie di grafica e branding" },
    h2: {
      mercato: "Il mercato del design in Italia",
      costi: "Quanto costa un'agenzia di branding",
      domande: "Domande frequenti sulle agenzie di grafica",
    },
    pagina: branding,
  },
  {
    slug: "creativita",
    servizio: "Idee e concept per le campagne",
    nome: "Agenzia creativa",
    descrizione:
      "Idee, concept e campagne: dal messaggio alla direzione creativa di contenuti e materiali.",
    titolo: titolo("Creative agency"),
    seo: {
      title: "Creative agency: cosa fa un'agenzia creativa e come lavora",
      description:
        "Cosa fa una creative agency, dal concept alla produzione della campagna, e come lavorano le agenzie creative. Prepara il brief e fatti contattare.",
    },
    locale: { nome: "Agenzia creativa", plurale: "Agenzie creative" },
    h2: {
      mercato: "Il mercato delle agenzie creative in Italia",
      costi: "Quanto costa un'agenzia creativa",
      domande: "Domande frequenti sulle agenzie creative",
    },
    pagina: creativita,
  },
  {
    slug: "social-media",
    servizio: "Gestione dei social e influencer",
    nome: "Social media e influencer",
    descrizione:
      "Piani editoriali, gestione delle pagine, campagne a pagamento e collaborazioni con i creator.",
    percorso: "Agenzie social media",
    titolo: titolo("Agenzia di social media marketing"),
    seo: {
      title: "Agenzia social media marketing: cosa fa e come lavora",
      description:
        "Cosa fa un'agenzia di social media marketing o social media agency, come lavora e quanto costa. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    locale: { nome: "Agenzia di social media marketing", plurale: "Agenzie social media" },
    h2: {
      mercato: "Il mercato dei social media in Italia",
      costi: "Quanto costa un'agenzia di social media marketing",
      domande: "Domande frequenti sulle social media agency",
    },
    pagina: socialMedia,
  },
  {
    slug: "pr-ufficio-stampa",
    servizio: "Ufficio stampa e rapporti con i giornali",
    nome: "Agenzia di pubbliche relazioni",
    descrizione:
      "Rapporti con giornalisti e testate, comunicati, eventi e cura della reputazione.",
    titolo: titolo("Agenzia PR, pubbliche relazioni e ufficio stampa"),
    seo: {
      title: "Agenzia PR e ufficio stampa: cosa fa e quanto costa",
      description:
        "Cosa fa un'agenzia PR, come lavorano le agenzie di pubbliche relazioni e un ufficio stampa, e quanto costano. Prepara il brief e fatti contattare.",
    },
    locale: { nome: "Agenzia PR e pubbliche relazioni", plurale: "Agenzie di pubbliche relazioni" },
    h2: {
      mercato: "Il mercato delle pubbliche relazioni in Italia",
      costi: "Quanto costa un'agenzia PR",
      domande: "Domande frequenti sulle agenzie di pubbliche relazioni",
    },
    pagina: prUfficioStampa,
  },
  {
    slug: "seo-sem",
    servizio: "Posizionamento su Google e Google Ads",
    nome: "SEO e SEM",
    descrizione:
      "Posizionamento sui motori di ricerca e campagne a pagamento sui risultati di Google.",
    titolo: titolo("Agenzie SEO", "fanno"),
    seo: {
      title: "Agenzie SEO: cosa fa un'agenzia SEO e SEM e quanto costa",
      description:
        "Cosa fanno le agenzie SEO, dall'audit alle campagne su Google, e quanto costa una SEO agency. Prepara il brief e fatti contattare da un'agenzia adatta.",
    },
    locale: { nome: "Agenzia SEO", plurale: "Agenzie SEO" },
    h2: {
      mercato: "Il mercato della ricerca online in Italia",
      costi: "Quanto costa un'agenzia SEO",
      domande: "Domande frequenti sulle agenzie SEO",
    },
    pagina: seoSem,
  },
  {
    slug: "video-foto",
    servizio: "Video, spot e servizi fotografici",
    nome: "Produzione video e foto",
    descrizione: "Video aziendali, spot, servizi fotografici e contenuti per i social.",
    titolo: titolo("Società di produzione video e foto"),
    seo: {
      title: "Società di produzione video e shooting fotografico",
      description:
        "Cosa fa una società di produzione video, dagli spot ai video aziendali agli shooting fotografici, e quanto costa. Prepara il brief e fatti contattare.",
    },
    locale: { nome: "Società di produzione video", plurale: "Società di produzione video" },
    h2: {
      mercato: "Il mercato dell'audiovisivo in Italia",
      costi: "Quanto costa un video aziendale",
      domande: "Domande frequenti sulle società di produzione video",
    },
    pagina: videoFoto,
  },
];
