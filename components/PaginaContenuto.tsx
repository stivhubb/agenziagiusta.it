import type { Testi, Titolo } from "@/content/tipi";
import { Attivita } from "./Attivita";
import { BloccoQuizCompatto } from "./BloccoQuizCompatto";
import { Luoghi, type DatiLuoghi } from "./Luoghi";
import { PulsanteContatti } from "./PulsanteContatti";
import { StrisciaAgenzie } from "./StrisciaAgenzie";
import { Intro, Testo } from "./Testo";

// Template delle pagine di contenuto (verticali, città, guida).
// - Verticali: intro, testo (mercato, costi, cosa fa, domande), blocco quiz compatto,
//   attività e lavorazioni, link alle città.
// - Guida: intro, blocco quiz compatto, continuazione del testo.
// Le pagine tipo + città hanno la loro composizione in app/[slug]/[citta]/page.tsx.
// Senza testi mostra i segnaposto.
export function PaginaContenuto({
  occhiello,
  percorso,
  titolo,
  pagina,
  luoghi,
}: {
  occhiello?: string;
  percorso?: { nome: string; href?: string }[];
  titolo: Titolo;
  pagina?: Testi;
  luoghi?: DatiLuoghi;
}) {
  return (
    <>
      <Intro occhiello={occhiello} percorso={percorso} titolo={titolo} intro={pagina?.intro} />
      {pagina?.attivita ? (
        <>
          <Testo sezioni={pagina.sezioni} variante="seguito" />
          <BloccoQuizCompatto />
          <Attivita attivita={pagina.attivita} />
        </>
      ) : (
        <>
          <BloccoQuizCompatto />
          <Testo sezioni={pagina?.sezioni} />
        </>
      )}
      {luoghi && <Luoghi luoghi={luoghi} />}
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
