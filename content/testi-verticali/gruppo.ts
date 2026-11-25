import type { Attivita } from "../tipi";

// Un gruppo di attività: titolo e voci, ognuna scritta come ["Nome", "Spiegazione."].
// Terzo elemento facoltativo: il link alla pagina del servizio a cui l'attività appartiene
// (elenco delle attività di quella pagina), per le voci che compaiono in più tipologie.
export function gruppo(titolo: string, voci: ([string, string] | [string, string, string])[]): Attivita["gruppi"][number] {
  return { titolo, voci: voci.map(([nome, testo, href]) => ({ nome, testo, ...(href ? { href } : {}) })) };
}
