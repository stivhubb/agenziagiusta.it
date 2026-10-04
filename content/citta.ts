import type { Seo, TestiLocali, Titolo } from "./tipi";
import type { Verticale } from "./verticali";

// Le città. Ogni città ha una pagina sotto ogni tipo di agenzia:
// /comunicazione/milano/, /web-agency/milano/, /seo-sem/milano/...
// Aggiungere una città significa aggiungere una voce a questo elenco.
// - slug: l'ultima parte dell'indirizzo
// - nome: usato nel titolo e nel percorso di navigazione
// - footer: se la città compare nel footer (con il link alla pagina sotto Comunicazione)
// - pagine: i contenuti, uno per tipo di agenzia (la chiave è lo slug del verticale):
//   il testo sul mercato locale, le fonti e l'elenco delle agenzie.
//   Una pagina senza testo o senza agenzie mostra i segnaposto e non viene indicizzata.

export type Citta = {
  slug: string;
  nome: string;
  footer?: boolean;
  pagine?: Record<string, TestiLocali>;
};

// "a Milano", "ad Ancona".
export function a(nome: string): string {
  return `${/^a/i.test(nome) ? "ad" : "a"} ${nome}`;
}

// Una pagina è completa, e quindi va su Google, quando ha sia il testo sia le agenzie.
export function completa(pagina?: TestiLocali): boolean {
  return Boolean(pagina && pagina.testo.length > 0 && pagina.agenzie.length > 0);
}

export function percorsoLocale(verticale: Verticale, c: Citta): string {
  return `/${verticale.slug}/${c.slug}/`;
}

// Titolo, title e description seguono lo stesso schema per tutte le pagine tipo + città:
// il singolare in title e H1, il plurale nella description.
export function titoloLocale(verticale: Verticale, c: Citta): Titolo {
  return { testo: `${verticale.locale.nome} ${a(c.nome)}: come trovare`, evidenza: "quella giusta." };
}

export function seoLocale(verticale: Verticale, c: Citta): Seo {
  const plurale = verticale.locale.plurale;
  return {
    title: `${verticale.locale.nome} ${a(c.nome)}`,
    description: `Cerchi tra le ${plurale[0].toLowerCase()}${plurale.slice(1)} ${a(c.nome)}? Prepara il brief con il quiz e fatti contattare da un'agenzia adatta al tuo progetto.`,
  };
}

export const citta: Citta[] = [
  {
    slug: "milano",
    nome: "Milano",
    footer: true,
    pagine: {
      comunicazione: {
        testo: [
          "Milano è il principale mercato italiano della comunicazione, con agenzie di ogni dimensione e specializzazione.",
          "In città hanno sede le filiali italiane dei grandi gruppi internazionali della pubblicità, molte agenzie indipendenti di medie dimensioni e una rete fitta di studi specializzati in un solo servizio: branding, social media, ufficio stampa, produzione video. A questi si aggiungono i freelance, che spesso lavorano per le agenzie stesse.",
        ],
        agenzie: [],
      },
    },
  },
  { slug: "roma", nome: "Roma", footer: true },
  { slug: "padova", nome: "Padova", footer: true },
  { slug: "bergamo", nome: "Bergamo", footer: true },
  { slug: "torino", nome: "Torino" },
  { slug: "napoli", nome: "Napoli" },
  { slug: "bologna", nome: "Bologna" },
  { slug: "firenze", nome: "Firenze" },
  { slug: "genova", nome: "Genova" },
  { slug: "verona", nome: "Verona" },
  { slug: "brescia", nome: "Brescia" },
  { slug: "bari", nome: "Bari" },
  { slug: "palermo", nome: "Palermo" },
  { slug: "catania", nome: "Catania" },
  { slug: "venezia", nome: "Venezia" },
  { slug: "treviso", nome: "Treviso" },
  { slug: "parma", nome: "Parma" },
  { slug: "rimini", nome: "Rimini" },
  { slug: "trieste", nome: "Trieste" },
  { slug: "udine", nome: "Udine" },
  { slug: "trento", nome: "Trento" },
  { slug: "bolzano", nome: "Bolzano" },
  { slug: "ancona", nome: "Ancona" },
  { slug: "pescara", nome: "Pescara" },
  { slug: "lecce", nome: "Lecce" },
  { slug: "cagliari", nome: "Cagliari" },
];
