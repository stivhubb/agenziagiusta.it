import type { Sezione } from "./tipi";
import { percorsi } from "./sito";

// Testi aggiunti a novembre 2026 nelle pagine di tipologia, dopo "Cosa fa":
// - nomenclatura: uguale in tutte le pagine, con i dati della rilevazione di ottobre 2026
//   (929 agenzie in dieci città; servizi contati senza la voce generica "comunicazione");
// - ai: come l'intelligenza artificiale cambia il lavoro di quel tipo di agenzia.
// Il testo sull'AI va ricontrollato almeno ogni sei mesi: norme e strumenti cambiano in fretta.

export const nomenclatura =
  "I nomi con cui si presentano le agenzie, come agenzia di comunicazione, web agency, digital agency o agenzia di marketing, raramente corrispondono a un solo servizio. Tra le circa 930 agenzie analizzate da AgenziaGiusta.it in dieci città, ciascuna offre in media circa sei servizi diversi, e solo circa 3 su 100 si dedicano a un'unica attività: più di 8 web agency su 10 seguono anche campagne online e social, e quasi tutte le agenzie SEO realizzano anche siti. Per questo conviene scegliere un'agenzia guardando i servizi effettivamente offerti e i lavori già realizzati, più che il nome con cui si presenta.";

const linkGuida = {
  link: { testo: "Agenzia o intelligenza artificiale: cosa conviene a un'azienda", href: percorsi.guidaAi },
};

function sezione(nome: string, testo: string[]): Sezione {
  return { titolo: `Come l'intelligenza artificiale cambia il lavoro di ${nome}`, blocchi: [...testo, linkGuida] };
}

const DEEPFAKE =
  "dal 2 agosto 2026 immagini, video e audio generati o manipolati con l'AI che sembrano reali devono essere dichiarati come tali";

export const ai: Record<string, Sezione> = {
  comunicazione: sezione("un'agenzia di comunicazione", [
    "L'intelligenza artificiale ha ridotto in modo drastico i tempi di produzione dei contenuti: testi, immagini e adattamenti per canali e pubblici diversi si preparano oggi in una frazione del tempo richiesto fino a pochi anni fa. Le agenzie di comunicazione la usano per le prime stesure, per declinare un messaggio su più formati e per analizzare rapidamente rassegne stampa, commenti e conversazioni online. A questo si aggiunge un cambiamento meno visibile: motori di ricerca e assistenti AI riassumono ciò che trovano online su un'azienda, e la coerenza delle informazioni pubblicate diventa a tutti gli effetti parte del lavoro sulla reputazione.",
    "Ciò che l'AI non fa è decidere come un'azienda debba presentarsi. Il posizionamento, il tono, la scelta di cosa dire e di cosa non dire dipendono dalla conoscenza dell'azienda, del suo mercato e del suo pubblico, e qualcuno deve rispondere di ciò che viene pubblicato. Per questo il valore di un'agenzia si sposta dalla produzione alla strategia e al controllo.",
  ]),
  pubblicita: sezione("un'agenzia pubblicitaria", [
    "Nella pubblicità l'intelligenza artificiale ha cambiato soprattutto il passaggio dall'idea all'esecuzione. Visual, testi e varianti di una campagna si possono produrre e mettere alla prova molto più in fretta, adattandoli a formati, mezzi e mercati diversi; storyboard e prime versioni di uno spot si realizzano spesso senza riprese, con generatori di immagini, video e voci. Le piattaforme digitali, inoltre, creano e combinano automaticamente le varianti di un annuncio per mostrare a ciascun pubblico quella più efficace.",
    `L'AI moltiplica le esecuzioni, ma non produce l'idea che rende riconoscibile una campagna, né valuta il rischio di un messaggio per un marchio. Ci sono poi aspetti legali da considerare: la tutela del diritto d'autore spetta solo alle opere con un apporto creativo umano, e ${DEEPFAKE}. Conviene chiedere all'agenzia quali materiali saranno generati e a chi apparterranno i diritti.`,
  ]),
  marketing: sezione("un'agenzia di marketing", [
    "Per un'agenzia di marketing l'intelligenza artificiale è prima di tutto uno strumento di analisi. Dati di vendita, comportamenti dei clienti e andamenti di mercato si elaborano più in fretta e con maggiore dettaglio, individuando gruppi di clienti, stagionalità e segnali che prima richiedevano settimane di lavoro. Molte di queste funzioni sono ormai integrate nei CRM e nelle piattaforme di marketing automation, e consentono di aggiornare le strategie con maggiore frequenza sulla base dei risultati.",
    "I limiti sono quelli dei dati da cui l'AI parte. Uno strumento trova correlazioni in ciò che riceve, ma non sa cosa manca, non conosce il mercato al di là di quello che vede e non stabilisce quali obiettivi siano prioritari per l'azienda. L'interpretazione dei risultati, le scelte di posizionamento e la responsabilità delle decisioni restano il cuore del lavoro di un'agenzia.",
  ]),
  media: sezione("un centro media", [
    "Nell'acquisto degli spazi pubblicitari l'intelligenza artificiale ha già cambiato il modo di lavorare. Sulle piattaforme digitali offerte, pubblici e posizionamenti sono sempre più decisi dagli algoritmi, sulla base dell'obiettivo impostato: è il caso di campagne automatiche come Performance Max di Google e Advantage+ di Meta, e dell'acquisto programmatico su siti e app. Accanto a questi sistemi si diffondono modelli statistici che stimano il contributo di ciascun mezzo alle vendite.",
    "Proprio per questo il ruolo del centro media cambia ma non si riduce. Ogni piattaforma ottimizza al proprio interno e verso l'obiettivo che riceve; nessuna decide come dividere il budget tra mezzi diversi, verifica che i dati di conversione siano corretti o valuta l'effetto sul marchio nel tempo. Pianificazione, misura indipendente dei risultati e controllo diventano la parte più importante del lavoro.",
  ]),
  "web-agency": sezione("una web agency", [
    "Nella realizzazione dei siti l'intelligenza artificiale accelera soprattutto le parti ripetitive: assistenti di programmazione scrivono e controllano il codice, generatori di layout e di testi producono le prime versioni delle pagine, e assistenti virtuali possono essere integrati nel sito per rispondere ai clienti. Cambia anche ciò che si chiede a un sito: oltre che alle persone, deve risultare chiaro ai motori di ricerca e agli assistenti AI che ne riassumono i contenuti.",
    "Restano invece in capo all'agenzia la progettazione e la responsabilità tecnica. Un sito deve rispondere a obiettivi precisi, essere sicuro, accessibile e veloce, ed essere mantenuto nel tempo: sono aspetti che gli strumenti aiutano a eseguire ma non a garantire. Per un'azienda il risparmio di tempo nello sviluppo ha senso solo se non va a scapito di queste verifiche. Molte web agency seguono anche la promozione online, dalle campagne sui motori di ricerca ai social: come l'AI cambia questa parte del lavoro è spiegato nella pagina sulle agenzie di web marketing.",
  ]),
  "web-marketing": sezione("un'agenzia di web marketing", [
    "Il web marketing è uno dei campi in cui l'automazione è più avanzata. Le campagne su Google e Meta sono sempre più gestite da sistemi che scelgono pubblici, offerte e varianti degli annunci, mentre email e messaggi si personalizzano per gruppi di clienti molto più ristretti grazie alle funzioni di AI delle piattaforme di marketing automation. Testi e immagini per le inserzioni si producono e si testano in molte versioni.",
    "Questi sistemi però ottimizzano verso l'obiettivo e i dati che ricevono. Se l'obiettivo è sbagliato, se il tracciamento delle conversioni non è affidabile o se la piattaforma non conosce il margine e il valore di un cliente, l'ottimizzazione porta nella direzione sbagliata, e con grande efficienza. Il lavoro dell'agenzia si concentra quindi sull'impostazione delle campagne, sulla qualità dei dati e sul controllo dei risultati.",
  ]),
  branding: sezione("un'agenzia di grafica e branding", [
    "Nel branding l'intelligenza artificiale ha reso molto più rapida la fase esplorativa. Moodboard, direzioni visive e prove di applicazione di un marchio su prodotti, insegne e materiali si producono in poche ore, e i programmi di grafica integrano funzioni che automatizzano scontorni, varianti ed estensioni delle immagini.",
    "Un'identità di marca, però, non è una raccolta di immagini ben fatte: deve essere coerente con la strategia dell'azienda, riconoscibile nel tempo e utilizzabile su tutti i supporti. C'è anche un tema di tutela. Secondo la legge italiana sull'intelligenza artificiale (legge 132/2025), il diritto d'autore protegge le opere create con l'aiuto dell'AI solo se sono frutto di un apporto creativo umano: un logo generato interamente da uno strumento non è quindi tutelato, e la verifica che un marchio sia registrabile resta un lavoro distinto.",
  ]),
  creativita: sezione("un'agenzia creativa", [
    "Per un'agenzia creativa l'intelligenza artificiale accorcia la distanza tra un'idea e la sua visualizzazione. Un concept può diventare in poco tempo uno storyboard, un'immagine o un prototipo da presentare al cliente e da mettere alla prova, e titoli, testi e formati si esplorano in molte varianti prima di scegliere la direzione.",
    "Gli strumenti generativi, tuttavia, lavorano ricombinando ciò che esiste già. Possono proporre decine di varianti, ma non sanno quale sia quella giusta per un marchio e per il suo pubblico, né riconoscere quando un'idea è davvero nuova. La selezione, la direzione creativa e la responsabilità sul messaggio restano la competenza specifica di un'agenzia creativa, e oggi contano più di prima.",
  ]),
  "social-media": sezione("un'agenzia di social media marketing", [
    "Sui social l'intelligenza artificiale interviene su due fronti. Da una parte gli algoritmi delle piattaforme decidono sempre di più chi vede un contenuto, e il volume di contenuti necessario per restare visibili è cresciuto. Dall'altra, generatori di testi, immagini e brevi video e le funzioni creative integrate nelle piattaforme permettono di produrne di più e più in fretta, mentre gli strumenti di ascolto della rete analizzano in tempo reale commenti e conversazioni.",
    `Ciò che resta umano è il rapporto con la community: rispondere, gestire una critica o una crisi, capire che cosa sia opportuno pubblicare per un marchio in un determinato momento. Anche sui social valgono le nuove regole europee: ${DEEPFAKE}.`,
  ]),
  "pr-ufficio-stampa": sezione("un'agenzia di pubbliche relazioni", [
    "Nelle pubbliche relazioni l'intelligenza artificiale ha reso più rapidi il monitoraggio dei media, con l'analisi automatica del tono di articoli e post, e la preparazione di bozze di comunicati e materiali per la stampa. Ma il cambiamento più rilevante riguarda il peso delle fonti: gli assistenti AI e le risposte generate dei motori di ricerca citano spesso articoli e testate giornalistiche, e la presenza su media autorevoli contribuisce oggi anche a come un'azienda viene descritta da questi strumenti.",
    "Restano fuori dalla portata dell'AI le relazioni con i giornalisti, la capacità di riconoscere una notizia e la gestione delle situazioni delicate. Va considerato anche il rischio di errori: un testo generato può contenere imprecisioni nei fatti, e nelle relazioni con i media la verifica resta indispensabile.",
  ]),
  "seo-sem": sezione("un'agenzia SEO e SEM", [
    "L'intelligenza artificiale sta cambiando prima di tutto il modo in cui le persone cercano. Dal marzo 2025 Google mostra anche in Italia le AI Overviews, risposte generate in cima ai risultati, e da ottobre 2025 la modalità AI, che risponde in forma di conversazione; una parte delle ricerche si sposta poi su assistenti come ChatGPT, Gemini o Copilot, con domande complete al posto di poche parole chiave. Per un'agenzia SEO l'analisi delle parole chiave si allarga così allo studio delle domande e dei prompt che il pubblico rivolge agli assistenti, e all'obiettivo di comparire nei risultati si aggiunge quello di essere citati come fonte nelle risposte generate. Contenuti chiari e verificabili, dati propri, pagine leggibili e menzioni su siti autorevoli pesano più di prima, e i motori iniziano a fornire i primi dati su questa visibilità: Bing Webmaster Tools, per esempio, sta sperimentando un rapporto sulle citazioni dei siti nelle risposte di Copilot.",
    "Cambiano anche gli strumenti di lavoro. L'AI accelera molte attività ripetitive: raggruppare migliaia di parole chiave per intento, preparare schemi di contenuto, individuare errori tecnici, proporre collegamenti interni e generare i dati strutturati. Il tempo risparmiato nell'esecuzione si sposta su strategia e controllo, anche perché Google valuta la qualità dei contenuti indipendentemente da come sono prodotti, ma considera spam i contenuti generati in massa senza valore per chi legge. Nella SEA, cioè negli annunci a pagamento, le piattaforme affidano all'AI offerte, pubblici e varianti degli annunci: all'agenzia resta il compito di impostare la strategia, fornire dati di conversione affidabili e verificare i risultati.",
  ]),
  "societa-produzione-video-foto": sezione("una società di produzione video e foto", [
    "Nella produzione audiovisiva l'intelligenza artificiale permette di creare scene, voci e immagini anche senza riprese, e riduce in modo significativo i tempi di montaggio, sottotitolazione, doppiaggio e ritocco. Alcune lavorazioni costano meno di un tempo, e cresce di conseguenza il peso delle fasi che decidono la qualità di un video: sceneggiatura, regia e direzione creativa.",
    `L'AI non decide che cosa raccontare né come, e non sostituisce le riprese quando un progetto ha bisogno di autenticità: persone, luoghi e prodotti reali. Ci sono anche questioni di diritti da chiarire in partenza: ${DEEPFAKE}, e l'uso del volto o della voce di una persona riconoscibile richiede di norma il suo consenso. In un preventivo conviene chiedere quali parti del lavoro saranno generate e a chi apparterranno i diritti sul risultato.`,
  ]),
};
