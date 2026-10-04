import type { Agenzia } from "@/content/tipi";
import { Freccia } from "./Icone";
import { Segnaposto } from "./Testo";

// Elenco delle agenzie di un tipo in una città, in ordine alfabetico, con il link al loro sito.
export function ElencoAgenzie({ titolo, agenzie }: { titolo: string; agenzie: Agenzia[] }) {
  const ordinate = [...agenzie].sort((a, b) => a.nome.localeCompare(b.nome, "it"));
  return (
    <section className="contenitore agenzie">
      <h2 className="titolo-blocco">{titolo}</h2>
      {ordinate.length > 0 ? (
        <>
          <ul className="griglia agenzie__elenco">
            {ordinate.map((agenzia) => (
              <li key={agenzia.url} className="scheda scheda--scelta">
                <h3 className="titolo-scheda">{agenzia.nome}</h3>
                <p className="scheda__testo">{agenzia.servizi}</p>
                <a href={agenzia.url} target="_blank" rel="noopener" className="link-freccia">
                  Vai al sito
                  <Freccia size={16} />
                </a>
              </li>
            ))}
          </ul>
          <p className="agenzie__nota">
            Elenco in ordine alfabetico, compilato da fonti pubbliche. Non è una classifica né una
            raccomandazione.
          </p>
        </>
      ) : (
        <Segnaposto alto>[ELENCO DELLE AGENZIE: DA COMPILARE]</Segnaposto>
      )}
    </section>
  );
}
