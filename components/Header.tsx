import Link from "next/link";
import { percorsi } from "@/content/sito";
import { verticali } from "@/content/verticali";
import { MenuMobile } from "./MenuMobile";
import { MenuTipi } from "./MenuTipi";

export function Logo() {
  return (
    <>
      AgenziaGiusta<span className="evidenza">.it</span>
    </>
  );
}

// Su computer il menu è in riga; su telefono e tablet è nel pannello che si apre con ☰.
export function Header() {
  const tipi = verticali.map((v) => ({ slug: v.slug, nome: v.nome }));
  const voci = [
    { nome: "Come funziona", href: percorsi.comeFunziona },
    { nome: "Guida", href: percorsi.guida },
    { nome: "Per le agenzie", href: percorsi.perLeAgenzie },
    { nome: "Contatti", href: percorsi.contatti },
  ];
  return (
    <header className="header">
      <div className="contenitore header__interno">
        <Link href={percorsi.home} className="logo">
          <Logo />
        </Link>
        <nav aria-label="Navigazione principale" className="header__nav">
          <MenuTipi tipi={tipi} />
          {voci.map((v) => (
            <Link key={v.href} href={v.href}>
              {v.nome}
            </Link>
          ))}
        </nav>
        <MenuMobile tipi={tipi} voci={voci} />
      </div>
    </header>
  );
}
