import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { citta, titoloCitta } from "@/content/citta";
import { metadati } from "@/content/metadati";
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
  const { slug } = await params;
  const voce = trova(slug);
  if (!voce) return {};
  return metadati({
    titolo: titoloInChiaro(voce.titolo),
    descrizione: voce.pagina?.intro[0],
    percorso: `/${slug}/`,
    // Le pagine ancora senza testi non vanno indicizzate.
    indicizza: Boolean(voce.pagina),
  });
}

export default async function Pagina({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const voce = trova(slug);
  if (!voce) notFound();
  return (
    <>
      <DatiPercorso nome={voce.percorso} percorso={`/${slug}/`} />
      <PaginaContenuto percorso={voce.percorso} titolo={voce.titolo} pagina={voce.pagina} />
    </>
  );
}
