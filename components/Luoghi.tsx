import Link from "next/link";

export type DatiLuoghi = { titolo: string; voci: { nome: string; href: string }[] };

// Link alle pagine delle città, in fondo a ogni verticale. La versione compatta sta sotto
// l'intro dei verticali, per scegliere subito la città.
export function Luoghi({ luoghi, compatto }: { luoghi: DatiLuoghi; compatto?: boolean }) {
  return (
    <section className={`contenitore luoghi${compatto ? " luoghi--compatto" : ""}`}>
      {compatto ? (
        <p className="luoghi__titolo">{luoghi.titolo}</p>
      ) : (
        <h2 className="titolo-testo">{luoghi.titolo}</h2>
      )}
      <ul className="luoghi__voci">
        {luoghi.voci.map((voce) => (
          <li key={voce.href}>
            <Link href={voce.href}>{voce.nome}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
