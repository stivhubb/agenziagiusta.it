"use server";

import { componiBrief, type Risposte } from "@/content/brief";
import { passi } from "@/content/quiz";
import { sito } from "@/content/sito";
import { briefHtml, briefPdf, briefTesto } from "@/lib/brief-email";
import { DESTINATARIO, html, inviaEmail } from "@/lib/email";

// Azioni eseguite sul server: invio del brief e dei messaggi del modulo Contatti.
// Non si salva niente in un database: ogni invio diventa un'email al titolare del sito.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = 4000;

function taglia(valore: unknown): string {
  return typeof valore === "string" ? valore.trim().slice(0, MAX) : "";
}

// Tiene solo i campi del quiz, con lunghezze limitate.
function ripulisci(grezze: Risposte): Risposte {
  const pulite: Risposte = {};
  for (const passo of passi) {
    for (const campo of passo.campi) {
      const v = grezze[campo.id];
      if (typeof v === "boolean") pulite[campo.id] = v;
      else if (Array.isArray(v)) pulite[campo.id] = v.slice(0, 30).map(taglia);
      else if (typeof v === "string") pulite[campo.id] = taglia(v);
    }
    // Testo della voce "Altro" (es. "settoreAltro").
    for (const campo of passo.campi) {
      const altro = grezze[`${campo.id}Altro`];
      if (typeof altro === "string") pulite[`${campo.id}Altro`] = taglia(altro);
    }
  }
  return pulite;
}

// ricevuto: il brief è comunque arrivato al titolare, quindi si mostra all'azienda.
export type EsitoBrief = { ok: true } | { ok: false; errore: string; ricevuto: boolean };

export async function inviaBrief(grezze: Risposte, data: string): Promise<EsitoBrief> {
  const r = ripulisci(grezze);
  const email = typeof r.email === "string" ? r.email : "";
  if (!EMAIL.test(email) || r.consensoAgenzia !== true || r.privacy !== true || !r.ragioneSociale) {
    return { ok: false, errore: "Mancano dati necessari per inviare il brief.", ricevuto: false };
  }

  const brief = componiBrief(r, taglia(data));
  const pdf = await briefPdf(brief);
  const nomeFile = `brief-${brief.ragioneSociale.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}.pdf`;
  const allegati = [{ filename: nomeFile, content: pdf }];

  const all = await inviaEmail({
    a: email,
    oggetto: "Il tuo brief di comunicazione",
    rispondiA: sito.emailContatto,
    allegati,
    testo: `Ciao ${brief.referente},\n\nin allegato trovi il brief preparato con AgenziaGiusta.it. Come da tua richiesta, lo inviamo a un'agenzia adatta al progetto, che ti contatterà.\n\nPer qualsiasi domanda rispondi a questa email.\n\nAgenziaGiusta.it\n\n---\n\n${briefTesto(brief)}`,
    html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1B1B1B">
<p>Ciao ${html(brief.referente)},</p>
<p>in allegato trovi il brief preparato con AgenziaGiusta.it. Come da tua richiesta, lo inviamo a un'agenzia adatta al progetto, che ti contatterà.</p>
<p>Per qualsiasi domanda rispondi a questa email.</p>
<p>AgenziaGiusta.it</p></div><hr style="border:0;border-top:1px solid #E8E4E1;margin:24px 0">${briefHtml(brief)}`,
  });

  const titolare = await inviaEmail({
    a: DESTINATARIO,
    oggetto: `Nuovo brief: ${brief.ragioneSociale}`,
    rispondiA: email,
    allegati,
    testo: `Nuovo brief dal sito.\n\nAzienda: ${brief.ragioneSociale}\nReferente: ${brief.referente}\nEmail: ${email}\nTelefono: ${taglia(r.telefono)}\nRichiesta di contatto da un'agenzia: sì\nInvio all'azienda: ${all ? "riuscito" : "NON riuscito"}\n\n${briefTesto(brief)}`,
    html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5">
<p><strong>Nuovo brief dal sito.</strong></p>
<p>Azienda: ${html(brief.ragioneSociale)}<br>Referente: ${html(brief.referente)}<br>Email: ${html(email)}<br>Telefono: ${html(taglia(r.telefono))}<br>Richiesta di contatto da un'agenzia: sì<br>Invio all'azienda: ${all ? "riuscito" : "<strong>NON riuscito</strong>"}</p></div>
<hr style="border:0;border-top:1px solid #E8E4E1;margin:24px 0">${briefHtml(brief)}`,
  });

  if (!all && !titolare) {
    return { ok: false, errore: "Invio non riuscito. Riprova tra qualche minuto.", ricevuto: false };
  }
  if (!all) {
    return {
      ok: false,
      errore: "Non siamo riusciti a inviarti il brief via email: controlla l'indirizzo. Il brief è comunque arrivato a noi e puoi salvarlo da questa pagina.",
      ricevuto: true,
    };
  }
  return { ok: true };
}

export type EsitoContatto = { stato: "vuoto" | "inviato" | "errore"; messaggio?: string };

const CAMPI_CONTATTO = {
  azienda: [
    ["nome", "Nome"],
    ["azienda", "Azienda"],
    ["email", "Email"],
    ["messaggio", "Messaggio"],
  ],
  agenzia: [
    ["nome", "Nome dell'agenzia"],
    ["email", "Email"],
    ["sito", "Sito web"],
    ["servizi", "Servizi offerti"],
    ["settori", "Settori"],
    ["budget", "Fascia di budget dei clienti"],
    ["zona", "Zona"],
    ["messaggio", "Messaggio"],
  ],
} as const;

export async function inviaContatto(_prima: EsitoContatto, dati: FormData): Promise<EsitoContatto> {
  // Campo nascosto: lo compilano solo i programmi automatici.
  if (taglia(dati.get("indirizzo"))) return { stato: "inviato" };

  const chi = dati.get("chi") === "agenzia" ? "agenzia" : "azienda";
  const valori = CAMPI_CONTATTO[chi].map(([id, etichetta]) => [etichetta, taglia(dati.get(id))] as const);
  const email = taglia(dati.get("email"));
  const nome = taglia(dati.get("nome"));
  if (!nome || !EMAIL.test(email)) {
    return { stato: "errore", messaggio: "Inserisci il nome e un indirizzo email valido." };
  }
  if (chi === "azienda" && !taglia(dati.get("messaggio"))) {
    return { stato: "errore", messaggio: "Scrivi il messaggio." };
  }

  const tipo = chi === "agenzia" ? "Candidatura agenzia" : "Messaggio da un'azienda";
  const ok = await inviaEmail({
    a: DESTINATARIO,
    oggetto: `${tipo}: ${nome}`,
    rispondiA: email,
    testo: `${tipo} dal sito.\n\n${valori.map(([e, v]) => `${e}: ${v || "-"}`).join("\n")}`,
    html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5"><p><strong>${tipo} dal sito.</strong></p>${valori
      .map(([e, v]) => `<p><strong>${html(e)}</strong><br>${html(v || "-").replace(/\n/g, "<br>")}</p>`)
      .join("")}</div>`,
  });
  return ok
    ? { stato: "inviato" }
    : { stato: "errore", messaggio: `Invio non riuscito. Riprova, oppure scrivi a ${sito.emailContatto}.` };
}
