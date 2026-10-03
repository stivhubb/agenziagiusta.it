import type { Metadata } from "next";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { Quiz } from "@/components/Quiz";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { metadati } from "@/content/metadati";
import { quiz } from "@/content/quiz";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: quiz.titoloPagina,
  descrizione: quiz.descrizione,
  percorso: percorsi.quiz,
});

export default function Brief() {
  return (
    <>
      <Quiz />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
