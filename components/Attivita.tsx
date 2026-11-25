import Link from "next/link";
import type { Attivita as DatiAttivita } from "@/content/tipi";

// Attività e lavorazioni di un tipo di agenzia, divise per gruppi. L'id "attivita" è la
// destinazione dei link dalle voci delle altre tipologie.
export function Attivita({ attivita }: { attivita: DatiAttivita }) {
  return (
    <section id="attivita" className="contenitore attivita">
      <h2 className="titolo-blocco">{attivita.titolo}</h2>
      <div className="attivita__gruppi">
        {attivita.gruppi.map((gruppo) => (
          <div key={gruppo.titolo} className="attivita__gruppo">
            <h3 className="titolo-scheda">{gruppo.titolo}</h3>
            <ul className="attivita__voci">
              {gruppo.voci.map((voce) => (
                <li key={voce.nome}>
                  <strong>{voce.href ? <Link href={voce.href}>{voce.nome}</Link> : voce.nome}</strong>
                  {voce.testo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
