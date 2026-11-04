"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Voce "Tipi di agenzia" del menu in alto: si apre al clic e si chiude scegliendo una voce,
// cliccando fuori dal menu, premendo Esc o quando si cambia pagina.
export function MenuTipi({ tipi }: { tipi: { slug: string; nome: string }[] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const percorso = usePathname();
  const chiudi = () => menu.current?.removeAttribute("open");

  // Cambio di pagina (anche da link fuori dal menu).
  useEffect(() => {
    chiudi();
  }, [percorso]);

  useEffect(() => {
    const fuori = (e: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(e.target as Node)) chiudi();
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") chiudi();
    };
    document.addEventListener("pointerdown", fuori);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", fuori);
      document.removeEventListener("keydown", esc);
    };
  }, []);

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
