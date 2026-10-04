import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { BloccoQuizCompatto } from "@/components/BloccoQuizCompatto";
import { ElencoAgenzie } from "@/components/ElencoAgenzie";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Intro } from "@/components/Testo";
import {
  a,
  citta,
  completa,
  percorsoLocale,
  seoLocale,
  titoloLocale,
} from "@/content/citta";
import { metadati } from "@/content/metadati";
import { verticali } from "@/content/verticali";

// Pagine tipo + città (/web-agency/roma/): una pagina statica per ogni incrocio tra
// i verticali di content/verticali.ts e le città di content/citta.ts.
// Composizione: testo sul mercato locale (con le fonti), blocco quiz compatto,
// elenco delle agenzie di quel tipo nella città.

function trova(slug: string, slugCitta: string) {
  const verticale = verticali.find((v) => v.slug === slug);
  const c = citta.find((v) => v.slug === slugCitta);
  if (!verticale || !c) return undefined;
  return { verticale, c, pagina: c.pagine?.[verticale.slug] };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return verticali.flatMap((v) => citta.map((c) => ({ slug: v.slug, citta: c.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]/[citta]">): Promise<Metadata> {
  const { slug, citta: slugCitta } = await params;
  const voce = trova(slug, slugCitta);
  if (!voce) return {};
  const seo = seoLocale(voce.verticale, voce.c);
  return metadati({
    titolo: seo.title,
    titoloIntero: true,
    descrizione: seo.description,
    percorso: percorsoLocale(voce.verticale, voce.c),
    // Le pagine senza testo o senza agenzie non vanno indicizzate.
    indicizza: completa(voce.pagina),
  });
}

export default async function Pagina({ params }: PageProps<"/[slug]/[citta]">) {
  const { slug, citta: slugCitta } = await params;
  const voce = trova(slug, slugCitta);
  if (!voce) notFound();
  const { verticale, c } = voce;
  const genitore = { nome: verticale.percorso ?? verticale.nome, percorso: `/${verticale.slug}/` };
  const testo = voce.pagina?.testo ?? [];
  const fonti = voce.pagina?.fonti ?? [];
  return (
    <>
      <DatiPercorso voci={[genitore, { nome: c.nome, percorso: percorsoLocale(verticale, c) }]} />
      <Intro
        percorso={[{ nome: genitore.nome, href: genitore.percorso }, { nome: c.nome }]}
        titolo={titoloLocale(verticale, c)}
        intro={testo.length > 0 ? testo : undefined}
        segnaposto="[TESTO SUL MERCATO LOCALE: DA SCRIVERE]"
      >
        {fonti.length > 0 && (
          <p className="fonti">
            Fonti:{" "}
            {fonti.map((fonte, i) => (
              <span key={fonte.url}>
                {i > 0 && ", "}
                <a href={fonte.url} target="_blank" rel="noopener">
                  {fonte.nome}
                </a>
              </span>
            ))}
          </p>
        )}
      </Intro>
      <BloccoQuizCompatto />
      <ElencoAgenzie
        titolo={`${verticale.locale.plurale} ${a(c.nome)}`}
        agenzie={voce.pagina?.agenzie ?? []}
      />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
