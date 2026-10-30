import type { Metadata } from "next";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { guidaBrief } from "@/content/guida-brief";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: guidaBrief.seo.title,
  titoloIntero: true,
  descrizione: guidaBrief.seo.description,
  percorso: percorsi.guidaBrief,
});

export default function GuidaBrief() {
  return (
    <>
      <DatiPercorso voci={[{ nome: "Come fare un brief", percorso: percorsi.guidaBrief }]} />
      <PaginaContenuto occhiello="Guida" titolo={guidaBrief.titolo} pagina={guidaBrief} />
    </>
  );
}
