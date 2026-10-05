// Forma dei testi delle pagine di contenuto.

// Titolo di pagina: la parte "evidenza" è l'ultima parte della frase, in magenta.
export type Titolo = { testo: string; evidenza?: string };

// Una fonte citata per nome: solo enti e associazioni.
export type Fonte = { nome: string; url: string };

// Una domanda frequente con la sua risposta.
export type Domanda = { domanda: string; risposta: string };

// Un blocco di testo è un paragrafo (stringa), un segnaposto, un elenco, le fonti di un testo,
// la nota che dice da dove viene un dato, le domande frequenti o un link a un'altra pagina.
export type Blocco =
  | string
  | { segnaposto: string; alto?: boolean }
  | { elenco: { termine: string; testo: string }[] }
  | { fonti: Fonte[] }
  | { nota: string }
  | { domande: Domanda[] }
  | { link: { testo: string; href: string } };

export type Sezione = { titolo: string; blocchi: Blocco[] };

// Attività e lavorazioni di un tipo di agenzia: gruppi con titolo, ogni voce con nome e spiegazione.
export type Attivita = {
  titolo: string;
  gruppi: { titolo: string; voci: { nome: string; testo: string }[] }[];
};

// intro: il primo paragrafo è l'apertura, gli altri sono l'intro lunga.
// attivita: se c'è, la pagina mette il testo prima del blocco quiz e l'elenco dopo.
// Solo per i verticali:
// - mercato: il mercato di quel tipo di agenzia in Italia, con le fonti
// - costi: fasce generiche, uguali in tutte le città; "nota" dice da dove viene il dato
//   ("Fasce elaborate da AgenziaGiusta.it su listini pubblici di agenzie, ottobre 2026")
// - domande: le tre domande più probabili di un cliente, con la risposta
export type Testi = {
  intro: string[];
  sezioni: Sezione[];
  attivita?: Attivita;
  mercato?: { testo: string[]; fonti?: Fonte[] };
  costi?: { testo: string[]; nota?: string };
  domande?: Domanda[];
};
export type Pagina = Testi & { titolo: Titolo };

// Testi di una pagina tipo + città (/web-agency/roma/).
// - testo: il mercato di quel tipo di agenzia in quella città, un paragrafo per voce
// - fonti: da dove vengono dati e notizie citati nel testo (solo enti e associazioni)
// - agenzie: le agenzie di quel tipo nella città, con il comune della sede e il link al sito
// I costi, "cosa fa" e le domande non stanno qui: sono uguali in tutte le città e vengono
// dai testi del verticale.
export type Agenzia = { nome: string; url: string; comune: string };
export type TestiLocali = {
  testo: string[];
  fonti?: Fonte[];
  agenzie: Agenzia[];
};

// Title e description per Google: title entro 60 caratteri, description entro 155.
export type Seo = { title: string; description: string };