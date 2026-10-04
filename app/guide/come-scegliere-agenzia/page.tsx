import type { Metadata } from "next";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { guida } from "@/content/guida";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: guida.seo.title,
  titoloIntero: true,
  descrizione: guida.seo.description,
  percorso: percorsi.guida,
});

export default function Guida() {
  return (
    <>
      <DatiPercorso voci={[{ nome: "Guida", percorso: percorsi.guida }]} />
      <PaginaContenuto occhiello="Guida" titolo={guida.titolo} pagina={guida} />
    </>
  );
}
