// Il brief viene scritto da questo file, senza modelli AI: a ogni risposta del quiz
// corrisponde una frase, e le frasi vengono messe in fila secondo le regole qui sotto.
//
// - Le risposte a scelta diventano testo con le frasi dei dizionari in cima al file.
//   Per cambiare come viene raccontata una voce si modifica la sua frase.
// - Le risposte aperte non vengono riscritte: entrano nel brief con le parole dell'azienda,
//   dopo la correzione degli errori più comuni (content/correzioni.ts).
// - Le chiavi dei dizionari sono le voci del quiz (content/quiz.ts): se si rinomina una voce
//   nel quiz va rinominata anche qui, altrimenti nel brief compare la voce così com'è.

import { correggi } from "./correzioni";

export type Risposte = Record<string, string | string[] | boolean | undefined>;

export type BloccoBrief =
  | { tipo: "paragrafo"; testo: string }
  // Risposta aperta, riportata con le parole dell'azienda.
  | { tipo: "parole"; testo: string }
  // Elenco di voci, ognuna con la sua spiegazione.
  | { tipo: "voci"; voci: { nome: string; testo: string }[] };

export type BriefComposto = {
  ragioneSociale: string;
  referente: string;
  data: string;
  sezioni: { titolo: string; blocchi: BloccoBrief[] }[];
};

// ---------- Frasi ----------

const classi: Record<string, string> = {
  "Microimpresa (fino a 9 addetti)": "una microimpresa, con meno di dieci addetti",
  "Piccola (10-49)": "una piccola impresa, tra 10 e 49 addetti",
  "Media (50-249)": "una media impresa, tra 50 e 249 addetti",
  "Grande (250 e oltre)": "una grande impresa, con oltre 250 addetti",
};

const settori: Record<string, string> = {
  "Food & beverage": "nel settore food & beverage",
  "Moda e lusso": "nel settore della moda e del lusso",
  "Arredo e design": "nel settore dell'arredo e del design",
  "Turismo e hospitality": "nel settore del turismo e dell'hospitality",
  "Ho.Re.Ca.": "nel canale Horeca",
  "Salute e benessere": "nel settore della salute e del benessere",
  "Servizi professionali": "nei servizi professionali",
  "Tecnologia e software": "nel settore della tecnologia e del software",
  "Industria e manifattura": "nell'industria e nella manifattura",
  "Edilizia e real estate": "nel settore dell'edilizia e del real estate",
  "Retail e GDO": "nel retail e nella grande distribuzione",
  Formazione: "nel settore della formazione",
  "No profit": "nel mondo del no profit",
};

const modelli: Record<string, string> = {
  Consumer:
    "Si rivolge ai consumatori finali: vende alle persone, non ad altre aziende, e la decisione d'acquisto è di norma individuale e rapida.",
  Azienda:
    "Si rivolge ad altre aziende: i suoi clienti sono imprese e professionisti, con decisioni d'acquisto che coinvolgono più persone e richiedono tempi più lunghi.",
  Entrambi:
    "Si rivolge sia alle aziende sia ai consumatori finali: due pubblici con criteri e tempi d'acquisto diversi, che chiedono messaggi e canali distinti.",
};

const canali: Record<string, string> = {
  "Sito web": "il sito web",
  "E-commerce": "l'e-commerce",
  "Social media organico": "i social media in organico",
  "Advertising online (search, social, display)": "l'advertising online",
  "Advertising offline (stampa, tv, radio, affissioni)": "l'advertising sui mezzi tradizionali",
  "Email marketing e CRM": "l'email marketing e il CRM",
  "PR e ufficio stampa": "le PR e l'ufficio stampa",
  "Eventi e fiere": "gli eventi e le fiere",
  "Materiali below the line": "i materiali below the line",
};
const NESSUN_CANALE = "Nessuna attività strutturata";
const ADV_ONLINE = "Advertising online (search, social, display)";
const ADV_OFFLINE = "Advertising offline (stampa, tv, radio, affissioni)";

const gestori: Record<string, string> = {
  "Risorsa interna dedicata": "a una risorsa interna dedicata",
  "Team marketing interno": "a un team marketing interno",
  Freelance: "a uno o più freelance",
  Agenzia: "a un'agenzia",
};
const NESSUN_PRESIDIO = "Nessun presidio";

// Per ogni tono: come si nomina nella frase e cosa significa.
const toni: Record<string, [string, string]> = {
  "Istituzionale e formale": [
    "istituzionale e formale",
    "un registro sobrio e misurato, che mette al centro la serietà e la solidità dell'azienda",
  ],
  "Tecnico e specialistico": [
    "tecnico e specialistico",
    "un linguaggio preciso e competente, rivolto a un pubblico che conosce la materia",
  ],
  Autorevole: [
    "autorevole",
    "una voce sicura e competente, che si propone come punto di riferimento nel settore",
  ],
  "Rassicurante ed empatico": [
    "rassicurante ed empatico",
    "un linguaggio vicino alle persone, che ascolta, accompagna e trasmette fiducia",
  ],
  "Amichevole e informale": [
    "amichevole e informale",
    "un linguaggio colloquiale e alla mano, che accorcia la distanza con il pubblico",
  ],
  "Ironico e leggero": [
    "ironico e leggero",
    "un registro brillante, che usa l'ironia per farsi notare e ricordare",
  ],
  Ispirazionale: [
    "ispirazionale",
    "un racconto che punta su valori e aspirazioni più che sulle caratteristiche del prodotto",
  ],
  "Diretto ed essenziale": [
    "diretto ed essenziale",
    "frasi brevi e concrete, che vanno al punto senza giri di parole",
  ],
  "Premium ed esclusivo": [
    "premium ed esclusivo",
    "un registro curato e selettivo, che comunica qualità e distinzione",
  ],
};
const TONO_NON_DEFINITO = "Non definito";
const TONO_DA_DEFINIRE = "Da definire con l'agenzia";

const fasce: Record<string, string> = {
  "Meno di 20.000 €": "inferiore a 20.000 euro",
  "20.000-50.000 €": "compreso tra 20.000 e 50.000 euro",
  "50.000-100.000 €": "compreso tra 50.000 e 100.000 euro",
  "100.000-150.000 €": "compreso tra 100.000 e 150.000 euro",
  "Oltre 150.000 €": "superiore a 150.000 euro",
};

// Per ogni obiettivo: come si nomina nella frase e cosa significa.
const obiettivi: Record<string, [string, string]> = {
  "Lead generation": [
    "la lead generation",
    "aumentare il numero di contatti commerciali qualificati, cioè persone o aziende che manifestano un interesse concreto e che la rete vendita può ricontattare",
  ],
  "Incremento delle vendite": [
    "l'incremento delle vendite",
    "far crescere il fatturato sui prodotti e servizi già in portafoglio, con una comunicazione che contribuisca in modo diretto al risultato commerciale",
  ],
  "Acquisizione di nuovi clienti": [
    "l'acquisizione di nuovi clienti",
    "allargare la base clienti, raggiungendo persone o aziende che oggi non comprano",
  ],
  "Fidelizzazione e retention": [
    "la fidelizzazione dei clienti",
    "consolidare il rapporto con chi è già cliente, aumentando la frequenza d'acquisto e riducendo gli abbandoni",
  ],
  "Lancio di prodotto o servizio": [
    "il lancio di un prodotto o servizio",
    "far conoscere una novità e accompagnarla fino alle prime vendite",
  ],
  "Ingresso in nuovi mercati": [
    "l'ingresso in nuovi mercati",
    "entrare in aree geografiche o in settori in cui oggi l'azienda non è presente, o lo è in modo marginale",
  ],
  "Sviluppo del canale e-commerce": [
    "lo sviluppo del canale e-commerce",
    "far crescere le vendite online, dirette o attraverso i marketplace",
  ],
  "Brand awareness": [
    "la brand awareness",
    "aumentare la notorietà del marchio, cioè fare in modo che più persone del pubblico di riferimento lo conoscano e lo ricordino",
  ],
  "Posizionamento o riposizionamento": [
    "il posizionamento del marchio",
    "definire, o correggere, il modo in cui il marchio è percepito rispetto ai concorrenti",
  ],
  Rebranding: [
    "il rebranding",
    "rinnovare l'identità del marchio, nel nome, nell'immagine o in entrambi",
  ],
  Reputazione: [
    "la reputazione",
    "rafforzare la fiducia e la credibilità dell'azienda presso clienti, partner e opinione pubblica",
  ],
  "Engagement della community": [
    "l'engagement della community",
    "aumentare il coinvolgimento e la partecipazione delle persone che già seguono il marchio",
  ],
  "Employer branding": [
    "l'employer branding",
    "rendere l'azienda più attrattiva per chi cerca lavoro e per chi già ci lavora",
  ],
  "Comunicazione corporate": [
    "la comunicazione corporate",
    "raccontare l'azienda nel suo insieme, al di là dei singoli prodotti: valori, risultati, ruolo nel settore",
  ],
};

const servizi: Record<string, string> = {
  "Advertising e pianificazione media":
    "ideazione delle campagne pubblicitarie e scelta dei mezzi su cui pianificarle, online e offline.",
  "Strategia di marketing":
    "analisi del mercato, definizione del posizionamento e piano delle attività.",
  "Digital marketing e performance":
    "campagne online orientate a risultati misurabili: contatti, vendite, traffico.",
  "Sito web ed e-commerce":
    "progettazione, sviluppo o rifacimento del sito aziendale o del negozio online.",
  "Brand identity e design":
    "identità visiva del marchio e materiali coordinati.",
  "Social media e influencer marketing":
    "piano editoriale, gestione dei profili, campagne social e collaborazioni con i creator.",
  "PR e media relations": "rapporti con la stampa e con i media, comunicati ed eventi.",
  "SEO e SEM":
    "posizionamento sui motori di ricerca e campagne a pagamento sui risultati di ricerca.",
  "Produzione video e foto": "contenuti video e fotografici per campagne, sito e social.",
};
const SERVIZI_DA_DEFINIRE = "Da definire con l'agenzia";

const localizzazioni: Record<string, string> = {
  "Stessa provincia":
    "L'azienda preferisce un'agenzia della stessa provincia, per poter lavorare anche di persona.",
  "Stessa regione":
    "L'azienda preferisce un'agenzia della stessa regione, raggiungibile senza difficoltà per gli incontri di persona.",
  Indifferente:
    "La sede dell'agenzia è indifferente: l'azienda è disponibile a lavorare a distanza.",
};

const numeri = ["", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici"];
const ordinali = ["Il primo", "Il secondo", "Il terzo"];
const ordinaliFemminili = ["La prima", "La seconda", "La terza"];
const ALTRO = "Altro";

// ---------- Attrezzi ----------

function testo(valore: Risposte[string]): string {
  return typeof valore === "string" ? valore.trim() : "";
}

function scelte(valore: Risposte[string]): string[] {
  if (Array.isArray(valore)) return valore;
  return typeof valore === "string" && valore ? [valore] : [];
}

// "a, b e c"
function elenca(voci: string[]): string {
  if (voci.length <= 1) return voci.join("");
  return `${voci.slice(0, -1).join(", ")} e ${voci[voci.length - 1]}`;
}

// Mette in ordine una risposta aperta: vedi content/correzioni.ts.
const sistema = correggi;

const paragrafo = (testo: string): BloccoBrief => ({ tipo: "paragrafo", testo });
const parole = (testo: string): BloccoBrief => ({ tipo: "parole", testo: sistema(testo) });

// Voci scelte in un campo, con "Altro" sostituito da quello che l'azienda ha scritto.
function voci(risposte: Risposte, id: string): string[] {
  return scelte(risposte[id])
    .map((voce) => (voce === ALTRO ? testo(risposte[`${id}Altro`]) : voce))
    .filter(Boolean);
}

// ---------- Sezioni ----------

function contesto(r: Risposte, nome: string): BloccoBrief[] {
  const blocchi: BloccoBrief[] = [];

  // Profilo
  const settore = voci(r, "settore")[0] ?? "";
  const doveOpera = settori[settore] ?? `nel settore ${settore.toLowerCase()}`;
  const classe = classi[testo(r.classeDimensionale)] ?? "un'impresa";
  const mercati = scelte(r.mercato).map((m) => m.toLowerCase());
  const frasi = [
    `${nome} è ${classe}, attiva ${doveOpera}, con sede in provincia di ${testo(r.sede)}.`,
    modelli[testo(r.modelloBusiness)] ?? "",
    `Il suo mercato di riferimento è ${elenca(mercati)}.`,
  ];
  if (mercati.includes("internazionale")) {
    frasi.push(
      "La presenza sui mercati esteri richiede una comunicazione capace di adattarsi a lingue e contesti diversi.",
    );
  } else if (mercati.length === 1 && mercati[0] === "locale") {
    frasi.push(
      "In un ambito locale contano soprattutto la prossimità e la reputazione sul territorio.",
    );
  }
  blocchi.push(paragrafo(frasi.filter(Boolean).join(" ")));

  // Prodotto e posizionamento
  blocchi.push(
    paragrafo(
      testo(r.sitoWeb)
        ? `Così l'azienda descrive ciò che offre e ciò che la distingue dai concorrenti (sito di riferimento: ${testo(r.sitoWeb)}):`
        : "Così l'azienda descrive ciò che offre e ciò che la distingue dai concorrenti:",
    ),
    parole(testo(r.prodottoPosizionamento)),
  );

  // Concorrenti
  blocchi.push(
    paragrafo("Sul fronte competitivo, questi sono i concorrenti che l'azienda indica:"),
    parole(testo(r.concorrenti)),
  );

  // Comunicazione attuale
  const scelti = voci(r, "canali").filter((c) => c !== NESSUN_CANALE);
  const comunicazione: string[] = [];
  if (scelti.length === 0) {
    comunicazione.push(
      "Oggi l'azienda non svolge attività di comunicazione strutturate: il progetto parte quindi da zero, senza abitudini consolidate da rispettare ma anche senza dati storici su cui basarsi.",
    );
  } else {
    const nomi = scelti.map((c) => canali[c] ?? c.toLowerCase());
    comunicazione.push(
      scelti.length === 1
        ? `Oggi il solo canale presidiato è ${nomi[0]}.`
        : `Oggi la comunicazione passa da ${numeroDi(scelti.length)} canali: ${elenca(nomi)}.`,
    );
    const online = scelti.includes(ADV_ONLINE);
    const offline = scelti.includes(ADV_OFFLINE);
    comunicazione.push(
      online && offline
        ? "L'azienda investe già in pubblicità, sia online sia sui mezzi tradizionali."
        : online
          ? "È già attivo un investimento in advertising online, mentre non risultano campagne sui mezzi tradizionali."
          : offline
            ? "L'azienda investe in pubblicità sui mezzi tradizionali, mentre non risultano campagne online."
            : "Non risultano investimenti pubblicitari, né online né sui mezzi tradizionali: la visibilità dipende oggi dai canali proprietari e dalle relazioni dirette.",
    );
  }

  const chi = scelte(r.gestione).filter((g) => g !== NESSUN_PRESIDIO);
  if (chi.length === 0) {
    comunicazione.push(
      "Nessuno in azienda segue la comunicazione in modo continuativo: l'agenzia dovrà farsi carico anche del coordinamento.",
    );
  } else {
    comunicazione.push(
      `La gestione è affidata ${elenca(chi.map((g) => gestori[g] ?? `a ${g.toLowerCase()}`))}.`,
    );
    const interno = chi.includes("Risorsa interna dedicata") || chi.includes("Team marketing interno");
    if (chi.includes("Agenzia")) {
      comunicazione.push(
        "L'azienda lavora già con un'agenzia: andranno chiariti fin dall'inizio ruoli e confini della nuova collaborazione.",
      );
    } else if (interno) {
      comunicazione.push(
        "La nuova agenzia troverà quindi un interlocutore interno con cui coordinarsi.",
      );
    } else {
      comunicazione.push(
        "Il lavoro è oggi affidato all'esterno, senza una struttura interna dedicata.",
      );
    }
  }

  const attuali = toniAttuali(r).map(nomeDelTono);
  comunicazione.push(
    attuali.length === 0
      ? "Il tone of voice attuale non è definito: la comunicazione non segue oggi un registro riconoscibile."
      : attuali.length === 1
        ? `L'azienda descrive il tone of voice attuale come ${attuali[0]}.`
        : `L'azienda descrive il tone of voice attuale con queste definizioni: ${attuali.join(", ")}.`,
  );

  const investimento = fasce[testo(r.investimentoAnnuo)];
  comunicazione.push(
    investimento
      ? `L'investimento annuo in comunicazione dichiarato è ${investimento}.`
      : "L'investimento annuo attuale in comunicazione non è stato indicato.",
  );
  blocchi.push(paragrafo(comunicazione.join(" ")));

  return blocchi;
}

function numeroDi(n: number): string {
  return numeri[n] ?? String(n);
}

// "Sul piano del marketing gli obiettivi sono due. Il primo è ...: ... Il secondo è ..."
function raccontaObiettivi(piano: string, scelti: string[]): string {
  const frasi = scelti.map((scelto, i) => {
    const [nome, significato] = obiettivi[scelto] ?? [scelto.toLowerCase(), ""];
    const inizio = scelti.length === 1 ? "" : `${ordinali[i] ?? "Un altro"} è `;
    const frase = significato ? `${nome}: ${significato}.` : `${nome}.`;
    return inizio ? `${inizio}${frase}` : frase;
  });
  return scelti.length === 1
    ? `Sul piano ${piano} l'obiettivo è uno, ${frasi[0]}`
    : `Sul piano ${piano} gli obiettivi sono ${numeroDi(scelti.length)}. ${frasi.join(" ")}`;
}

function toniAttuali(r: Risposte): string[] {
  return voci(r, "toneAttuale").filter((tono) => tono !== TONO_NON_DEFINITO);
}

function nomeDelTono(tono: string): string {
  return toni[tono]?.[0] ?? tono.toLowerCase();
}

// Il tono desiderato, raccontato voce per voce e messo a confronto con quello attuale.
function raccontaTono(r: Risposte): string {
  const tutti = voci(r, "toneDesiderato");
  const desiderati = tutti.filter((tono) => tono !== TONO_DA_DEFINIRE);
  const attuali = toniAttuali(r);
  if (desiderati.length === 0) {
    return "Il tone of voice desiderato non è ancora definito: l'azienda si aspetta dall'agenzia una proposta sul registro da adottare.";
  }

  const frasi = desiderati.map((tono, i) => {
    const significato = toni[tono]?.[1];
    const inizio = desiderati.length === 1 ? "" : `${ordinaliFemminili[i] ?? "Un'altra"} è `;
    const frase = significato
      ? `un tono ${nomeDelTono(tono)}: ${significato}.`
      : `un tono ${nomeDelTono(tono)}.`;
    return `${inizio}${frase}`;
  });
  const racconto = [
    desiderati.length === 1
      ? `Per il tone of voice l'azienda indica una direzione, ${frasi[0]}`
      : `Per il tone of voice l'azienda indica ${numeroDi(desiderati.length)} direzioni. ${frasi.join(" ")}`,
  ];

  const comuni = desiderati.filter((tono) => attuali.includes(tono));
  if (attuali.length === 0) {
    racconto.push(
      "Oggi un tone of voice definito non c'è: si tratta quindi di costruirlo, non di correggerlo.",
    );
  } else if (comuni.length === desiderati.length && comuni.length === attuali.length) {
    racconto.push(
      "È lo stesso registro che l'azienda usa oggi: la richiesta è di mantenerlo e di renderlo coerente su tutti i canali.",
    );
  } else if (comuni.length > 0) {
    racconto.push(
      "Rispetto al registro attuale si tratta di un'evoluzione: una parte del tono resta, una parte cambia.",
    );
  } else {
    racconto.push(
      `Rispetto al registro attuale (${attuali.map(nomeDelTono).join(", ")}) si tratta di un cambiamento netto, che l'agenzia dovrà accompagnare.`,
    );
  }
  if (tutti.length > desiderati.length) {
    racconto.push("Su questo punto l'azienda è aperta anche a una proposta dell'agenzia.");
  }
  return racconto.join(" ");
}

function obiettiviDelBrief(r: Risposte): BloccoBrief[] {
  const blocchi = [
    paragrafo(raccontaObiettivi("del marketing", scelte(r.obiettiviMarketing))),
    paragrafo(raccontaObiettivi("della comunicazione", scelte(r.obiettiviComunicazione))),
    paragrafo(raccontaTono(r)),
  ];
  if (testo(r.kpi)) {
    blocchi.push(
      paragrafo("Per misurare i risultati l'azienda propone questi indicatori:"),
      parole(testo(r.kpi)),
    );
  } else {
    blocchi.push(
      paragrafo(
        "L'azienda non ha indicato indicatori di risultato: i KPI andranno definiti insieme all'agenzia, a partire dagli obiettivi descritti sopra.",
      ),
    );
  }
  return blocchi;
}

function target(r: Risposte): BloccoBrief[] {
  return [
    paragrafo("Così l'azienda descrive il pubblico a cui si rivolge:"),
    parole(testo(r.target)),
  ];
}

function richiesta(r: Risposte): BloccoBrief[] {
  const tutte = voci(r, "areeServizio");
  const aree = tutte.filter((area) => area !== SERVIZI_DA_DEFINIRE);
  const daDefinire = tutte.length > aree.length;
  const blocchi: BloccoBrief[] = [];
  if (aree.length === 0) {
    blocchi.push(
      paragrafo(
        "L'azienda non ha ancora individuato i servizi di cui ha bisogno: si aspetta dall'agenzia una proposta su quali attivare, a partire dagli obiettivi descritti sopra.",
      ),
    );
  } else {
    blocchi.push(
      paragrafo(
        aree.length === 1
          ? "L'azienda cerca un'agenzia per una sola area di servizio:"
          : `L'azienda cerca un'agenzia che copra ${numeroDi(aree.length)} aree di servizio:`,
      ),
      {
        tipo: "voci",
        voci: aree.map((area) => ({
          nome: area,
          testo: sistema(
            servizi[area] ?? "area indicata dall'azienda oltre a quelle previste dal quiz",
          ),
        })),
      },
    );
    if (daDefinire) {
      blocchi.push(
        paragrafo(
          "Oltre a queste, l'azienda si aspetta dall'agenzia una proposta su eventuali altri servizi da attivare.",
        ),
      );
    }
  }
  blocchi.push(
    paragrafo("Tra le priorità e le considerazioni che l'azienda ritiene più importanti:"),
    parole(testo(r.considerazioni)),
  );
  if (testo(r.vincoli)) {
    blocchi.push(
      paragrafo("L'agenzia dovrà tenere conto delle seguenti guidelines ed elementi mandatory:"),
      parole(testo(r.vincoli)),
    );
  } else {
    blocchi.push(paragrafo("L'azienda non ha indicato guidelines o elementi mandatory."));
  }
  return blocchi;
}

function aspettiPratici(r: Risposte): BloccoBrief[] {
  const budget = fasce[testo(r.budgetAgenzia)];
  const funzione = voci(r, "funzione")[0] ?? "";
  return [
    paragrafo(
      [
        budget
          ? `Il budget annuo previsto per l'agenzia è ${budget}.`
          : "Il budget annuo per l'agenzia non è ancora definito: l'azienda si aspetta un'indicazione anche su questo.",
        localizzazioni[testo(r.localizzazione)] ?? "",
      ]
        .filter(Boolean)
        .join(" "),
    ),
    paragrafo(
      `Il referente per il progetto è ${testo(r.referente)} (${funzione.toLowerCase()}), raggiungibile all'indirizzo ${testo(r.email)} e al numero ${testo(r.telefono)}.`,
    ),
  ];
}

// ---------- Composizione ----------

export function componiBrief(r: Risposte, data: string): BriefComposto {
  const nome = testo(r.ragioneSociale);
  return {
    ragioneSociale: nome,
    referente: testo(r.referente),
    data,
    sezioni: [
      { titolo: "Contesto", blocchi: contesto(r, nome) },
      { titolo: "Obiettivi", blocchi: obiettiviDelBrief(r) },
      { titolo: "Target", blocchi: target(r) },
      { titolo: "Richiesta all'agenzia", blocchi: richiesta(r) },
      { titolo: "Aspetti pratici", blocchi: aspettiPratici(r) },
    ],
  };
}
