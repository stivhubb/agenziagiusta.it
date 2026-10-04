import type { Attivita } from "../tipi";

// Un gruppo di attività: titolo e voci, ognuna scritta come ["Nome", "Spiegazione."].
export function gruppo(titolo: string, voci: [string, string][]): Attivita["gruppi"][number] {
  return { titolo, voci: voci.map(([nome, testo]) => ({ nome, testo })) };
}
