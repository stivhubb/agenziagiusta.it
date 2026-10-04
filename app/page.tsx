import type { Metadata } from "next";
import Link from "next/link";
import { BloccoQuiz } from "@/components/BloccoQuiz";
import { DatiSito } from "@/components/DatiStrutturati";
import { Freccia } from "@/components/Icone";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { TitoloPagina } from "@/components/Testo";
import { home } from "@/content/home";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";
import { verticali } from "@/content/verticali";

export const metadata: Metadata = metadati({
  titolo: home.seo.title,
  titoloIntero: true,
  descrizione: home.seo.description,
  percorso: percorsi.home,
});

export default function Home() {
  return (
    <>
      <DatiSito />
      <section className="contenitore hero-home">
        <div className="occhiello occhiello--punto">{home.occhiello}</div>
        <TitoloPagina titolo={home.titolo} className="titolo-home" />
        <p className="apertura">{home.apertura}</p>
        <div className="hero-home__azioni">
          <Link href={percorsi.quiz} className="pulsante pulsante--magenta">
            Inizia il quiz
            <Freccia />
          </Link>
          <span className="nota">{home.notaPulsante}</span>
        </div>
      </section>

      <BloccoQuiz />

      <section className="fondo-sezione verticali">
        <div className="contenitore verticali__interno">
          <div className="verticali__testa">
            <h2 className="titolo-blocco">{home.verticali.titolo}</h2>
            <p className="sottotitolo">{home.verticali.testo}</p>
          </div>
          <div className="griglia griglia--verticali">
            {verticali.map((verticale, i) => (
              <Link key={verticale.slug} href={`/${verticale.slug}/`} className="scheda">
                <div className="scheda__numero">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="titolo-scheda">{verticale.nome}</h3>
                <p className="scheda__testo">{verticale.descrizione}</p>
                <div className="link-freccia">
                  Vai alla pagina
                  <Freccia size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
