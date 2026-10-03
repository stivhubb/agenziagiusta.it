import type { Metadata } from "next";
import Link from "next/link";
import { Campo } from "@/components/Campo";
import { Spunta } from "@/components/Icone";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { Intro, Testo } from "@/components/Testo";
import { metadati } from "@/content/metadati";
import { perLeAgenzie } from "@/content/per-le-agenzie";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: "Per le agenzie",
  descrizione: perLeAgenzie.intro[0],
  percorso: percorsi.perLeAgenzie,
});

// Questa pagina non ha la striscia agenzie: al posto del blocco quiz c'è il modulo per i partner.
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

          {/* Primo giro: il modulo si vede ma non invia nulla. */}
          <form className="modulo modulo--scheda">
            {modulo.campi.slice(0, 2).map((campo) => (
              <Campo key={campo.id} {...campo} />
            ))}
            <div className="modulo__griglia">
              {modulo.campi.slice(2).map((campo) => (
                <Campo key={campo.id} {...campo} />
              ))}
            </div>
            <button type="button" className="pulsante pulsante--nero">
              {modulo.pulsante}
            </button>
            <div className="nota-modulo">
              Inviando accetti la <Link href={percorsi.privacy}>privacy e policy</Link>.
            </div>
          </form>
        </div>
      </section>

      <Testo sezioni={perLeAgenzie.sezioni} />
      <PulsanteContatti />
    </>
  );
}
