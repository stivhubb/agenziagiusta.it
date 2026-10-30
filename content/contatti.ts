// Testi della pagina Contatti: un solo modulo, con lo switch tra azienda e agenzia.

export const contatti = {
  titolo: { testo: "Come possiamo", evidenza: "aiutarti?" },
  apertura:
    "Scrivici: dicci se sei un'azienda che cerca informazioni o un'agenzia che vuole lavorare con noi.",
  modulo: {
    azienda: {
      etichetta: "Sono un'azienda",
      titolo: "Scrivici",
      testo: "Per qualsiasi domanda sul servizio. Se cerchi un'agenzia, il modo più rapido è compilare il brief:",
      linkQuiz: "inizia da qui.",
      pulsante: "Invia il messaggio",
    },
    agenzia: {
      etichetta: "Sono un'agenzia",
      titolo: "Diventa agenzia partner",
      testo: "Raccontaci chi siete e che clienti seguite: ti ricontattiamo per spiegarti come funziona.",
      pulsante: "Invia la richiesta",
    },
  },
  inviato: {
    titolo: "Messaggio inviato.",
    testo: "Grazie: ti rispondiamo il prima possibile all'indirizzo email che ci hai lasciato.",
  },
};
