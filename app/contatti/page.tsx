import type { Metadata } from "next";
import { ModuloContatti } from "@/components/ModuloContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Intro } from "@/components/Testo";
import { contatti } from "@/content/contatti";
import { metadati } from "@/content/metadati";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: "Contatti",
  descrizione: contatti.apertura,
  percorso: percorsi.contatti,
});

// Pagina unica per i contatti: lo switch del modulo sceglie tra azienda e agenzia.
// Questa pagina non ha il pulsante contatti.
export default function Contatti() {
  return (
    <>
      <Intro
        occhiello="Contatti"
        titolo={contatti.titolo}
        intro={[contatti.apertura]}
        variante="contatti"
      />
      <section id="modulo" className="contenitore sezione-modulo">
        <ModuloContatti />
      </section>
      <StrisciaAgenzie />
    </>
  );
}
