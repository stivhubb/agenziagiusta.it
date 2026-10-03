import Link from "next/link";
import { citta } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer>
      <div className="contenitore footer__interno">
        <div className="footer__colonne">
          <div className="footer__colonna">
            <div className="logo">
              <Logo />
            </div>
            <div className="footer__motto">{sito.motto}</div>
          </div>
          <div className="footer__colonna">
            <div className="footer__titolo">Il servizio</div>
            <Link href={percorsi.quiz}>Crea il tuo brief</Link>
            <Link href={percorsi.comeFunziona}>Come funziona</Link>
            <Link href={percorsi.guida}>{"Guida alla scelta dell'agenzia"}</Link>
          </div>
          <div className="footer__colonna">
            <div className="footer__titolo">Agenzie per città</div>
            {citta.map((c) => (
              <Link key={c.slug} href={`/${c.slug}/`}>
                {c.nome}
              </Link>
            ))}
          </div>
          <div className="footer__colonna">
            <div className="footer__titolo">Informazioni</div>
            <Link href={percorsi.perLeAgenzie}>Per le agenzie</Link>
            <Link href={percorsi.contatti}>Contatti</Link>
            <Link href={percorsi.privacy}>Privacy e policy</Link>
          </div>
        </div>
        <div className="footer__note">
          © 2026 {sito.nome} · {sito.ragioneSociale} · P. IVA {sito.partitaIva}
        </div>
      </div>
    </footer>
  );
}
