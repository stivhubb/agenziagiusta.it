import type { Metadata } from "next";
import Link from "next/link";
import { Freccia } from "@/components/Icone";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { TitoloPagina } from "@/components/Testo";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = {
  title: "Pagina non trovata",
};

// Pagina 404. Testi provvisori, come gli altri del sito.
export default function NonTrovata() {
  return (
    <>
      <section className="contenitore intro">
        <div className="occhiello occhiello--punto">Errore 404</div>
        <TitoloPagina
          titolo={{ testo: "Questa pagina", evidenza: "non esiste." }}
          className="titolo-pagina"
        />
        <p className="apertura">
          {"L'indirizzo potrebbe essere sbagliato o la pagina potrebbe essere stata spostata."}
        </p>
        <div className="hero-home__azioni">
          <Link href={percorsi.home} className="pulsante pulsante--magenta">
            Torna alla home
            <Freccia />
          </Link>
          <Link href={percorsi.quiz} className="pulsante pulsante--contorno">
            Inizia il quiz
          </Link>
        </div>
      </section>
      <StrisciaAgenzie />
    </>
  );
}
