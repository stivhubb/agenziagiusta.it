import type { Metadata } from "next";
import { Quiz } from "@/components/Quiz";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { metadati } from "@/content/metadati";
import { quiz } from "@/content/quiz";
import { percorsi } from "@/content/sito";

export const metadata: Metadata = metadati({
  titolo: quiz.seo.title,
  descrizione: quiz.seo.description,
  percorso: percorsi.quiz,
});

// Senza il pulsante contatti fisso: sul telefono copriva "Avanti".
export default function Brief() {
  return (
    <>
      <Quiz />
      <StrisciaAgenzie />
    </>
  );
}
