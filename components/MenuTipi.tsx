"use client";

import Link from "next/link";
import { useRef } from "react";

// Voce "Tipi di agenzia" del menu in alto: si apre al clic e si chiude scegliendo una voce.
export function MenuTipi({ tipi }: { tipi: { slug: string; nome: string }[] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const chiudi = () => menu.current?.removeAttribute("open");
  return (
    <details className="menu-tipi" ref={menu}>
      <summary>Tipi di agenzia</summary>
      <ul className="menu-tipi__voci">
        {tipi.map((t) => (
          <li key={t.slug}>
            <Link href={`/${t.slug}/`} onClick={chiudi}>
              {t.nome}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
