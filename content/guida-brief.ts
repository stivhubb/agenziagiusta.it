import type { Pagina, Seo } from "./tipi";
import { percorsi } from "./sito";

// Guida "Cos'è un brief e come farlo": raccoglie tutte le ricerche sul brief
// (cos'è un brief, esempio, template, come fare, brief creativo/marketing/pubblicitario).
// Il template non si scarica: si compila online nel brief guidato.

export const guidaBrief: Pagina & { seo: Seo } = {
  titolo: { testo: "Cos'è un brief e come farlo,", evidenza: "con esempio e template." },
  seo: {
    title: "Cos'è un brief e come farlo: esempio e template",
    description:
      "Cos'è un brief di comunicazione, cosa deve contenere e come scriverlo, con un esempio completo e un template da compilare online.",
  },
  intro: [
    "Un brief è il documento con cui un'azienda spiega a un'agenzia il progetto che vuole affidarle: chi è, cosa vuole ottenere, a chi si rivolge, cosa chiede e con quale budget. È il punto di partenza di qualsiasi lavoro di comunicazione, marketing o pubblicità, dal logo alla campagna.",
    "Serve a due cose. All'agenzia, per capire se il progetto fa per lei e costruire una proposta sulle esigenze reali dell'azienda. All'azienda, per mettere in ordine le idee prima di parlare con qualcuno e ricevere proposte confrontabili, perché rispondono tutte alla stessa richiesta.",
    "Un buon brief non è lungo né tecnico: quasi sempre bastano due pagine, se contengono le informazioni giuste. In questa guida trovi cosa scrivere sezione per sezione, come farlo in cinque passi e un esempio completo. Il template si compila direttamente online: rispondi alle domande e ricevi il brief in PDF.",
  ],
  sezioni: [
    {
      titolo: "Cosa deve contenere un brief",
      blocchi: [
        "Un brief completo ha cinque parti. L'ordine conta poco; conta che nessuna manchi.",
        {
          elenco: [
            {
              termine: "Contesto.",
              testo:
                "Chi è l'azienda, cosa vende e in quale mercato, chi sono i concorrenti e come comunica oggi: canali, chi se ne occupa, tono di voce.",
            },
            {
              termine: "Obiettivi.",
              testo:
                "Cosa deve cambiare grazie al progetto. Obiettivi di marketing (vendite, nuovi clienti, nuovi mercati) e di comunicazione (notorietà, posizionamento, reputazione), con gli indicatori su cui misurarli.",
            },
            {
              termine: "Target.",
              testo:
                "A chi si rivolge il progetto, descritto in modo concreto: chi sono queste persone o aziende, cosa cercano, come scelgono.",
            },
            {
              termine: "Richiesta all'agenzia.",
              testo:
                "I servizi che servono, le priorità e i vincoli: linee guida del marchio, elementi obbligatori, norme di settore.",
            },
            {
              termine: "Aspetti pratici.",
              testo: "Budget, tempi, referente e contatti.",
            },
          ],
        },
        "Il budget è la voce che le aziende omettono più spesso. Senza, l'agenzia deve indovinare la dimensione del progetto e le proposte che arrivano non si possono confrontare: meglio indicare almeno una fascia.",
      ],
    },
    {
      titolo: "Come fare un brief in 5 passi",
      blocchi: [
        {
          elenco: [
            {
              termine: "1. Parti dall'obiettivo, non dal servizio.",
              testo:
                "\"Più richieste di preventivo dall'estero\" è un obiettivo; \"una campagna su LinkedIn\" è già una soluzione, e forse non la migliore.",
            },
            {
              termine: "2. Descrivi l'azienda come a un nuovo collega.",
              testo: "Cosa fa, per chi, cosa la distingue dai concorrenti.",
            },
            {
              termine: "3. Definisci il target con esempi reali.",
              testo:
                "\"Cantieri che costruiscono barche tra 30 e 50 piedi\" dice molto più di \"aziende del settore nautico\".",
            },
            {
              termine: "4. Indica budget e tempi.",
              testo: "Anche approssimativi: una fascia di budget e un periodo di partenza bastano.",
            },
            {
              termine: "5. Rileggi con gli occhi dell'agenzia.",
              testo: "Chi non conosce l'azienda capisce cosa le si chiede e perché?",
            },
          ],
        },
      ],
    },
    {
      titolo: "Esempio di brief",
      blocchi: [
        "Ecco in sintesi il brief di un'azienda inventata, Officine Marea: piccola impresa di Napoli che progetta e produce attrezzatura di coperta per barche a vela.",
        {
          elenco: [
            {
              termine: "Contesto:",
              testo:
                "vende in Italia e all'estero, si distingue per pezzi su misura consegnati in tempi brevi; oggi comunica con sito, social ed eventi di settore, seguiti da una risorsa interna e da un freelance.",
            },
            {
              termine: "Obiettivi:",
              testo:
                "acquisire nuovi clienti, entrare nei mercati esteri a partire dalla Francia e sviluppare l'e-commerce; farsi conoscere e posizionarsi come riferimento tecnico.",
            },
            {
              termine: "Target:",
              testo:
                "cantieri che costruiscono barche a vela tra 30 e 50 piedi e armatori esperti che sostituiscono l'attrezzatura da soli.",
            },
            {
              termine: "Richiesta all'agenzia:",
              testo:
                "digital marketing, sito ed e-commerce, brand identity, SEO e SEM, con un unico interlocutore; logo e colori aziendali non si toccano.",
            },
            {
              termine: "Aspetti pratici:",
              testo: "budget annuo per l'agenzia tra 20.000 e 50.000 €, agenzia anche fuori regione.",
            },
          ],
        },
        "Il brief completo, con il testo scritto per esteso, occupa due pagine.",
        { link: { testo: "Leggi l'esempio completo", href: "/brief/esempio/" } },
      ],
    },
    {
      titolo: "Template del brief: compilalo online",
      blocchi: [
        "Il template del brief di AgenziaGiusta.it non si scarica: si compila online. Ti guida sezione per sezione con le domande che un'agenzia ti farebbe al primo incontro, e alla fine ricevi via email il brief impaginato in PDF, pronto da stampare o inoltrare.",
        "Rispetto a un modello Word vuoto ha due vantaggi: non lasci sezioni scoperte, perché le domande essenziali sono obbligatorie, e il testo del brief viene scritto per te a partire dalle risposte.",
        { link: { testo: "Compila il brief", href: percorsi.quiz } },
      ],
    },
    {
      titolo: "Brief creativo, di marketing e pubblicitario: le differenze",
      blocchi: [
        {
          elenco: [
            {
              termine: "Brief di marketing:",
              testo:
                "riguarda gli obiettivi di business, come vendite, nuovi clienti e nuovi mercati. È la base da cui partono gli altri.",
            },
            {
              termine: "Brief di comunicazione:",
              testo:
                "dice come l'azienda vuole presentarsi: posizionamento, messaggi, tono, canali. È il più completo ed è quello che si consegna a un'agenzia di comunicazione.",
            },
            {
              termine: "Brief creativo:",
              testo:
                "di solito lo scrive l'agenzia per il proprio team creativo, a partire dal brief del cliente: messaggio chiave, idea, formati.",
            },
            {
              termine: "Brief pubblicitario:",
              testo: "riguarda una singola campagna: obiettivo, target, mezzi, budget e periodo.",
            },
          ],
        },
        "Il brief guidato di AgenziaGiusta.it produce un brief di comunicazione che contiene anche la parte di marketing.",
      ],
    },
    {
      titolo: "Domande frequenti sul brief",
      blocchi: [
        {
          domande: [
            {
              domanda: "Quanto deve essere lungo un brief?",
              risposta:
                "Una o due pagine bastano quasi sempre. Conta che ci siano tutte le informazioni: un brief lungo ma senza budget o target serve meno di uno breve e completo.",
            },
            {
              domanda: "Chi deve scrivere il brief?",
              risposta:
                "L'azienda, di solito il titolare o il responsabile marketing. L'agenzia può aiutare a completarlo, ma il punto di partenza deve venire da chi conosce il prodotto e i clienti.",
            },
            {
              domanda: "Si può fare un brief con ChatGPT?",
              risposta:
                "Sì, ma un assistente AI scrive a partire da quello che gli dai: se mancano budget, target o vincoli, il brief resta vago anche se è scritto bene. Le domande del brief guidato servono a non dimenticare niente, e il brief finito arriva a un'agenzia adatta al progetto.",
            },
          ],
        },
      ],
    },
  ],
};
