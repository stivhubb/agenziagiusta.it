// Avvisa Bing (IndexNow) delle pagine del sito dopo ogni build di produzione su Vercel.
// Prende gli indirizzi dalla sitemap appena generata. Non blocca mai la pubblicazione:
// in caso di errore scrive solo un messaggio nel log della build.
// La chiave è verificata da Bing con il file public/<chiave>.txt.
import { readFile } from "node:fs/promises";

const CHIAVE = "76ac47d5028cc1ae11cf2c9c39375c0b";
const HOST = "agenziagiusta.it";

if (process.env.VERCEL_ENV !== "production") {
  console.log("IndexNow: non è una build di produzione, nessun avviso.");
  process.exit(0);
}

try {
  const xml = await readFile(".next/server/app/sitemap.xml.body", "utf8");
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const risposta = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: CHIAVE, keyLocation: `https://${HOST}/${CHIAVE}.txt`, urlList }),
  });
  console.log(`IndexNow: ${urlList.length} indirizzi inviati, risposta ${risposta.status}.`);
} catch (errore) {
  console.log("IndexNow: avviso non inviato.", errore);
}
