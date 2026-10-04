// Correzione delle risposte aperte prima che entrino nel brief.
// Sono regole, non un correttore completo: sistemano gli errori più comuni dell'italiano scritto
// in fretta (accenti, apostrofi, spazi, maiuscole, alcune parole sbagliate di frequente).
// Un refuso qualunque ("comunicaizone") non viene riconosciuto.

// Parole scritte senza accento, o con l'apostrofo al posto dell'accento.
const accenti: Record<string, string> = {
  piu: "più",
  gia: "già",
  cosi: "così",
  cioe: "cioè",
  pero: "però",
  puo: "può",
  citta: "città",
  qualita: "qualità",
  attivita: "attività",
  societa: "società",
  pubblicita: "pubblicità",
  novita: "novità",
  possibilita: "possibilità",
  visibilita: "visibilità",
  notorieta: "notorietà",
  identita: "identità",
  priorita: "priorità",
  opportunita: "opportunità",
  realta: "realtà",
  difficolta: "difficoltà",
  perche: "perché",
  poiche: "poiché",
  finche: "finché",
  affinche: "affinché",
  nonche: "nonché",
  benche: "benché",
  anziche: "anziché",
};

// Parole con l'accento sbagliato o scritte male di frequente.
const parole: Record<string, string> = {
  perchè: "perché",
  poichè: "poiché",
  finchè: "finché",
  affinchè: "affinché",
  nonchè: "nonché",
  benchè: "benché",
  anzichè: "anziché",
  piú: "più",
  cioé: "cioè",
  nè: "né",
  sè: "sé",
  pò: "po'",
  é: "è",
  sopratutto: "soprattutto",
  propio: "proprio",
  efficente: "efficiente",
  efficenti: "efficienti",
  efficenza: "efficienza",
  sufficente: "sufficiente",
  sufficenti: "sufficienti",
  conoscienza: "conoscenza",
  coscenza: "coscienza",
  eccezzionale: "eccezionale",
  eccezzione: "eccezione",
  accellerare: "accelerare",
  proffessionale: "professionale",
  proffessionali: "professionali",
  proffessionista: "professionista",
  obbiettivo: "obiettivo",
  obbiettivi: "obiettivi",
  daccordo: "d'accordo",
};

// Espressioni di più parole.
const espressioni: [RegExp, string][] = [
  [/qual'[èe]'?/giu, "qual è"],
  [/un'altro/giu, "un altro"],
  [/(?<!\p{L})un altra(?!\p{L})/giu, "un'altra"],
  [/(?<!\p{L})un po(?![\p{L}'])/giu, "un po'"],
];

// Parole che finiscono davvero con vocale e apostrofo: non vanno toccate.
const conApostrofo = new Set(["po", "mo", "di", "fa", "da", "sta", "va", "to", "be"]);

// Abbreviazioni dopo le quali non comincia una nuova frase.
const abbreviazioni = new Set(["ecc", "es", "etc", "sig", "dott", "ing", "art", "pag", "tel", "n"]);

// Dopo un punto senza spazio comincia una nuova frase, a meno che non sia un indirizzo web.
const domini = new Set(["it", "com", "org", "net", "eu", "info", "biz", "io", "co", "uk", "de", "fr", "es", "ch", "shop", "store", "online", "example"]);

// Nomi di luogo senza ambiguità, da scrivere sempre con la maiuscola.
const luoghi = [
  "Italia", "Europa", "Milano", "Roma", "Napoli", "Torino", "Firenze", "Bologna", "Genova",
  "Palermo", "Venezia", "Verona", "Padova", "Bergamo", "Brescia", "Catania", "Salerno",
  "Lombardia", "Lazio", "Campania", "Veneto", "Piemonte", "Toscana", "Sicilia", "Sardegna",
  "Puglia", "Liguria", "Calabria", "Umbria", "Abruzzo", "Molise", "Basilicata",
];
const maiuscoleDeiLuoghi = new Map(luoghi.map((luogo) => [luogo.toLowerCase(), luogo]));

const vocaliAccentate: Record<string, string> = { a: "à", e: "è", i: "ì", o: "ò", u: "ù" };

// Sostituisce una parola mantenendo la maiuscola iniziale.
function conMaiuscola(originale: string, corretta: string): string {
  return originale[0] === originale[0].toUpperCase() && originale[0] !== originale[0].toLowerCase()
    ? corretta[0].toUpperCase() + corretta.slice(1)
    : corretta;
}

function inizialiDiFrase(testo: string): string {
  const frasi = testo.replace(/([.!?])\s+(\p{Ll})/gu, (tutto, punto, lettera, posizione) => {
    const prima = testo.slice(0, posizione).match(/(\p{L}+)$/u)?.[1].toLowerCase() ?? "";
    if (punto === "." && (prima.length <= 1 || abbreviazioni.has(prima))) return tutto;
    return `${punto} ${lettera.toUpperCase()}`;
  });
  return frasi.replace(/^\p{Ll}/u, (lettera) => lettera.toUpperCase());
}

export function correggi(scritto: string): string {
  let testo = scritto.replace(/\s+/g, " ").trim();
  if (!testo) return "";

  // Tutto maiuscolo: si riporta in minuscolo.
  const lettere = testo.match(/\p{L}/gu) ?? [];
  const maiuscole = lettere.filter((l) => l !== l.toLowerCase()).length;
  if (lettere.length >= 15 && maiuscole / lettere.length > 0.8) testo = testo.toLowerCase();

  // Spazi e punteggiatura.
  testo = testo
    .replace(/\s+([,;:.!?])/g, "$1")
    .replace(/([,;:])(?=\p{L})/gu, "$1 ")
    .replace(/(\p{Ll})([!?])(?=\p{L})/gu, "$1$2 ")
    .replace(/(\S*\p{Ll})\.(\p{L}+)/gu, (tutto, prima: string, dopo: string) => {
      const indirizzo = /[@/]|^www$/i.test(prima) || domini.has(dopo.toLowerCase());
      return indirizzo ? tutto : `${prima}. ${dopo}`;
    });

  // "e'" al posto di "è".
  testo = testo
    .replace(/(?<!\p{L})E'(?!\p{L})/gu, "È")
    .replace(/(?<!\p{L})e'(?!\p{L})/gu, "è");

  for (const [regola, corretta] of espressioni) {
    testo = testo.replace(regola, (trovata) => conMaiuscola(trovata, corretta));
  }

  // Apostrofo usato come accento: "qualita'" diventa "qualità".
  testo = testo.replace(/(\p{L}+)'(?!\p{L})/gu, (tutto, parola: string, posizione: number) => {
    const minuscola = parola.toLowerCase();
    const vocale = minuscola.slice(-1);
    // Parola tra virgolette semplici ('moda'): l'apostrofo è una virgoletta.
    const traVirgolette =
      testo[posizione - 1] === "'" && (posizione < 2 || /\s/.test(testo[posizione - 2]));
    if (!vocaliAccentate[vocale] || conApostrofo.has(minuscola) || traVirgolette) return tutto;
    if (accenti[minuscola]) return conMaiuscola(parola, accenti[minuscola]);
    const accento = minuscola.endsWith("che") ? "é" : vocaliAccentate[vocale];
    return parola.slice(0, -1) + accento;
  });

  // Parole senza accento o scritte male.
  testo = testo.replace(/\p{L}+/gu, (parola, posizione: number) => {
    const minuscola = parola.toLowerCase();
    // "po'" è corretto: non va riletto come "pò" o "po".
    if (testo[posizione + parola.length] === "'" && conApostrofo.has(minuscola)) return parola;
    const corretta =
      accenti[minuscola] ?? parole[minuscola] ?? maiuscoleDeiLuoghi.get(minuscola);
    if (corretta && maiuscoleDeiLuoghi.has(minuscola)) return corretta;
    return corretta ? conMaiuscola(parola, corretta) : parola;
  });

  testo = inizialiDiFrase(testo);
  return /[.!?…]$/.test(testo) ? testo : `${testo}.`;
}
