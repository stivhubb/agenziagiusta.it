"use client";

import Link from "next/link";
import { useState } from "react";

// Menu ☰ per telefono e tablet: pannello con i tipi di agenzia (apribili) e le altre voci.
export function MenuMobile({
  tipi,
  voci,
}: {
  tipi: { slug: string; nome: string }[];
  voci: { nome: string; href: string }[];
}) {
  const [aperto, setAperto] = useState(false);
  const chiudi = () => setAperto(false);
  return (
    <div className="menu-mobile">
      <button
        type="button"
        className="menu-mobile__pulsante"
        aria-expanded={aperto}
        aria-controls="menu-mobile-pannello"
        aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
        onClick={() => setAperto(!aperto)}
      >
        {aperto ? "✕" : "☰"}
      </button>
      {aperto && (
        <nav id="menu-mobile-pannello" className="menu-mobile__pannello" aria-label="Menu">
          <details className="menu-mobile__tipi">
            <summary>Tipi di agenzia</summary>
            <ul>
              {tipi.map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}/`} onClick={chiudi}>
                    {t.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          {voci.map((v) => (
            <Link key={v.href} href={v.href} onClick={chiudi}>
              {v.nome}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
