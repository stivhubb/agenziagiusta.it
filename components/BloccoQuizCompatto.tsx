import Link from "next/link";
import { percorsi } from "@/content/sito";
import { Freccia } from "./Icone";

// Blocco quiz compatto: si usa nelle pagine verticali, nelle pagine città e nella guida.

const passi = ["Compila il brief", "Ricevi il brief via email", "Ti contatta un'agenzia adatta"];

export function BloccoQuizCompatto() {
  return (
    <section id="quiz-brief" className="contenitore">
      <div className="blocco-compatto">
        <div className="blocco-compatto__testo">
          {/* Non è un titolo di sezione: resta fuori dagli H2 della pagina, che portano le parole chiave. */}
          <p className="titolo-testo">Rispondi a poche domande e costruisci il tuo brief perfetto.</p>
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
