import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const prUfficioStampa: Testi = {
  intro: [
    "Un'agenzia di PR e ufficio stampa gestisce le relazioni tra un'azienda e i suoi pubblici di riferimento: giornalisti, media, istituzioni, comunità locali, opinione pubblica.",
    "Non opera attraverso l'acquisto di spazi pubblicitari: la visibilità deriva dall'interesse giornalistico delle notizie e dalla credibilità delle fonti che le riportano (earned media). L'obiettivo principale è la reputazione dell'azienda.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia PR",
      blocchi: [
        "L'attività centrale è l'ufficio stampa, cioè la gestione dei rapporti con i media. L'agenzia individua le notizie di potenziale interesse giornalistico, redige i comunicati stampa, li invia a una selezione mirata di giornalisti e testate e ne segue l'esito. Organizza inoltre conferenze stampa, interviste e incontri, e prepara i portavoce dell'azienda al rapporto con i giornalisti (media training).",
        "Le relazioni pubbliche comprendono un ambito più ampio: i rapporti con le istituzioni (public affairs), con le comunità e con gli altri portatori di interesse; la comunicazione corporate, che riguarda l'azienda nel suo insieme; gli eventi; le digital PR, rivolte a testate online, blog e creator. Una competenza specifica è la comunicazione di crisi: la preparazione e la gestione delle situazioni che possono danneggiare la reputazione.",
        "Il lavoro è di norma continuativo. Si parte da un'analisi della reputazione e della copertura mediatica esistente, da cui derivano la strategia e un piano di attività con i messaggi chiave. L'agenzia sviluppa il piano nel corso dell'anno e ne documenta i risultati attraverso la rassegna stampa, cioè la raccolta delle uscite ottenute, e un'analisi della loro qualità.",
        "Le figure coinvolte sono il PR manager, che definisce la strategia; l'addetto stampa, che cura i rapporti con i giornalisti; il content writer, che redige i testi; l'event manager; lo specialista di digital PR.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Nelle stime di UNA sul mercato italiano della comunicazione, che nel 2026 vale 17,8 miliardi di euro (+4,4%), crescono attività che rientrano anche nel lavoro delle agenzie PR: gli eventi (+14,9%) e le collaborazioni con gli influencer (+12%).",
      "Le collaborazioni con gli influencer sono oggi regolate: secondo i dati diffusi da UPA e UNA a marzo 2026, gli iscritti all'elenco tenuto dall'Autorità per le garanzie nelle comunicazioni (AGCOM) sono più di 5.200.",
    ],
    fonti: [
      { nome: "UNA, Media Hub: stime sul mercato della comunicazione, giugno 2026", url: "https://www.primaonline.it/wp-content/uploads/2026/06/Una-chart.pdf" },
      { nome: "UPA e UNA, stima sull'influencer marketing, marzo 2026", url: "https://www.upa.it/static/upload/cs-/cs-im26.pdf" },
    ],
  },
  costi: {
    testo: [
      "L'ufficio stampa è remunerato di norma con un canone mensile, perché i risultati dipendono dalla continuità dei rapporti con le redazioni. Lanci di prodotto, eventi e gestione di una crisi possono essere affidati a progetto.",
      "Il compenso dipende dal numero di notizie e di iniziative previste, dall'ampiezza dei media da seguire (locali, nazionali, di settore) e dall'organizzazione di eventi. Non è legato al numero di articoli usciti, perché la pubblicazione è una decisione delle redazioni.",
    ],
  },
  domande: [
    {
      domanda: "Un'agenzia PR può garantire la pubblicazione di un articolo?",
      risposta: "No. La scelta di pubblicare una notizia spetta alla redazione, e l'agenzia può solo aumentarne le probabilità proponendo contenuti di interesse giornalistico ai giornalisti adatti. Gli spazi con pubblicazione garantita sono pubblicità o contenuti sponsorizzati, e come tali devono essere segnalati al lettore.",
    },
    {
      domanda: "Che differenza c'è tra ufficio stampa e digital PR?",
      risposta: "L'ufficio stampa gestisce i rapporti con i giornalisti e le testate. Le digital PR estendono lo stesso lavoro ai canali online: testate digitali, blog, creator e community. Oltre alla visibilità, hanno spesso l'obiettivo di ottenere citazioni e collegamenti verso il sito dell'azienda.",
    },
    {
      domanda: "Come si misurano i risultati delle relazioni pubbliche?",
      risposta: "Con la rassegna stampa, che raccoglie le uscite ottenute, e con la loro analisi: numero e rilevanza delle testate, tono degli articoli, presenza dei messaggi chiave, quota di visibilità rispetto ai concorrenti. Per le attività online si aggiungono le visite al sito e i collegamenti ottenuti.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia PR",
    gruppi: [
      gruppo("Strategia", [
        ["Analisi della reputazione", "Come l'azienda è percepita e raccontata dai media."],
        ["Strategia di PR", "Obiettivi, pubblici e messaggi chiave."],
        ["Mappatura dei media", "Individuazione di testate e giornalisti rilevanti per il settore."],
        ["Piano di attività", "Calendario di notizie, iniziative e occasioni di visibilità."],
      ]),
      gruppo("Ufficio stampa", [
        ["Comunicati stampa", "Redazione e invio delle notizie ai media."],
        ["Cartella stampa", "Il materiale informativo di base sull'azienda."],
        ["Relazioni con i giornalisti", "Contatti diretti, proposte e risposte alle richieste."],
        ["Interviste", "Organizzazione e preparazione degli incontri con la stampa."],
        ["Conferenze stampa", "Presentazione ai media delle notizie più rilevanti."],
        ["Articoli a firma", "Interventi e contributi dei vertici aziendali sulle testate."],
        ["Media training", "Preparazione dei portavoce al rapporto con i giornalisti."],
      ]),
      gruppo("Relazioni pubbliche", [
        ["Comunicazione corporate", "Racconto dell'azienda, dei suoi risultati e dei suoi valori."],
        ["Relazioni istituzionali", "Rapporti con enti, associazioni e istituzioni."],
        ["Comunicazione di sostenibilità", "Bilanci e iniziative in ambito ambientale e sociale."],
        ["Comunicazione interna", "Informazione e coinvolgimento dei dipendenti."],
        ["Posizionamento dei vertici", "Visibilità pubblica di imprenditori e manager."],
      ]),
      gruppo("Digital PR", [
        ["Testate online e blog", "Relazioni con le redazioni digitali."],
        ["Collaborazioni con creator", "Coinvolgimento di profili seguiti dal pubblico di riferimento."],
        ["Link building editoriale", "Citazioni e collegamenti da siti autorevoli."],
      ]),
      gruppo("Eventi", [
        ["Eventi stampa", "Presentazioni, anteprime e visite aziendali per i giornalisti."],
        ["Eventi aziendali", "Convegni, inaugurazioni e ricorrenze."],
        ["Premi e riconoscimenti", "Candidature a premi di settore."],
      ]),
      gruppo("Comunicazione di crisi", [
        ["Piano di crisi", "Procedure e messaggi predisposti per le situazioni critiche."],
        ["Gestione della crisi", "Supporto operativo e rapporti con i media durante l'emergenza."],
      ]),
      gruppo("Misurazione", [
        ["Rassegna stampa", "Raccolta delle uscite ottenute."],
        ["Analisi della copertura", "Valutazione qualitativa e quantitativa della visibilità."],
      ]),
    ],
  },
};
