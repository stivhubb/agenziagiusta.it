import type { Sezione, Titolo } from "@/content/tipi";
import { BloccoQuizCompatto } from "./BloccoQuizCompatto";
import { PulsanteContatti } from "./PulsanteContatti";
import { StrisciaAgenzie } from "./StrisciaAgenzie";
import { Intro, Testo } from "./Testo";

// Template delle pagine di contenuto (verticali, città, guida):
// intro lunga, blocco quiz compatto, continuazione del testo.
// Senza testi mostra i segnaposto.
export function PaginaContenuto({
  occhiello,
  percorso,
  titolo,
  pagina,
}: {
  occhiello?: string;
  percorso?: string;
  titolo: Titolo;
  pagina?: { intro: string[]; sezioni: Sezione[] };
}) {
  return (
    <>
      <Intro occhiello={occhiello} percorso={percorso} titolo={titolo} intro={pagina?.intro} />
      <BloccoQuizCompatto />
      <Testo sezioni={pagina?.sezioni} />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
