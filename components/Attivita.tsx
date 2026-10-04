import type { Attivita as DatiAttivita } from "@/content/tipi";

// Attività e lavorazioni di un tipo di agenzia, divise per gruppi.
export function Attivita({ attivita }: { attivita: DatiAttivita }) {
  return (
    <section className="contenitore attivita">
      <h2 className="titolo-blocco">{attivita.titolo}</h2>
      <div className="attivita__gruppi">
        {attivita.gruppi.map((gruppo) => (
          <div key={gruppo.titolo} className="attivita__gruppo">
            <h3 className="titolo-scheda">{gruppo.titolo}</h3>
            <ul className="attivita__voci">
              {gruppo.voci.map((voce) => (
                <li key={voce.nome}>
                  <strong>{voce.nome}</strong>
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
