import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { PaginaContenuto } from "@/components/PaginaContenuto";
import { citta, percorsoLocale } from "@/content/citta";
import { metadati } from "@/content/metadati";
import { verticali } from "@/content/verticali";

// Pagine verticali: una pagina statica per ogni voce dell'elenco in content/verticali.ts.
// Sotto ognuna ci sono le pagine delle città (app/[slug]/[citta]/page.tsx).

export const dynamicParams = false;

export function generateStaticParams() {
  return verticali.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const verticale = verticali.find((v) => v.slug === slug);
  if (!verticale) return {};
  return metadati({
    // Senza il nome del sito, per lasciare spazio alla parola chiave.
    titolo: verticale.seo.title,
    titoloIntero: true,
    descrizione: verticale.seo.description,
    percorso: `/${slug}/`,
    // Le pagine ancora senza testi non vanno indicizzate.
    indicizza: Boolean(verticale.pagina),
  });
}

export default async function Pagina({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const verticale = verticali.find((v) => v.slug === slug);
  if (!verticale) notFound();
  const nome = verticale.percorso ?? verticale.nome;
  return (
    <>
      <DatiPercorso voci={[{ nome, percorso: `/${slug}/` }]} />
      <PaginaContenuto
        percorso={[{ nome }]}
        titolo={verticale.titolo}
        pagina={verticale.pagina}
        luoghi={{
          titolo: `${verticale.locale.plurale} per città`,
          voci: citta.map((c) => ({ nome: c.nome, href: percorsoLocale(verticale, c) })),
        }}
      />
    </>
  );
}
