import type { Pagina, Seo } from "./tipi";

// Guida "Agenzia o intelligenza artificiale": per le aziende che si chiedono se usare l'AI
// al posto di un'agenzia. Dati e norme aggiornati a novembre 2026: da ricontrollare almeno
// ogni sei mesi.

export const guidaAi: Pagina & { seo: Seo } = {
  titolo: { testo: "Agenzia o intelligenza artificiale:", evidenza: "cosa conviene alla tua azienda." },
  seo: {
    title: "Agenzia o intelligenza artificiale: cosa conviene a un'azienda",
    description:
      "Cosa si può fare da soli con l'intelligenza artificiale, cosa resta a un'agenzia di comunicazione e marketing, come cambiano costi e regole.",
  },
  intro: [
    "L'intelligenza artificiale ha cambiato in pochi anni il modo in cui si producono testi, immagini e video, e molte aziende si chiedono se abbia ancora senso affidarsi a un'agenzia. In Italia la diffusione è rapida: secondo l'Istat (Imprese e Ict, dicembre 2025), nel 2025 il 16,4% delle imprese con almeno 10 addetti usava almeno una tecnologia di intelligenza artificiale, il doppio del 2024 (8,2%). Tra le grandi imprese la quota supera la metà (53,1%), tra le piccole e medie si ferma al 15,7%, e il marketing e le vendite sono l'area in cui viene usata di più.",
    "La risposta breve è che l'intelligenza artificiale cambia il lavoro di un'agenzia, ma non lo sostituisce: sposta il valore dalla produzione alla strategia, al controllo e alla responsabilità sul risultato. Questa guida spiega cosa si può fare da soli, cosa conviene affidare a un'agenzia, cosa chiedere in un preventivo e quali regole tenere presenti.",
  ],
  sezioni: [
    {
      titolo: "Cosa si può fare da soli con l'intelligenza artificiale",
      blocchi: [
        "Gli strumenti generativi sono utili soprattutto nelle attività di produzione e di prima bozza, quelle che un'azienda svolge spesso e in modo ripetitivo:",
        {
          elenco: [
            { termine: "Testi brevi:", testo: "post, descrizioni di prodotto, newsletter, risposte a domande frequenti." },
            { termine: "Immagini e grafiche:", testo: "contenuti per i social, varianti di un visual già esistente, ritocchi." },
            { termine: "Traduzioni e adattamenti", testo: "di testi già scritti per altri mercati o canali." },
            { termine: "Prime analisi:", testo: "sintesi di recensioni, commenti, dati di vendita e documenti." },
            { termine: "Idee e scalette", testo: "da sviluppare e verificare." },
          ],
        },
        "Il limite è che l'intelligenza artificiale lavora su ciò che le si chiede. Senza un obiettivo chiaro, un pubblico definito e un tono riconoscibile produce contenuti corretti ma generici, simili a quelli di chiunque altro usi lo stesso strumento. E i risultati vanno sempre controllati: un testo generato può contenere errori nei fatti, nei dati o nei riferimenti.",
      ],
    },
    {
      titolo: "Cosa resta a un'agenzia",
      blocchi: [
        "Molte agenzie usano già l'intelligenza artificiale per produrre più in fretta. Quello che le distingue è il lavoro che gli strumenti non fanno:",
        {
          elenco: [
            { termine: "La strategia:", testo: "decidere obiettivi, pubblico, posizionamento e mezzi, sulla base del mercato e dei concorrenti." },
            { termine: "L'idea:", testo: "un concept riconoscibile, che distingue un marchio dagli altri invece di somigliare a tutti." },
            { termine: "Il controllo:", testo: "verificare che i contenuti siano corretti, coerenti con il marchio e conformi alle regole, comprese quelle sull'AI." },
            { termine: "Il coordinamento:", testo: "far lavorare insieme canali, fornitori e produzione." },
            { termine: "La misura dei risultati", testo: "e la responsabilità di ciò che viene pubblicato." },
          ],
        },
        "In pratica, l'intelligenza artificiale aiuta a produrre: decidere che cosa produrre, per chi e con quale obiettivo resta il lavoro di chi conosce il mercato e risponde del risultato. Come cambia il lavoro di ogni tipo di agenzia è spiegato nelle pagine dedicate, dalla web agency all'agenzia SEO e SEM.",
      ],
    },
    {
      titolo: "Come cambiano tempi e costi",
      blocchi: [
        "L'intelligenza artificiale riduce i tempi di produzione, soprattutto per testi, varianti grafiche, adattamenti e montaggio. Non riduce allo stesso modo il lavoro di strategia, ideazione e revisione, che resta la parte più impegnativa di un progetto. Per questo un'agenzia che usa l'AI può costare meno nella parte di produzione, ma non necessariamente nel complesso.",
        "In un preventivo conviene chiedere:",
        {
          elenco: [
            { termine: "Se e per quali attività", testo: "l'agenzia usa strumenti di intelligenza artificiale." },
            { termine: "Chi rivede e approva", testo: "i contenuti generati prima della pubblicazione." },
            { termine: "A chi appartengono i diritti", testo: "su testi, immagini e video consegnati." },
            { termine: "Come vengono trattati i dati", testo: "aziendali e dei clienti inseriti negli strumenti." },
          ],
        },
      ],
    },
    {
      titolo: "Cosa dicono le regole",
      blocchi: [
        {
          elenco: [
            {
              termine: "Diritto d'autore.",
              testo:
                "La legge italiana sull'intelligenza artificiale (legge 132/2025, in vigore dal 10 ottobre 2025) tutela le opere create con l'aiuto dell'AI solo se sono frutto di un apporto creativo umano. Un logo o un testo generati interamente da uno strumento, senza un contributo umano, non sono protetti dal diritto d'autore.",
            },
            {
              termine: "Professionisti.",
              testo:
                "La stessa legge prevede che nelle professioni intellettuali l'AI sia solo uno strumento di supporto e che il cliente sia informato in modo chiaro sui sistemi utilizzati.",
            },
            {
              termine: "Contenuti da dichiarare.",
              testo:
                "Dal 2 agosto 2026 il regolamento europeo sull'intelligenza artificiale (AI Act, articolo 50) obbliga chi diffonde immagini, video o audio generati o manipolati che sembrano reali a dichiararlo. Per i testi pubblicati per informare il pubblico l'obbligo non si applica se c'è una revisione umana o una responsabilità editoriale.",
            },
            {
              termine: "Deepfake illeciti.",
              testo:
                "La legge 132/2025 ha introdotto il reato di diffusione illecita di contenuti falsificati con l'intelligenza artificiale, e l'uso del volto o della voce di una persona riconoscibile richiede di norma il suo consenso.",
            },
          ],
        },
        "Questa sintesi non sostituisce una consulenza legale: per un caso concreto conviene rivolgersi a un professionista.",
        {
          fonti: [
            { nome: "Legge 23 settembre 2025, n. 132", url: "https://www.normattiva.it/eli/stato/LEGGE/2025/09/23/132/CONSOLIDATED" },
            { nome: "Regolamento (UE) 2024/1689 (AI Act)", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1689" },
          ],
        },
      ],
    },
    {
      titolo: "Domande frequenti sull'intelligenza artificiale e le agenzie",
      blocchi: [
        {
          domande: [
            {
              domanda: "Posso fare a meno dell'agenzia usando ChatGPT o strumenti simili?",
              risposta:
                "Per contenuti semplici e frequenti, spesso sì. Per un progetto che deve far crescere un marchio o un fatturato servono strategia, idea e controllo: l'intelligenza artificiale aiuta a produrre, non a decidere che cosa produrre.",
            },
            {
              domanda: "Un'agenzia che usa l'intelligenza artificiale deve costare meno?",
              risposta:
                "Può costare meno nella parte di produzione. Strategia, ideazione e revisione restano lavoro umano: conviene chiedere preventivi che separino le diverse voci.",
            },
            {
              domanda: "I contenuti generati con l'intelligenza artificiale sono miei?",
              risposta:
                "Dipende dal contratto con l'agenzia e dal contributo umano nel lavoro. Va chiarito nel preventivo, soprattutto per marchi, loghi e campagne.",
            },
          ],
        },
      ],
    },
  ],
};
