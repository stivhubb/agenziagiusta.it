// Invio delle email del sito con Resend (https://resend.com), tramite la sua API.
// La chiave sta nella variabile d'ambiente RESEND_API_KEY su Vercel, mai nel codice.

export const MITTENTE = "AgenziaGiusta.it <brief@agenziagiusta.it>";

type Allegato = { filename: string; content: Uint8Array };

export async function inviaEmail(email: {
  a: string;
  oggetto: string;
  html: string;
  testo: string;
  rispondiA?: string;
  allegati?: Allegato[];
}): Promise<boolean> {
  const chiave = process.env.RESEND_API_KEY;
  if (!chiave) {
    console.error("RESEND_API_KEY mancante: email non inviata.");
    return false;
  }
  const risposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${chiave}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: MITTENTE,
      to: [email.a],
      subject: email.oggetto,
      html: email.html,
      text: email.testo,
      reply_to: email.rispondiA,
      attachments: email.allegati?.map((a) => ({
        filename: a.filename,
        content: Buffer.from(a.content).toString("base64"),
      })),
    }),
  });
  if (!risposta.ok) {
    console.error("Invio email non riuscito:", risposta.status, await risposta.text());
    return false;
  }
  return true;
}

// Testo sicuro dentro l'HTML delle email.
export function html(testo: string): string {
  return testo
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
