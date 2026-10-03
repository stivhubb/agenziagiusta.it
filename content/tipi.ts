// Forma dei testi delle pagine di contenuto.

// Titolo di pagina: la parte "evidenza" è l'ultima parte della frase, in magenta.
export type Titolo = { testo: string; evidenza?: string };

// Un blocco di testo è un paragrafo (stringa), un segnaposto o un elenco.
export type Blocco =
  | string
  | { segnaposto: string; alto?: boolean }
  | { elenco: { termine: string; testo: string }[] };

export type Sezione = { titolo: string; blocchi: Blocco[] };

// intro: il primo paragrafo è l'apertura, gli altri sono l'intro lunga.
export type Pagina = { titolo: Titolo; intro: string[]; sezioni: Sezione[] };

// Title e description per Google: title entro 60 caratteri, description entro 155.
export type Seo = { title: string; description: string };