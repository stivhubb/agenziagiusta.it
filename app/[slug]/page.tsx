import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { citta, seoCitta, titoloCitta } from "@/content/citta";
import { metadati } from "@/content/metadati";
import type { Seo, Testi, Titolo } from "@/content/tipi";
import { verticali } from "@/content/verticali";

// Pagine verticali e pagine città: una pagina statica per ogni voce dei due elenchi
// in content/verticali.ts e content/citta.ts.

type Voce = {
  percorso: string;
  titolo: Titolo;
  seo: Seo;
  pagina?: Testi;
};

function trova(slug: string): Voce | undefined {
  const verticale = verticali.find((v) => v.slug === slug);
  if (verticale) {
    return {
      percorso: verticale.percorso ?? verticale.nome,
      titolo: verticale.titolo,
      seo: verticale.seo,
      pagina: verticale.pagina,
    };
  }
  const c = citta.find((v) => v.slug === slug);
  if (c) {
    return {
      percorso: c.nome,
      titolo: titoloCitta(c.nome),
      seo: seoCitta(c.nome),
      pagina: c.pagina,
    };
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
    // Senza il nome del sito, per lasciare spazio alla parola chiave.
    titolo: voce.seo.title,
    titoloIntero: true,
    descrizione: voce.seo.description,
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
