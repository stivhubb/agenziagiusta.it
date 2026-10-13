"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Freccia } from "./Icone";

type Voce = { slug: string; nome: string };

// Ricerca in due scelte: tipo di agenzia e città, poi si va alla pagina tipo + città.
// Senza città si va alla pagina del tipo.
export function CercaAgenzia({ tipi, citta }: { tipi: Voce[]; citta: Voce[] }) {
  const router = useRouter();
  const [tipo, setTipo] = useState("");
  const [luogo, setLuogo] = useState("");
  return (
    <form
      className="cerca-agenzia"
      onSubmit={(e) => {
        e.preventDefault();
        if (!tipo) return;
        router.push(luogo ? `/${tipo}/${luogo}/` : `/${tipo}/`);
      }}
    >
      <div className="campo">
        <label htmlFor="cerca-tipo">Che agenzia cerchi?</label>
        <select id="cerca-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Scegli il tipo di agenzia</option>
          {tipi.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="campo">
        <label htmlFor="cerca-citta">In che città?</label>
        <select id="cerca-citta" value={luogo} onChange={(e) => setLuogo(e.target.value)}>
          <option value="">Tutte le città</option>
          {citta.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="pulsante pulsante--magenta">
        Vai
        <Freccia />
      </button>
    </form>
  );
}
