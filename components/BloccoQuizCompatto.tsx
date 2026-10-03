import Link from "next/link";
import { percorsi } from "@/content/sito";
import { Freccia } from "./Icone";

// Blocco quiz compatto: si usa nelle pagine verticali, nelle pagine città e nella guida.

const passi = ["Rispondi al quiz", "Ricevi il brief via email", "Ti contatta un'agenzia adatta"];

export function BloccoQuizCompatto() {
  return (
    <section id="quiz-brief" className="contenitore">
      <div className="blocco-compatto">
        <div className="blocco-compatto__testo">
          <h2 className="titolo-testo">
            Rispondi a poche domande e costruisci il tuo brief perfetto.
          </h2>
          <ol className="passi-compatti">
            {passi.map((passo, i) => (
              <li key={passo}>
                <span className="passi-compatti__numero">{i + 1}</span>
                {passo}
              </li>
            ))}
          </ol>
        </div>
        <Link href={percorsi.quiz} className="pulsante pulsante--nero">
          Inizia il quiz
          <Freccia />
        </Link>
      </div>
    </section>
  );
}
