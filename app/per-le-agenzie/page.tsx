import type { Metadata } from "next";
import Link from "next/link";
import { Spunta } from "@/components/Icone";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { Intro, Testo } from "@/components/Testo";
import { metadati } from "@/content/metadati";
import { perLeAgenzie } from "@/content/per-le-agenzie";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: perLeAgenzie.seo.title,
  descrizione: perLeAgenzie.seo.description,
  percorso: percorsi.perLeAgenzie,
});

// Questa pagina non ha la striscia agenzie: al posto del blocco quiz c'è il rimando
// al modulo per i partner della pagina Contatti.
export default function PerLeAgenzie() {
  const { blocco, modulo } = perLeAgenzie;
  return (
    <>
      <Intro occhiello="Per le agenzie" titolo={perLeAgenzie.titolo} intro={perLeAgenzie.intro} />

      <section className="contenitore">
        <div className="blocco-magenta">
          <div className="blocco-magenta__testo">
            <div className="occhiello">{blocco.occhiello}</div>
            <h2 className="titolo-blocco">{blocco.titolo}</h2>
            <p className="sottotitolo">{blocco.testo}</p>
            <ul className="vantaggi">
              {blocco.vantaggi.map((vantaggio) => (
                <li key={vantaggio}>
                  <Spunta />
                  {vantaggio}
                </li>
              ))}
            </ul>
          </div>

          {/* La richiesta si invia dalla pagina Contatti, con lo switch già su "agenzia". */}
          <div className="modulo modulo--scheda">
            <p className="paragrafo">{modulo.testo}</p>
            <Link href={`${percorsi.contatti}?per=agenzia`} className="pulsante pulsante--nero">
              {modulo.pulsante}
            </Link>
          </div>
        </div>
      </section>

      <Testo sezioni={perLeAgenzie.sezioni} />
      <PulsanteContatti />
    </>
  );
}
