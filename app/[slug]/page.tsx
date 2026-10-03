import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { citta, titoloCitta } from "@/content/citta";
import { titoloInChiaro, type Sezione, type Titolo } from "@/content/tipi";
import { verticali } from "@/content/verticali";

// Pagine verticali e pagine città: una pagina statica per ogni voce dei due elenchi
// in content/verticali.ts e content/citta.ts.

type Voce = {
  percorso: string;
  titolo: Titolo;
  pagina?: { intro: string[]; sezioni: Sezione[] };
};

function trova(slug: string): Voce | undefined {
  const verticale = verticali.find((v) => v.slug === slug);
  if (verticale) {
    return {
      percorso: verticale.percorso ?? verticale.nome,
      titolo: verticale.pagina?.titolo ?? { testo: verticale.nome },
      pagina: verticale.pagina,
    };
  }
  const c = citta.find((v) => v.slug === slug);
  if (c) {
    return { percorso: c.nome, titolo: titoloCitta(c.nome), pagina: c.pagina };
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...verticali, ...citta].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const voce = trova((await params).slug);
  if (!voce) return {};
  return {
    title: titoloInChiaro(voce.titolo),
    description: voce.pagina?.intro[0],
    // Le pagine ancora senza testi non vanno indicizzate.
    robots: voce.pagina ? undefined : { index: false },
  };
}

export default async function Pagina({ params }: PageProps<"/[slug]">) {
  const voce = trova((await params).slug);
  if (!voce) notFound();
  return <PaginaContenuto percorso={voce.percorso} titolo={voce.titolo} pagina={voce.pagina} />;
}
