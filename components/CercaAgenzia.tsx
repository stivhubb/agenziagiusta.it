"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Freccia } from "./Icone";

type Tipo = { slug: string; nome: string; servizio: string };
type Voce = { slug: string; nome: string };

// Ricerca in home: lo switch sceglie se cercare per tipo di agenzia o per servizio
// (le due tendine portano alle stesse pagine), poi la città o "Ovunque in Italia".
export function CercaAgenzia({ tipi, citta }: { tipi: Tipo[]; citta: Voce[] }) {
  const router = useRouter();
  const [modo, setModo] = useState<"agenzia" | "servizio">("agenzia");
  const [tipo, setTipo] = useState("");
  const [luogo, setLuogo] = useState("");
  const domanda = modo === "agenzia" ? "Che agenzia cerchi?" : "Che servizio cerchi?";
  return (
    <form
      className="cerca-agenzia"
      onSubmit={(e) => {
        e.preventDefault();
        if (!tipo) return;
        router.push(luogo ? `/${tipo}/${luogo}/` : `/${tipo}/`);
      }}
    >
      <div className="switch-contatti cerca-agenzia__switch" role="radiogroup" aria-label="Cerca per">
        {(["agenzia", "servizio"] as const).map((voce) => (
          <button
            key={voce}
            type="button"
            role="radio"
            aria-checked={modo === voce}
            className={modo === voce ? "attivo" : undefined}
            onClick={() => setModo(voce)}
          >
            {voce === "agenzia" ? "Agenzia" : "Servizio"}
          </button>
        ))}
      </div>
      <div className="cerca-agenzia__campi">
        <div className="campo cerca-agenzia__cosa">
          <label htmlFor="cerca-tipo">{domanda}</label>
          <select id="cerca-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="">{modo === "agenzia" ? "Scegli il tipo di agenzia" : "Scegli il servizio"}</option>
            {tipi.map((t) => (
              <option key={t.slug} value={t.slug}>
                {modo === "agenzia" ? t.nome : t.servizio}
              </option>
            ))}
          </select>
        </div>
        <div className="campo">
          <label htmlFor="cerca-citta">Dove?</label>
          <select id="cerca-citta" value={luogo} onChange={(e) => setLuogo(e.target.value)}>
            <option value="">Ovunque in Italia</option>
            {citta.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="pulsante pulsante--magenta">
          Cerca
          <Freccia />
        </button>
      </div>
    </form>
  );
}
