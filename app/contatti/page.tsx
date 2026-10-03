import type { Metadata } from "next";
import Link from "next/link";
import { Campo } from "@/components/Campo";
import { Freccia, FrecciaGiu } from "@/components/Icone";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Intro } from "@/components/Testo";
import { contatti } from "@/content/contatti";
import { metadati } from "@/content/metadati";
import { percorsi, sito } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: "Contatti",
  descrizione: contatti.apertura,
  percorso: percorsi.contatti,
});

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

      <section className="contenitore">
        <div className="griglia">
          {contatti.scelte.map((scelta) => {
            const interna = scelta.href.startsWith("#");
            return (
              <Link
                key={scelta.titolo}
                href={scelta.href}
                className={`scheda scheda--scelta${interna ? " scheda--attiva" : ""}`}
              >
                <h2 className="titolo-scheda">{scelta.titolo}</h2>
                <p className="scheda__testo">{scelta.testo}</p>
                <div className="link-freccia">
                  {scelta.link}
                  {interna ? <FrecciaGiu /> : <Freccia size={16} />}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="modulo" className="contenitore sezione-modulo">
        {/* Primo giro: il modulo si vede ma non invia nulla. */}
        <form className="modulo modulo--contatti">
          <h2 className="titolo-testo">{contatti.modulo.titolo}</h2>
          <div className="modulo__griglia">
            <Campo id="ct-nome" etichetta="Nome" />
            <Campo id="ct-email" etichetta="Email" tipo="email" />
          </div>
          <Campo id="ct-messaggio" etichetta="Messaggio" righe={6} />
          <div className="modulo__azioni">
            <button type="button" className="pulsante pulsante--magenta">
              {contatti.modulo.pulsante}
            </button>
            <div className="nota">Oppure scrivi a {sito.emailContatto}</div>
          </div>
          <div className="nota-modulo">
            Inviando accetti la <Link href={percorsi.privacy}>privacy e policy</Link>.
          </div>
        </form>
      </section>

      <StrisciaAgenzie />
    </>
  );
}
