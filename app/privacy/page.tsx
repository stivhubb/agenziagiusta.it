import type { Metadata } from "next";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Testo } from "@/components/Testo";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: privacy.titolo,
};

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
