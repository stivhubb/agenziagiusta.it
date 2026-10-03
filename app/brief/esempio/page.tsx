import type { Metadata } from "next";
import { Brief } from "@/components/Brief";
import { PulsanteStampa } from "@/components/PulsanteStampa";
import { briefEsempio } from "@/content/brief-esempio";
import { metadati } from "@/content/metadati";

// Pagina di prova per vedere il brief impaginato. Non è collegata dal sito e non va su Google.
export const metadata: Metadata = metadati({
  titolo: "Esempio di brief",
  percorso: "/brief/esempio/",
  indicizza: false,
});

export default function BriefEsempio() {
  return (
    <div className="contenitore brief-pagina">
      <div className="brief-pagina__azioni">
        <p className="nota">Esempio: azienda e dati sono inventati.</p>
        <PulsanteStampa />
      </div>
      <Brief dati={briefEsempio} />
    </div>
  );
}
