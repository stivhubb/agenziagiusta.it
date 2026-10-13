import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import type { BloccoBrief, BriefComposto } from "@/content/brief";
import { html } from "./email";

// Il brief nelle due forme che servono alle email: HTML nel corpo e PDF in allegato.
// Il PDF usa i caratteri standard (Helvetica): i caratteri che non supportano vengono
// sostituiti o tolti.

const MAGENTA = rgb(0.76, 0.09, 0.36);
const TESTO = rgb(0.11, 0.11, 0.11);
const GRIGIO = rgb(0.33, 0.32, 0.31);

function pulito(testo: string, font: PDFFont): string {
  const sostituito = testo
    .replace(/[‘’]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/\s+/g, " ")
    .trim();
  let fuori = "";
  for (const c of sostituito) {
    try {
      font.encodeText(c);
      fuori += c;
    } catch {
      // carattere non disponibile nel font standard
    }
  }
  return fuori;
}

function righe(testo: string, font: PDFFont, corpo: number, larghezza: number): string[] {
  const parole = testo.split(" ");
  const risultato: string[] = [];
  let riga = "";
  for (const parola of parole) {
    const prova = riga ? `${riga} ${parola}` : parola;
    if (font.widthOfTextAtSize(prova, corpo) <= larghezza) {
      riga = prova;
    } else {
      if (riga) risultato.push(riga);
      riga = parola;
    }
  }
  if (riga) risultato.push(riga);
  return risultato;
}

export async function briefPdf(brief: BriefComposto): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const normale = await doc.embedFont(StandardFonts.Helvetica);
  const grassetto = await doc.embedFont(StandardFonts.HelveticaBold);
  const corsivo = await doc.embedFont(StandardFonts.HelveticaOblique);
  doc.setTitle(`Brief di comunicazione - ${brief.ragioneSociale}`);
  doc.setProducer("AgenziaGiusta.it");

  const L = 595.28;
  const H = 841.89;
  const margine = 56;
  const larghezza = L - margine * 2;
  let pagina: PDFPage = doc.addPage([L, H]);
  let y = H - margine;

  function spazio(altezza: number) {
    if (y - altezza < margine) {
      pagina = doc.addPage([L, H]);
      y = H - margine;
    }
  }

  function scrivi(
    testo: string,
    font: PDFFont,
    corpo: number,
    colore = TESTO,
    rientro = 0,
    dopo = 6,
  ) {
    const linee = righe(pulito(testo, font), font, corpo, larghezza - rientro);
    for (const linea of linee) {
      spazio(corpo * 1.45);
      y -= corpo * 1.45;
      pagina.drawText(linea, { x: margine + rientro, y, size: corpo, font, color: colore });
    }
    y -= dopo;
  }

  scrivi("BRIEF DI COMUNICAZIONE · AgenziaGiusta.it", grassetto, 9, MAGENTA, 0, 10);
  scrivi(brief.ragioneSociale, grassetto, 22, TESTO, 0, 4);
  scrivi(`${brief.referente} · ${brief.data}`, normale, 10, GRIGIO, 0, 18);

  brief.sezioni.forEach((sezione, i) => {
    spazio(40);
    scrivi(`${i + 1}. ${sezione.titolo}`, grassetto, 14, MAGENTA, 0, 8);
    for (const blocco of sezione.blocchi) scriviBlocco(blocco);
    y -= 8;
  });

  function scriviBlocco(blocco: BloccoBrief) {
    if (blocco.tipo === "paragrafo") scrivi(blocco.testo, normale, 10.5);
    else if (blocco.tipo === "parole") scrivi(`"${blocco.testo}"`, corsivo, 10.5, GRIGIO, 14);
    else
      for (const voce of blocco.voci) {
        scrivi(voce.nome, grassetto, 10.5, TESTO, 0, 1);
        scrivi(voce.testo, normale, 10.5, TESTO, 0, 6);
      }
  }

  y -= 10;
  scrivi("Preparato con AgenziaGiusta.it", normale, 8.5, GRIGIO);
  return doc.save();
}

function bloccoHtml(blocco: BloccoBrief): string {
  if (blocco.tipo === "paragrafo") return `<p>${html(blocco.testo)}</p>`;
  if (blocco.tipo === "parole")
    return `<blockquote style="margin:0 0 12px;padding-left:12px;border-left:3px solid #C2185B;color:#55514E"><p>${html(blocco.testo)}</p></blockquote>`;
  return blocco.voci
    .map((v) => `<p><strong>${html(v.nome)}</strong><br>${html(v.testo)}</p>`)
    .join("");
}

export function briefHtml(brief: BriefComposto): string {
  const sezioni = brief.sezioni
    .map(
      (s, i) =>
        `<h2 style="color:#C2185B;font-size:17px;margin:24px 0 8px">${i + 1}. ${html(s.titolo)}</h2>${s.blocchi.map(bloccoHtml).join("")}`,
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1B1B1B;max-width:640px">
<p style="color:#C2185B;font-size:12px;font-weight:bold;letter-spacing:.05em">BRIEF DI COMUNICAZIONE</p>
<h1 style="font-size:24px;margin:0 0 4px">${html(brief.ragioneSociale)}</h1>
<p style="color:#55514E;margin:0 0 16px">${html(brief.referente)} · ${html(brief.data)}</p>
${sezioni}
</div>`;
}

export function briefTesto(brief: BriefComposto): string {
  const sezioni = brief.sezioni.map((s, i) => {
    const blocchi = s.blocchi.map((b) =>
      b.tipo === "voci"
        ? b.voci.map((v) => `${v.nome}: ${v.testo}`).join("\n")
        : b.tipo === "parole"
          ? `"${b.testo}"`
          : b.testo,
    );
    return `${i + 1}. ${s.titolo.toUpperCase()}\n\n${blocchi.join("\n\n")}`;
  });
  return `BRIEF DI COMUNICAZIONE\n${brief.ragioneSociale}\n${brief.referente} - ${brief.data}\n\n${sezioni.join("\n\n")}`;
}
