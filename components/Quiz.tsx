"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { componiBrief, type BriefComposto } from "@/content/brief";
import { province } from "@/content/province";
import { ALTRO, passi, quiz, type Campo } from "@/content/quiz";
import { percorsi } from "@/content/sito";
import { Brief } from "./Brief";
import { Freccia, Spunta } from "./Icone";
import { PulsanteStampa } from "./PulsanteStampa";
import { Segnaposto } from "./Testo";

// Quiz + brief. Schermate e campi arrivano da content/quiz.ts.
// Alla fine il brief viene scritto da content/brief.ts e mostrato nella pagina.
// Le risposte restano nel browser: non viene ancora salvato né inviato nulla.

type Valore = string | string[] | boolean;
type Risposte = Record<string, Valore>;

const tipiInput = { testo: "text", email: "email", telefono: "tel", url: "url", provincia: "text" };

function testo(valore: Valore | undefined): string {
  return typeof valore === "string" ? valore : "";
}

function scelte(valore: Valore | undefined): string[] {
  if (Array.isArray(valore)) return valore;
  return typeof valore === "string" && valore ? [valore] : [];
}

// Restituisce il messaggio di errore di un campo, se c'è.
function controlla(campo: Campo, risposte: Risposte): string | undefined {
  const valore = risposte[campo.id];
  const { errori } = quiz;

  if (campo.tipo === "casella") return valore === true ? undefined : errori.casella;

  if (campo.tipo === "singola" || campo.tipo === "multipla") {
    const selezionate = scelte(valore);
    if (selezionate.length === 0) return campo.facoltativo ? undefined : errori.obbligatorio;
    if (selezionate.includes(ALTRO) && !testo(risposte[`${campo.id}Altro`]).trim()) {
      return errori.altro;
    }
    return undefined;
  }

  const scritto = testo(valore).trim();
  if (!scritto) return campo.facoltativo ? undefined : errori.obbligatorio;
  if (campo.tipo === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(scritto)) return errori.email;
  return undefined;
}

export function Quiz() {
  const [indice, setIndice] = useState(0);
  const [risposte, setRisposte] = useState<Risposte>({});
  const [errori, setErrori] = useState<Record<string, string>>({});
  // Il brief, una volta completato il quiz.
  const [brief, setBrief] = useState<BriefComposto | null>(null);
  const completato = brief !== null;
  // I contatti si aprono solo dopo il clic su "Genera il brief".
  const [contattiAperti, setContattiAperti] = useState(false);
  const cima = useRef<HTMLElement>(null);

  const passo = passi[indice];
  const ultimo = indice === passi.length - 1;
  const richiesta = ultimo && !contattiAperti && !completato;
  const avanzamento = completato ? 100 : ((indice + 1) / passi.length) * 100;

  function imposta(id: string, valore: Valore) {
    setRisposte((attuali) => ({ ...attuali, [id]: valore }));
    setErrori((attuali) => {
      const rimasti = { ...attuali };
      delete rimasti[id];
      return rimasti;
    });
  }

  function scegli(campo: Campo, opzione: string) {
    const selezionate = scelte(risposte[campo.id]);
    const attiva = selezionate.includes(opzione);
    if (campo.tipo === "singola") {
      imposta(campo.id, attiva ? "" : opzione);
    } else {
      imposta(
        campo.id,
        attiva ? selezionate.filter((s) => s !== opzione) : [...selezionate, opzione],
      );
    }
  }

  function vai(nuovoIndice: number) {
    setIndice(nuovoIndice);
    requestAnimationFrame(() => cima.current?.scrollIntoView({ block: "start" }));
  }

  function avanti() {
    const trovati: Record<string, string> = {};
    for (const campo of passo.campi) {
      const errore = controlla(campo, risposte);
      if (errore) trovati[campo.id] = errore;
    }
    setErrori(trovati);
    const primo = Object.keys(trovati)[0];
    if (primo) {
      document.getElementById(`campo-${primo}`)?.scrollIntoView({ block: "center" });
      return;
    }
    if (ultimo) {
      const oggi = new Date().toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setBrief(componiBrief(risposte, oggi));
      requestAnimationFrame(() => cima.current?.scrollIntoView({ block: "start" }));
    } else {
      vai(indice + 1);
    }
  }

  function campoScelta(campo: Campo) {
    const selezionate = scelte(risposte[campo.id]);
    const alMassimo = campo.max !== undefined && selezionate.length >= campo.max;
    return (
      <>
        <div className="quiz__opzioni" role="group" aria-labelledby={`etichetta-${campo.id}`}>
          {campo.opzioni?.map((opzione) => {
            const attiva = selezionate.includes(opzione);
            return (
              <button
                key={opzione}
                type="button"
                aria-pressed={attiva}
                disabled={alMassimo && !attiva}
                className="quiz__opzione"
                onClick={() => scegli(campo, opzione)}
              >
                {opzione}
              </button>
            );
          })}
        </div>
        {selezionate.includes(ALTRO) && (
          <input
            type="text"
            aria-label={`${campo.etichetta}: specifica`}
            placeholder="Specifica"
            value={testo(risposte[`${campo.id}Altro`])}
            onChange={(e) => imposta(`${campo.id}Altro`, e.target.value)}
          />
        )}
      </>
    );
  }

  function campoTesto(campo: Campo) {
    const comuni = {
      id: campo.id,
      value: testo(risposte[campo.id]),
      "aria-invalid": Boolean(errori[campo.id]),
      "aria-describedby": campo.aiuto ? `aiuto-${campo.id}` : undefined,
    };
    if (campo.tipo === "testo-lungo") {
      return <textarea {...comuni} rows={5} onChange={(e) => imposta(campo.id, e.target.value)} />;
    }
    return (
      <input
        {...comuni}
        type={tipiInput[campo.tipo as keyof typeof tipiInput]}
        list={campo.tipo === "provincia" ? "province" : undefined}
        autoComplete={campo.completamento}
        onChange={(e) => imposta(campo.id, e.target.value)}
      />
    );
  }

  function campoCasella(campo: Campo) {
    return (
      <label className="quiz__casella">
        <input
          type="checkbox"
          checked={risposte[campo.id] === true}
          onChange={(e) => imposta(campo.id, e.target.checked)}
        />
        <span>
          {campo.id === "privacy" ? (
            <>
              Accetto la <Link href={percorsi.privacy}>privacy e policy</Link> per ricevere il
              brief.
            </>
          ) : (
            campo.etichetta
          )}
        </span>
      </label>
    );
  }

  if (brief) {
    return (
      <section className="contenitore brief-pagina" ref={cima}>
        <div className="quiz__gruppo">
          <h1 className="titolo-quiz">{quiz.fine.titolo}</h1>
          <p className="sottotitolo">{quiz.fine.testo}</p>
        </div>
        <div className="brief-pagina__azioni">
          <PulsanteStampa />
        </div>
        <Brief brief={brief} />
        <Segnaposto>{quiz.fine.segnaposto}</Segnaposto>
      </section>
    );
  }

  return (
    <section className="contenitore quiz" ref={cima}>
      <div className="quiz__domanda">
        <div className="quiz__gruppo">
          <div className="occhiello">
            {richiesta ? "Domande completate" : `Passo ${indice + 1} di ${passi.length}`}
          </div>
          <div
            role="progressbar"
            aria-label="Avanzamento del quiz"
            aria-valuenow={Math.round(avanzamento)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="quiz__barra"
          >
            <div style={{ width: `${avanzamento}%` }} />
          </div>
        </div>

        {richiesta ? (
          <>
            <div className="quiz__gruppo">
              <h1 className="titolo-quiz">{quiz.genera.titolo}</h1>
              <p className="sottotitolo">{quiz.genera.testo}</p>
            </div>
            <div className="quiz__azioni">
              <button
                type="button"
                className="pulsante pulsante--contorno pulsante--medio"
                onClick={() => vai(indice - 1)}
              >
                Indietro
              </button>
              <button
                type="button"
                className="pulsante pulsante--magenta pulsante--medio quiz__avanti"
                onClick={() => {
                  setContattiAperti(true);
                  requestAnimationFrame(() => cima.current?.scrollIntoView({ block: "start" }));
                }}
              >
                {quiz.genera.pulsante}
                <Freccia />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="quiz__gruppo">
              <h1 className="titolo-quiz">{passo.nome}</h1>
              <p className="sottotitolo">{passo.testo}</p>
            </div>

            <div className="quiz__campi">
              {passo.campi.map((campo) => {
                const scelta = campo.tipo === "singola" || campo.tipo === "multipla";
                return (
                  <div key={campo.id} id={`campo-${campo.id}`} className="quiz__campo">
                    {campo.tipo !== "casella" && (
                      <div>
                        {scelta ? (
                          <div id={`etichetta-${campo.id}`} className="quiz__etichetta">
                            {campo.etichetta}
                          </div>
                        ) : (
                          <label htmlFor={campo.id} className="quiz__etichetta">
                            {campo.etichetta}
                          </label>
                        )}
                        {campo.facoltativo && (
                          <span className="quiz__nota"> (facoltativo)</span>
                        )}
                        {campo.max && <span className="quiz__nota"> (massimo {campo.max})</span>}
                        {campo.aiuto && (
                          <p id={`aiuto-${campo.id}`} className="quiz__aiuto">
                            {campo.aiuto}
                          </p>
                        )}
                      </div>
                    )}
                    {campo.tipo === "casella"
                      ? campoCasella(campo)
                      : scelta
                        ? campoScelta(campo)
                        : campoTesto(campo)}
                    {errori[campo.id] && (
                      <p className="quiz__errore" role="alert">
                        {errori[campo.id]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <datalist id="province">
              {province.map((provincia) => (
                <option key={provincia} value={provincia} />
              ))}
            </datalist>

            <div className="quiz__azioni">
              {indice > 0 && (
                <button
                  type="button"
                  className="pulsante pulsante--contorno pulsante--medio"
                  onClick={() => vai(indice - 1)}
                >
                  Indietro
                </button>
              )}
              <button
                type="button"
                className="pulsante pulsante--magenta pulsante--medio quiz__avanti"
                onClick={avanti}
              >
                {ultimo ? quiz.pulsanteFine : "Avanti"}
                <Freccia />
              </button>
            </div>
          </>
        )}
      </div>

      <aside className="quiz__brief">
        <div className="quiz__brief-titolo">{quiz.brief.titolo}</div>
        <ol className="quiz__temi">
          {passi.map((p, i) => {
            const fatto = completato || i < indice;
            return (
              <li key={p.nome} data-stato={fatto ? "fatto" : i === indice ? "attuale" : "da-fare"}>
                <span>{fatto ? <Spunta size={14} spessore={3} /> : i + 1}</span>
                {p.nome}
              </li>
            );
          })}
        </ol>
        <div className="quiz__linea" />
        <p>{quiz.brief.nota}</p>
      </aside>
    </section>
  );
}
