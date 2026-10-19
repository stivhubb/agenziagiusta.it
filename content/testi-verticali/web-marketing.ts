import type { Testi } from "../tipi";
import { gruppo } from "./gruppo";

export const webMarketing: Testi = {
  intro: [
    "Un'agenzia di web marketing, detta anche agenzia di digital marketing o digital agency, porta sui canali online di un'azienda un pubblico qualificato e lo trasforma in contatti e vendite: campagne su Google e sui social, SEO, email marketing e analisi dei dati.",
    "Il sito è il punto d'arrivo delle campagne, ma realizzarlo è il mestiere di una web agency. Molte agenzie digitali fanno entrambe le cose; quando l'obiettivo è aumentare traffico, contatti o vendite online, il fornitore da cercare è un'agenzia di web marketing.",
  ],
  sezioni: [
    {
      titolo: "Cosa fa un'agenzia di digital marketing",
      blocchi: [
        "Il lavoro parte dalla strategia digitale: obiettivi misurabili, pubblico, canali e budget. L'agenzia sceglie la combinazione di canali più adatta: campagne a pagamento sui motori di ricerca (SEM) e sui social, posizionamento organico (SEO), display e remarketing, email marketing, marketplace.",
        "Poi gestisce le campagne: crea gli annunci, imposta il pubblico e le offerte, controlla spesa e risultati e sposta il budget verso ciò che rende di più. Lo stesso metodo vale per l'email marketing e la marketing automation, cioè le comunicazioni che partono in automatico in base al comportamento dell'utente.",
        "Ogni attività è misurata con strumenti di web analytics: visite per canale di provenienza, tasso di conversione, cioè la quota di visitatori che compie l'azione desiderata, e costo per contatto o per vendita. Per questo il tracciamento delle conversioni va configurato prima di avviare le campagne. Il lavoro procede per cicli: pianificazione, attivazione, analisi dei dati e ottimizzazione.",
        "Al progetto lavorano il digital strategist, che imposta il piano; il performance marketing specialist, che gestisce le campagne; lo specialista SEO; l'email marketing specialist; il web analyst.",
      ],
    },
  ],
  mercato: {
    testo: [
      "Secondo l'Osservatorio Internet Media del Politecnico di Milano, nel 2025 la pubblicità online in Italia vale 6,2 miliardi di euro (+11%), il 53% degli investimenti pubblicitari, e nel 2026 dovrebbe arrivare a 7 miliardi (+12%). L'83% della raccolta online va ai grandi operatori internazionali.",
      "La domanda viene anche dal commercio online: secondo Netcomm e l'Osservatorio eCommerce B2c del Politecnico di Milano, nel 2026 gli acquisti online degli italiani superano i 66,6 miliardi di euro (+6%). Secondo l'Istat, nel 2025 il 59% delle imprese con almeno 10 addetti usa i social media, ma solo il 14,7% vende online.",
    ],
    fonti: [
      { nome: "Osservatorio Internet Media del Politecnico di Milano, giugno 2026", url: "https://www.osservatori.net/comunicato/internet-media/internet-advertising-italia-in-crescita/" },
      { nome: "Netcomm e Osservatorio eCommerce B2c del Politecnico di Milano, maggio 2026", url: "https://www.consorzionetcomm.it/lecommerce-b2c-in-italia-supera-i-666-miliardi-di-e-nel-2026-6-con-35-milioni-di-consumatori-digitali/" },
      { nome: "Istat, Imprese e Ict, dicembre 2025", url: "https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/" },
    ],
  },
  costi: {
    testo: [
      "Le attività di web marketing sono remunerate con un canone mensile. Per la gestione delle campagne pubblicitarie online di una piccola o media impresa il compenso si colloca in genere tra 500 e 2.500 euro al mese, budget pubblicitario escluso.",
      "Il budget pubblicitario si paga a parte alle piattaforme, come Google e Meta. Il compenso dipende dal numero di canali e di campagne, dalla produzione di annunci e contenuti e dalla frequenza dei report; alcune agenzie applicano una percentuale sul budget gestito o formule miste.",
    ],
    nota: "Fasce elaborate da AgenziaGiusta.it, ottobre 2026: sono solo indicative e possono variare a seconda delle specifiche del servizio richiesto e dell'agenzia coinvolta.",
  },
  domande: [
    {
      domanda: "Che differenza c'è tra web agency e agenzia di web marketing?",
      risposta: "La web agency progetta e realizza siti, e-commerce e applicazioni web. L'agenzia di web marketing porta visitatori su quei canali e li trasforma in clienti, con campagne, SEO ed email. Molte strutture fanno entrambe le cose: conviene verificare l'esperienza sulla parte che serve di più.",
    },
    {
      domanda: "Digital agency, agenzia di digital marketing e agenzia di web marketing sono la stessa cosa?",
      risposta: "Nell'uso comune sì: sono nomi diversi per agenzie che lavorano sui canali digitali. Il nome conta meno dei servizi effettivamente offerti: campagne a pagamento, SEO, social, email marketing, analisi dei dati.",
    },
    {
      domanda: "Come si misura il rendimento delle campagne online?",
      risposta: "Con il costo per contatto o per vendita e con il ritorno sulla spesa pubblicitaria (ROAS), cioè il fatturato generato per ogni euro investito. Gli indicatori vanno concordati all'inizio, e l'agenzia dovrebbe dare all'azienda l'accesso diretto agli account pubblicitari e agli strumenti di analisi.",
    },
  ],
  attivita: {
    titolo: "Attività e lavorazioni di un'agenzia di web marketing",
    gruppi: [
      gruppo("Strategia digitale", [
        ["Analisi della presenza online", "Sito, canali, campagne e risultati attuali."],
        ["Piano di digital marketing", "Obiettivi, canali, budget e indicatori."],
        ["Analisi dei concorrenti online", "Ricerche, annunci e contenuti dei competitor."],
      ]),
      gruppo("Acquisizione di traffico", [
        ["SEO", "Ottimizzazione per il posizionamento organico sui motori di ricerca."],
        ["Search advertising", "Annunci a pagamento nei risultati di ricerca."],
        ["Social advertising", "Campagne a pagamento sulle piattaforme social."],
        ["Display e remarketing", "Annunci rivolti a chi ha già visitato il sito."],
        ["Marketplace", "Gestione della presenza e delle campagne sui marketplace."],
      ]),
      gruppo("Conversione e fidelizzazione", [
        ["Landing page", "Pagine dedicate a una campagna o a un'offerta."],
        ["Ottimizzazione del tasso di conversione (CRO)", "Test e interventi per aumentare contatti e vendite."],
        ["Email marketing", "Newsletter e campagne rivolte a clienti e contatti."],
        ["Marketing automation", "Comunicazioni automatiche attivate dal comportamento dell'utente."],
        ["Lead management", "Gestione dei contatti acquisiti e del loro avanzamento commerciale."],
      ]),
      gruppo("Misurazione", [
        ["Web analytics", "Configurazione degli strumenti di analisi e del tracciamento delle conversioni."],
        ["Dashboard e report", "Lettura periodica dei risultati."],
        ["Ottimizzazione delle campagne", "Correzione di pubblico, annunci e budget in base ai dati."],
      ]),
    ],
  },
};
