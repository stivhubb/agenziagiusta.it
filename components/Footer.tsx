import Link from "next/link";
import { cittaComplete } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { verticali } from "@/content/verticali";
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
            <div className="footer__titolo">Tipi di agenzia</div>
            {verticali.map((v) => (
              <Link key={v.slug} href={`/${v.slug}/`}>
                {v.nome}
              </Link>
            ))}
          </div>
          <div className="footer__colonna">
            <div className="footer__titolo">Agenzie per città</div>
            {cittaComplete.map((c) => (
              <Link key={c.slug} href={`/comunicazione/${c.slug}/`}>
                {c.nome}
              </Link>
            ))}
          </div>
          <div className="footer__colonna">
            <div className="footer__titolo">Informazioni</div>
            <Link href={percorsi.perLeAgenzie}>Per le agenzie</Link>
            <Link href={percorsi.contatti}>Contatti</Link>
            <Link href={percorsi.privacy}>Privacy</Link>
            <Link href={percorsi.cookie}>Cookie policy</Link>
          </div>
        </div>
        <div className="footer__note">
          © 2026 {sito.nome}
        </div>
      </div>
    </footer>
  );
}
