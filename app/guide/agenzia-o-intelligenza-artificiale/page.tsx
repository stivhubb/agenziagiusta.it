import type { Metadata } from "next";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { guidaAi } from "@/content/guida-ai";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: guidaAi.seo.title,
  titoloIntero: true,
  descrizione: guidaAi.seo.description,
  percorso: percorsi.guidaAi,
});

export default function GuidaAi() {
  return (
    <>
      <DatiPercorso voci={[{ nome: "Agenzia o intelligenza artificiale", percorso: percorsi.guidaAi }]} />
      <PaginaContenuto occhiello="Guida" titolo={guidaAi.titolo} pagina={guidaAi} />
    </>
  );
}
