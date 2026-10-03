import Link from "next/link";
import { percorsi } from "@/content/sito";
import { Freccia } from "./Icone";

// Blocco quiz completo: si usa solo in home.

const passi = [
  { titolo: "Rispondi al quiz", testo: "Attività, servizi richiesti, budget, tempi e città." },
  {
    titolo: "Ricevi il brief via email",
    testo: "Un documento ordinato con le tue risposte, pronto da consegnare.",
  },
  {
    titolo: "Decidi se farlo arrivare alle agenzie",
    testo: "Solo con il tuo consenso lo inviamo a 2-3 agenzie adatte.",
  },
];

function Riga({ larghezza }: { larghezza: string }) {
  return <div className="anteprima__riga" style={{ width: larghezza }} />;
}

function Voce({ nome, righe }: { nome: string; righe: string[] }) {
  return (
    <div className="anteprima__voce">
      <div className="anteprima__nome">{nome}</div>
      {righe.map((larghezza, i) => (
        <Riga key={i} larghezza={larghezza} />
      ))}
    </div>
  );
}

function AnteprimaBrief() {
  return (
    <div aria-hidden="true" className="anteprima">
      <div className="anteprima__testa">
        <div>
          <div className="anteprima__titolo">Brief di progetto</div>
          <div className="anteprima__sotto">Compilato con le tue risposte al quiz</div>
        </div>
        <div className="anteprima__etichetta">Anteprima</div>
      </div>
      <div className="anteprima__linea" />
      <Voce nome="Attività" righe={["78%", "52%"]} />
      <div className="anteprima__voce">
        <div className="anteprima__nome">Servizi richiesti</div>
        <div className="anteprima__pillole">
          {[96, 132, 80].map((larghezza) => (
            <div key={larghezza} className="anteprima__pillola" style={{ width: larghezza }} />
          ))}
        </div>
      </div>
      <div className="anteprima__tre">
        <Voce nome="Budget" righe={["80%"]} />
        <Voce nome="Tempi" righe={["70%"]} />
        <Voce nome="Città" righe={["60%"]} />
      </div>
      <Voce nome="Obiettivi" righe={["92%", "86%", "40%"]} />
      <div className="anteprima__linea" />
      <div className="anteprima__firma">Preparato con AgenziaGiusta.it</div>
    </div>
  );
}

export function BloccoQuiz() {
  return (
    <section id="quiz-brief" className="contenitore">
      <div className="blocco-magenta">
        <div className="blocco-magenta__testo">
          <div className="occhiello">Dal quiz al brief</div>
          <h2 className="titolo-blocco">
            Rispondi a poche domande e costruisci il tuo brief perfetto.
          </h2>
          <p className="sottotitolo">
            Il quiz ti guida passo per passo. Alla fine ricevi un documento chiaro, che puoi usare
            con qualsiasi agenzia.
          </p>
          <ol className="passi">
            {passi.map((passo, i) => (
              <li key={passo.titolo}>
                <span className="passi__numero">{i + 1}</span>
                <div>
                  <div className="passi__titolo">{passo.titolo}</div>
                  <div className="passi__testo">{passo.testo}</div>
                </div>
              </li>
            ))}
          </ol>
          <Link href={percorsi.quiz} className="pulsante pulsante--nero">
            Inizia il quiz
            <Freccia />
          </Link>
        </div>
        <AnteprimaBrief />
      </div>
    </section>
  );
}
