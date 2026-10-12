import type { Metadata } from "next";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Testo } from "@/components/Testo";
import { metadati } from "@/content/metadati";
import { cookie } from "@/content/cookie";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: cookie.titolo,
  percorso: percorsi.cookie,
});

export default function CookiePolicy() {
  return (
    <>
      <section className="contenitore intro intro--privacy">
        <h1 className="titolo-pagina">{cookie.titolo}</h1>
        <p className="nota">{cookie.aggiornamento}</p>
      </section>
      <Testo sezioni={cookie.sezioni} variante="privacy" />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
