import Link from "next/link";
import { percorsi } from "@/content/sito";

export function Logo() {
  return (
    <>
      AgenziaGiusta<span className="evidenza">.it</span>
    </>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="contenitore header__interno">
        <Link href={percorsi.home} className="logo">
          <Logo />
        </Link>
        <nav aria-label="Navigazione principale" className="header__nav">
          <Link href={percorsi.comeFunziona}>Come funziona</Link>
          <Link href={percorsi.guida}>Guida</Link>
          <Link href={percorsi.perLeAgenzie}>Per le agenzie</Link>
          <Link href={percorsi.contatti}>Contatti</Link>
        </nav>
        <Link href={percorsi.quiz} className="pulsante pulsante--contorno pulsante--piccolo">
          Inizia il quiz
        </Link>
      </div>
    </header>
  );
}
