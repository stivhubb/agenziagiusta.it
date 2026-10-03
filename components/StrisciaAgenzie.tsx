import Link from "next/link";
import { percorsi } from "@/content/sito";
import { Freccia } from "./Icone";

// Striscia "Sei un'agenzia?": in fondo a tutte le pagine tranne Per le agenzie.

export function StrisciaAgenzie() {
  return (
    <section className="striscia">
      <div className="contenitore striscia__interno">
        <div>
          <strong>{"Sei un'agenzia?"}</strong> <span>Scopri le opportunità di partnership.</span>
        </div>
        <Link href={percorsi.perLeAgenzie} className="link-freccia">
          Per le agenzie
          <Freccia size={16} />
        </Link>
      </div>
    </section>
  );
}
