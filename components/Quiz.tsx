"use client";

import { useState } from "react";
import { passi, quiz } from "@/content/quiz";
import { Freccia, Spunta } from "./Icone";
import { Segnaposto } from "./Testo";

// Quiz + brief. I passi arrivano da content/quiz.ts.
// Primo giro: le risposte restano nella pagina, non viene salvato né inviato nulla.
export function Quiz() {
  const [indice, setIndice] = useState(0);
  const [risposte, setRisposte] = useState<Record<number, string[]>>({});

  const passo = passi[indice];
  const scelte = risposte[indice] ?? [];
  const ultimo = indice === passi.length - 1;

  function scegli(opzione: string) {
    const selezionata = scelte.includes(opzione);
    const nuove = passo.multipla
      ? selezionata
        ? scelte.filter((s) => s !== opzione)
        : [...scelte, opzione]
      : selezionata
        ? []
        : [opzione];
    setRisposte({ ...risposte, [indice]: nuove });
  }

  return (
    <section className="contenitore quiz">
      <div className="quiz__domanda">
        <div className="quiz__gruppo">
          <div className="occhiello">
            Domanda {indice + 1} di {passi.length}
          </div>
          <div
            role="progressbar"
            aria-label="Avanzamento del quiz"
            aria-valuenow={((indice + 1) / passi.length) * 100}
            aria-valuemin={0}
            aria-valuemax={100}
            className="quiz__barra"
          >
            <div style={{ width: `${((indice + 1) / passi.length) * 100}%` }} />
          </div>
        </div>

        <div className="quiz__gruppo">
          <h1 className="titolo-quiz">{passo.domanda}</h1>
          {passo.aiuto && <p className="sottotitolo">{passo.aiuto}</p>}
        </div>

        {passo.opzioni.length > 0 ? (
          <div className="quiz__opzioni">
            {passo.opzioni.map((opzione) => (
              <button
                key={opzione}
                type="button"
                aria-pressed={scelte.includes(opzione)}
                className="quiz__opzione"
                onClick={() => scegli(opzione)}
              >
                {opzione}
              </button>
            ))}
          </div>
        ) : (
          <Segnaposto>{quiz.segnapostoOpzioni}</Segnaposto>
        )}

        {ultimo && <Segnaposto>{quiz.segnapostoFine}</Segnaposto>}

        <div className="quiz__azioni">
          {indice > 0 && (
            <button
              type="button"
              className="pulsante pulsante--contorno pulsante--medio"
              onClick={() => setIndice(indice - 1)}
            >
              Indietro
            </button>
          )}
          {!ultimo && (
            <button
              type="button"
              className="pulsante pulsante--magenta pulsante--medio quiz__avanti"
              onClick={() => setIndice(indice + 1)}
            >
              Avanti
              <Freccia />
            </button>
          )}
        </div>
      </div>

      <aside className="quiz__brief">
        <div className="quiz__brief-titolo">{quiz.brief.titolo}</div>
        <ol className="quiz__temi">
          {passi.map((p, i) => (
            <li
              key={p.nome}
              data-stato={i < indice ? "fatto" : i === indice ? "attuale" : "da-fare"}
            >
              <span>{i < indice ? <Spunta size={14} spessore={3} /> : i + 1}</span>
              {p.nome}
            </li>
          ))}
        </ol>
        <div className="quiz__linea" />
        <p>{quiz.brief.nota}</p>
      </aside>
    </section>
  );
}
