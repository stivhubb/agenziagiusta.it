import type { Metadata } from "next";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Testo } from "@/components/Testo";
import { metadati } from "@/content/metadati";
import { privacy } from "@/content/privacy";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: privacy.titolo,
  percorso: percorsi.privacy,
});

export default function Privacy() {
  return (
    <>
      <section className="contenitore intro intro--privacy">
        <h1 className="titolo-pagina">{privacy.titolo}</h1>
        <p className="nota">{privacy.aggiornamento}</p>
      </section>
      <Testo sezioni={privacy.sezioni} variante="privacy" />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
