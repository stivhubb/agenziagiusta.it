import { percorsi, sito } from "./sito";
import type { Sezione } from "./tipi";

// Informativa privacy (art. 13 del Regolamento UE 2016/679).
// Funzionamento del sito: le richieste arrivano via email (Resend) alla casella del titolare (Gmail);
// nessun database. Se si aggiunge un archivio o uno strumento di misurazione, il testo va aggiornato.
// Da far rivedere a un consulente.

export const privacy: { titolo: string; aggiornamento: string; sezioni: Sezione[] } = {
  titolo: "Informativa privacy",
  aggiornamento: "Ultimo aggiornamento: 29 ottobre 2026",
  sezioni: [
    {
      titolo: "Titolare del trattamento",
      blocchi: [
        `Il titolare del trattamento dei dati raccolti da ${sito.nome} è ${sito.titolare}. Per qualsiasi richiesta sui tuoi dati scrivi a ${sito.emailPrivacy}.`,
      ],
    },
    {
      titolo: "Quali dati raccogliamo",
      blocchi: [
        {
          elenco: [
            {
              termine: "Risposte al brief guidato.",
              testo:
                "Informazioni sull'azienda e sul progetto: settore, dimensione, sede, prodotti, concorrenti, comunicazione attuale, obiettivi, servizi cercati, fascia di budget, considerazioni. Nei campi liberi ti chiediamo di non inserire dati personali di altre persone.",
            },
            {
              termine: "Dati di contatto del referente.",
              testo: "Nome e cognome, ruolo in azienda, ragione sociale, email e telefono.",
            },
            {
              termine: "Messaggi dal modulo Contatti.",
              testo: "Nome, azienda (se la indichi), email e testo del messaggio.",
            },
            {
              termine: "Candidature delle agenzie.",
              testo:
                "Nome dell'agenzia, email, sito, servizi, settori, fascia di budget dei clienti, zona e messaggio, inviati dal modulo Contatti scegliendo \"Sono un'agenzia\".",
            },
            {
              termine: "Dati di navigazione.",
              testo:
                "Indirizzo IP, data e ora, pagina richiesta e tipo di browser, registrati dai server del fornitore di hosting per far funzionare il sito e proteggerlo.",
            },
          ],
        },
      ],
    },
    {
      titolo: "Perché li trattiamo e su quale base",
      blocchi: [
        {
          elenco: [
            {
              termine: "Comporre il brief e inviartelo via email.",
              testo:
                "È il servizio che chiedi compilando il brief guidato (art. 6, par. 1, lett. b del Regolamento).",
            },
            {
              termine: "Inviare il brief e i tuoi contatti a un'agenzia, perché possa contattarti.",
              testo:
                "È il servizio che chiedi compilando il brief guidato: metterti in contatto con un'agenzia adatta al progetto (art. 6, par. 1, lett. b).",
            },
            {
              termine: "Rispondere ai messaggi del modulo Contatti.",
              testo: "Per dare seguito alla tua richiesta (art. 6, par. 1, lett. b).",
            },
            {
              termine: "Valutare le candidature delle agenzie.",
              testo:
                "Per avviare una possibile collaborazione richiesta dall'agenzia (art. 6, par. 1, lett. b).",
            },
            {
              termine: "Far funzionare il sito e proteggerlo da abusi.",
              testo: "Legittimo interesse del titolare (art. 6, par. 1, lett. f).",
            },
            {
              termine: "Rispettare obblighi di legge e difendere i propri diritti.",
              testo: "Obbligo di legge e legittimo interesse (art. 6, par. 1, lett. c e f).",
            },
          ],
        },
        "Non usiamo i tuoi dati per inviarti pubblicità e non li vendiamo.",
      ],
    },
    {
      titolo: "Invio del brief a un'agenzia",
      blocchi: [
        "Su tua richiesta selezioniamo una sola agenzia adatta al progetto e le inviamo il brief e i tuoi contatti. L'invio è fatto da una persona, non in automatico. I tuoi dati non vanno ad altre agenzie.",
        "L'agenzia che riceve i dati è un'agenzia partner di AgenziaGiusta.it: le agenzie partner sono segnate con ★ negli elenchi del sito. Da quel momento l'agenzia tratta i tuoi dati come titolare autonomo, per contattarti e valutare il progetto, secondo la propria informativa.",
      ],
    },
    {
      titolo: "Chi altro può trattare i dati",
      blocchi: [
        "Fornitori che ci aiutano a far funzionare il sito e che trattano i dati per nostro conto, come responsabili del trattamento:",
        {
          elenco: [
            { termine: "Vercel Inc.", testo: "hosting del sito e misurazione delle visite in forma aggregata e anonima (Vercel Web Analytics, senza cookie)." },
            { termine: "Resend Inc.", testo: "invio delle email con il brief e con i messaggi dei moduli." },
            { termine: "Google Ireland Ltd.", testo: "casella email (Gmail) in cui il titolare riceve e conserva le richieste." },
          ],
        },
        "Il sito non usa un database: brief, contatti e messaggi arrivano via email al titolare e sono conservati nella sua casella. Vercel, Resend e Google possono trattare i dati anche negli Stati Uniti: il trasferimento avviene sulla base del Data Privacy Framework UE-USA o delle clausole contrattuali tipo approvate dalla Commissione europea.",
        "I dati possono essere comunicati alle autorità, quando la legge lo richiede.",
      ],
    },
    {
      titolo: "Per quanto tempo li conserviamo",
      blocchi: [
        {
          elenco: [
            {
              termine: "Brief e contatti:",
              testo: "24 mesi dall'invio del brief, oppure fino a una tua richiesta di cancellazione. Alla scadenza le email vengono cancellate.",
            },
            { termine: "Messaggi dal modulo Contatti:", testo: "24 mesi dall'ultima risposta." },
            {
              termine: "Candidature delle agenzie:",
              testo: "24 mesi dall'invio, oppure per la durata della collaborazione.",
            },
            {
              termine: "Dati di navigazione:",
              testo: "per il tempo previsto dal fornitore di hosting, non oltre 30 giorni.",
            },
          ],
        },
        "Restano esclusi i dati che dobbiamo conservare più a lungo per legge. L'agenzia che riceve il brief li conserva secondo la propria informativa.",
      ],
    },
    {
      titolo: "Dati obbligatori",
      blocchi: [
        "I campi obbligatori del brief guidato e dei moduli servono a fornire il servizio: senza, non è possibile generare il brief o rispondere alla richiesta. I campi facoltativi puoi lasciarli vuoti.",
      ],
    },
    {
      titolo: "Composizione automatica del brief",
      blocchi: [
        "Il brief è scritto in automatico, con regole fisse, a partire dalle tue risposte. Non comporta decisioni automatizzate che producono effetti giuridici o ti riguardano in modo analogo (art. 22 del Regolamento).",
      ],
    },
    {
      titolo: "I tuoi diritti",
      blocchi: [
        `Puoi chiedere in ogni momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento, riceverli in un formato leggibile (portabilità) e opporti al trattamento basato sul legittimo interesse. Se non vuoi più essere contattato, scrivici: se il brief non è ancora stato inviato non lo inviamo, se è già stato inviato lo comunichiamo all'agenzia. Scrivi a ${sito.emailPrivacy}: rispondiamo entro un mese.`,
        "Se ritieni che il trattamento non rispetti la legge puoi presentare reclamo al Garante per la protezione dei dati personali.",
        { link: { testo: "Sito del Garante privacy", href: "https://www.garanteprivacy.it/" } },
      ],
    },
    {
      titolo: "Minori",
      blocchi: [
        "Il servizio è rivolto a imprese e professionisti e non è destinato ai minori di 18 anni.",
      ],
    },
    {
      titolo: "Cookie",
      blocchi: [
        "Il sito non usa cookie di profilazione né strumenti di statistica. Tutti i dettagli sono nella cookie policy.",
        { link: { testo: "Cookie policy", href: percorsi.cookie } },
      ],
    },
    {
      titolo: "Modifiche a questa informativa",
      blocchi: [
        "Se cambia il modo in cui trattiamo i dati, aggiorniamo questa pagina e la data in cima.",
      ],
    },
  ],
};
