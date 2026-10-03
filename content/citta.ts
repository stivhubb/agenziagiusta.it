import type { Pagina, Titolo } from "./tipi";

// Le pagine città. Aggiungere una città significa aggiungere una voce a questo elenco.
// - slug: indirizzo della pagina (/milano/)
// - nome: usato nel titolo, nel percorso di navigazione e nel footer
// - pagina: i testi. Se manca, la pagina mostra i segnaposto e non viene indicizzata.

export type Citta = {
  slug: string;
  nome: string;
  pagina?: Omit<Pagina, "titolo">;
};

// Il titolo segue lo stesso schema per tutte le città.
export function titoloCitta(nome: string): Titolo {
  return {
    testo: `Agenzie di comunicazione a ${nome}: come trovare`,
    evidenza: "quella giusta.",
  };
}

export const citta: Citta[] = [
  {
    slug: "milano",
    nome: "Milano",
    pagina: {
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
  { slug: "roma", nome: "Roma" },
  { slug: "padova", nome: "Padova" },
  { slug: "bergamo", nome: "Bergamo" },
];
