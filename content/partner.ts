import type { Agenzia } from "./tipi";

// Agenzie partner: collaborano con AgenziaGiusta.it e possono ricevere le richieste inviate dal sito.
// Compaiono per prime, con ★, nell'elenco di tutte le pagine tipo + città, tranne i tipi in "escluse".
export const partner: (Agenzia & { escluse: string[] })[] = [
  { nome: "Smallfish", url: "https://www.smallfish.it/", partner: true, escluse: ["seo-sem"] },
];

export function partnerDi(verticale: string): Agenzia[] {
  return partner.filter((p) => !p.escluse.includes(verticale)).map(({ nome, url }) => ({ nome, url, partner: true }));
}
