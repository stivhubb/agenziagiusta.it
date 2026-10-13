"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useActionState, useState } from "react";
import { inviaContatto, type EsitoContatto } from "@/app/azioni";
import { contatti } from "@/content/contatti";
import { percorsi, sito } from "@/content/sito";
import { Campo } from "./Campo";

type Chi = "azienda" | "agenzia";

// Modulo unico della pagina Contatti: lo switch sceglie se scrive un'azienda o un'agenzia.
// /contatti/?per=agenzia apre il modulo già sulle agenzie (link dalla pagina Per le agenzie).
export function ModuloContatti() {
  return (
    <Suspense fallback={<Modulo iniziale="azienda" />}>
      <ModuloDaIndirizzo />
    </Suspense>
  );
}

function ModuloDaIndirizzo() {
  const iniziale: Chi = useSearchParams().get("per") === "agenzia" ? "agenzia" : "azienda";
  return <Modulo key={iniziale} iniziale={iniziale} />;
}

function Modulo({ iniziale }: { iniziale: Chi }) {
  const [chi, setChi] = useState<Chi>(iniziale);
  const [esito, azione, inCorso] = useActionState<EsitoContatto, FormData>(inviaContatto, {
    stato: "vuoto",
  });

  if (esito.stato === "inviato") {
    return (
      <div className="modulo modulo--contatti" role="status">
        <h2 className="titolo-testo">{contatti.inviato.titolo}</h2>
        <p className="paragrafo">{contatti.inviato.testo}</p>
      </div>
    );
  }

  const testi = contatti.modulo[chi];
  return (
    <form action={azione} className="modulo modulo--contatti">
      <div className="switch-contatti" role="radiogroup" aria-label="Chi ci scrive">
        {(["azienda", "agenzia"] as const).map((voce) => (
          <button
            key={voce}
            type="button"
            role="radio"
            aria-checked={chi === voce}
            className={chi === voce ? "attivo" : undefined}
            onClick={() => setChi(voce)}
          >
            {contatti.modulo[voce].etichetta}
          </button>
        ))}
      </div>
      <input type="hidden" name="chi" value={chi} />
      {/* Campo trappola per i programmi automatici: nascosto alle persone. */}
      <div className="campo-trappola" aria-hidden="true">
        <label htmlFor="ct-indirizzo">Indirizzo</label>
        <input id="ct-indirizzo" name="indirizzo" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <h2 className="titolo-testo">{testi.titolo}</h2>
      <p className="paragrafo">
        {testi.testo}
        {chi === "azienda" && (
          <>
            {" "}
            <Link href={percorsi.quiz}>{contatti.modulo.azienda.linkQuiz}</Link>
          </>
        )}
      </p>

      {chi === "azienda" ? (
        <>
          <div className="modulo__griglia">
            <Campo id="ct-nome" nome="nome" etichetta="Nome e cognome" obbligatorio />
            <Campo id="ct-azienda" nome="azienda" etichetta="Azienda (facoltativo)" />
          </div>
          <Campo id="ct-email" nome="email" etichetta="Email" tipo="email" obbligatorio />
          <Campo id="ct-messaggio" nome="messaggio" etichetta="Messaggio" righe={6} obbligatorio />
        </>
      ) : (
        <>
          <div className="modulo__griglia">
            <Campo id="ag-nome" nome="nome" etichetta="Nome dell'agenzia" obbligatorio />
            <Campo id="ag-email" nome="email" etichetta="Email" tipo="email" obbligatorio />
            <Campo id="ag-sito" nome="sito" etichetta="Sito web" tipo="url" />
            <Campo id="ag-zona" nome="zona" etichetta="Zona" />
            <Campo id="ag-servizi" nome="servizi" etichetta="Servizi offerti" />
            <Campo id="ag-settori" nome="settori" etichetta="Settori" />
          </div>
          <Campo id="ag-budget" nome="budget" etichetta="Fascia di budget dei clienti" />
          <Campo id="ag-messaggio" nome="messaggio" etichetta="Messaggio (facoltativo)" righe={4} />
        </>
      )}

      {esito.stato === "errore" && (
        <p className="quiz__errore" role="alert">
          {esito.messaggio}
        </p>
      )}
      <div className="modulo__azioni">
        <button type="submit" className="pulsante pulsante--magenta" disabled={inCorso}>
          {inCorso ? "Invio in corso…" : testi.pulsante}
        </button>
        <div className="nota">Oppure scrivi a {sito.emailContatto}</div>
      </div>
      <div className="nota-modulo">
        Come trattiamo i dati è spiegato nell&apos;
        <Link href={percorsi.privacy}>informativa privacy</Link>.
      </div>
    </form>
  );
}
