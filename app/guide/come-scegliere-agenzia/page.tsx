import type { Metadata } from "next";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { guida } from "@/content/guida";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";
import { titoloInChiaro } from "@/content/tipi";

export const metadata: Metadata = metadati({
  titolo: titoloInChiaro(guida.titolo),
  descrizione: guida.intro[0],
  percorso: percorsi.guida,
});

export default function Guida() {
  return (
    <>
      <DatiPercorso nome="Guida" percorso={percorsi.guida} />
      <PaginaContenuto occhiello="Guida" titolo={guida.titolo} pagina={guida} />
    </>
  );
}
