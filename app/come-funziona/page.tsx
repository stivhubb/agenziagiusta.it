import type { Metadata } from "next";
import Link from "next/link";
import { Freccia } from "@/components/Icone";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Intro, Testo } from "@/components/Testo";
import { comeFunziona } from "@/content/come-funziona";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = {
  title: "Come funziona",
  description: comeFunziona.intro[0],
};

export default function ComeFunziona() {
  return (
    <>
      <Intro occhiello="Come funziona" titolo={comeFunziona.titolo} intro={comeFunziona.intro} />

      <section className="contenitore">
        <div className="griglia">
          {comeFunziona.passi.map((passo, i) => (
            <div key={passo.titolo} className="scheda scheda--passo">
              <div className="scheda__numero">{i + 1}</div>
              <h2 className="titolo-scheda">{passo.titolo}</h2>
              <p className="scheda__testo">{passo.testo}</p>
            </div>
          ))}
        </div>
      </section>

      <Testo sezioni={comeFunziona.sezioni} />

      <section className="fondo-sezione">
        <div className="contenitore fascia">
          <h2 className="titolo-fascia">{comeFunziona.fascia}</h2>
          <Link href={percorsi.quiz} className="pulsante pulsante--magenta">
            Inizia il quiz
            <Freccia />
          </Link>
        </div>
      </section>

      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
