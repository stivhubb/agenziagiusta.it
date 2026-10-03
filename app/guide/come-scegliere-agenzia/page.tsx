import type { Metadata } from "next";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { guida } from "@/content/guida";
import { titoloInChiaro } from "@/content/tipi";

export const metadata: Metadata = {
  title: titoloInChiaro(guida.titolo),
  description: guida.intro[0],
};

export default function Guida() {
  return <PaginaContenuto occhiello="Guida" titolo={guida.titolo} pagina={guida} />;
}
