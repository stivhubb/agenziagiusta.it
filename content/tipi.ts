// Forma dei testi delle pagine di contenuto.

// Titolo di pagina: la parte "evidenza" è l'ultima parte della frase, in magenta.
export type Titolo = { testo: string; evidenza?: string };

// Un blocco di testo è un paragrafo (stringa), un segnaposto o un elenco.
export type Blocco =
  | string
  | { segnaposto: string; alto?: boolean }
  | { elenco: { termine: string; testo: string }[] };

export type Sezione = { titolo: string; blocchi: Blocco[] };

// Attività e lavorazioni di un tipo di agenzia: gruppi con titolo, ogni voce con nome e spiegazione.
export type Attivita = {
  titolo: string;
  gruppi: { titolo: string; voci: { nome: string; testo: string }[] }[];
};

// intro: il primo paragrafo è l'apertura, gli altri sono l'intro lunga.
// attivita: se c'è, la pagina mette il testo prima del blocco quiz e l'elenco dopo.
export type Testi = { intro: string[]; sezioni: Sezione[]; attivita?: Attivita };
export type Pagina = Testi & { titolo: Titolo };

// Title e description per Google: title entro 60 caratteri, description entro 155.
export type Seo = { title: string; description: string };