import type { Seo, Testi, Titolo } from "./tipi";
import type { Verticale } from "./verticali";

// Le città. Ogni città ha una pagina sotto ogni tipo di agenzia:
// /comunicazione/milano/, /web-agency/milano/, /seo-sem/milano/...
// Aggiungere una città significa aggiungere una voce a questo elenco.
// - slug: l'ultima parte dell'indirizzo
// - nome: usato nel titolo e nel percorso di navigazione
// - footer: se la città compare nel footer (con il link alla pagina sotto Comunicazione)
// - pagine: i testi, uno per tipo di agenzia (la chiave è lo slug del verticale).
//   Una pagina senza testi mostra i segnaposto e non viene indicizzata.

export type Citta = {
  slug: string;
  nome: string;
  footer?: boolean;
  pagine?: Record<string, Testi>;
};

// "a Milano", "ad Ancona".
function a(nome: string): string {
  return `${/^a/i.test(nome) ? "ad" : "a"} ${nome}`;
}

export function percorsoLocale(verticale: Verticale, c: Citta): string {
  return `/${verticale.slug}/${c.slug}/`;
}

// Titolo, title e description seguono lo stesso schema per tutte le pagine tipo + città.
export function titoloLocale(verticale: Verticale, c: Citta): Titolo {
  return { testo: `${verticale.locale.plurale} ${a(c.nome)}: come trovare`, evidenza: "quella giusta." };
}

export function seoLocale(verticale: Verticale, c: Citta): Seo {
  return {
    title: `${verticale.locale.plurale} ${a(c.nome)}: guida alla scelta`,
    description: `Cerchi ${verticale.locale.singolare} ${a(c.nome)}? Prepara il brief con il quiz e fatti contattare da un'agenzia adatta al tuo progetto.`,
  };
}

export const citta: Citta[] = [
  {
    slug: "milano",
    nome: "Milano",
    footer: true,
    pagine: {
      comunicazione: {
        intro: [
          "Milano è il principale mercato italiano della comunicazione, con agenzie di ogni dimensione e specializzazione. Proprio per questo scegliere è difficile: l'offerta è ampia e le differenze non si vedono a colpo d'occhio.",
          "In città hanno sede le filiali italiane dei grandi gruppi internazionali della pubblicità, molte agenzie indipendenti di medie dimensioni e una rete fitta di studi specializzati in un solo servizio: branding, social media, ufficio stampa, produzione video. A questi si aggiungono i freelance, che spesso lavorano per le agenzie stesse.",
          // DA VERIFICARE prima della pubblicazione: i prezzi più alti a Milano rispetto ad altre città.
          "Questa concentrazione ha due effetti per chi cerca. Il primo è positivo: quasi qualunque esigenza trova a Milano qualcuno che la tratta ogni giorno, anche in settori specifici come moda, design, finanza o farmaceutico. Il secondo lo è meno: i prezzi tendono a essere più alti che altrove e le strutture più note selezionano i clienti in base al budget.",
          "Per una piccola o media impresa la scelta giusta raramente è l'agenzia più famosa. È quella abituata a lavorare con aziende della tua dimensione, nel tuo settore e con il tuo budget. Qui sotto trovi come orientarti nel mercato milanese e come arrivare al primo incontro con le idee chiare.",
        ],
        sezioni: [
          {
            titolo: "Il mercato della comunicazione a Milano",
            blocchi: [
              "In città convivono le sedi italiane dei grandi gruppi internazionali, le agenzie indipendenti di medie dimensioni e molti studi specializzati su un solo servizio o su un solo settore.",
              {
                segnaposto:
                  "[DATI SUL MERCATO LOCALE: NUMERO DI AGENZIE, SETTORI PRINCIPALI, BUDGET MEDI]",
              },
            ],
          },
          {
            titolo: "Che tipo di agenzie trovi",
            blocchi: [
              "Le agenzie più grandi offrono tutti i servizi e lavorano soprattutto con budget alti. Quelle più piccole sono spesso più adatte a una piccola o media impresa: costano meno e hai un rapporto diretto con chi segue il progetto.",
            ],
          },
          {
            titolo: "Agenzie di comunicazione a Milano",
            blocchi: [
              {
                segnaposto: "[ELENCO DI AGENZIE DELLA CITTÀ: INSERIMENTO DA VALUTARE]",
                alto: true,
              },
            ],
          },
          {
            titolo: "Agenzia in città o a distanza?",
            blocchi: [
              "La vicinanza conta se il progetto richiede incontri frequenti, eventi o riprese sul posto. Per molti servizi digitali un'agenzia di un'altra città lavora altrettanto bene. Nel quiz puoi indicare se la zona per te è un vincolo.",
            ],
          },
        ],
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
