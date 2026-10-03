import type { Metadata } from "next";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { Quiz } from "@/components/Quiz";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { quiz } from "@/content/quiz";

export const metadata: Metadata = {
  title: quiz.titoloPagina,
  description: quiz.descrizione,
};

export default function Brief() {
  return (
    <>
      <Quiz />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
