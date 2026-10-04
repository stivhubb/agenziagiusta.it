import Link from "next/link";

export type DatiLuoghi = { titolo: string; voci: { nome: string; href: string }[] };

// Link alle pagine delle città, in fondo a ogni verticale.
export function Luoghi({ luoghi }: { luoghi: DatiLuoghi }) {
  return (
    <section className="contenitore luoghi">
      <h2 className="titolo-testo">{luoghi.titolo}</h2>
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
