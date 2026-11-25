import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { BloccoQuizCompatto } from "@/components/BloccoQuizCompatto";
import { ElencoAgenzie } from "@/components/ElencoAgenzie";
import { GraficoClienti, GraficoQuote } from "@/components/Grafici";
import { Luoghi } from "@/components/Luoghi";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { Intro } from "@/components/Testo";
import {
  a,
  citta,
  completa,
  percorsoCitta,
  percorsoLocale,
  seoLocale,
  titoloLocale,
} from "@/content/citta";
import { metadati } from "@/content/metadati";
import { partnerDi } from "@/content/partner";
import { medie, statistiche, stima } from "@/content/statistiche";
import { completo, verticali } from "@/content/verticali";

// Pagine servizio + città (/web-agency/roma/): una pagina statica per ogni incrocio tra
// i verticali di content/verticali.ts e le città di content/citta.ts.
// Regola (25 novembre 2026): qui stanno solo i dati che cambiano con il servizio e con la città
// (content/statistiche.ts) e l'elenco delle agenzie. Ciò che riguarda solo il servizio sta nella
// pagina del servizio, ciò che riguarda solo la città nella pagina /agenzie/[citta]/: qui ci sono
// i rimandi a entrambe.

function trova(slug: string, slugCitta: string) {
  const verticale = verticali.find((v) => v.slug === slug);
  const c = citta.find((v) => v.slug === slugCitta);
  if (!verticale || !c) return undefined;
  return { verticale, c, pagina: c.pagine?.[verticale.slug], dati: statistiche[verticale.slug]?.[c.slug] };
}

export const dynamicParams = false;

// La pagina si rigenera una volta al giorno: le agenzie in evidenza cambiano ogni settimana.
export const revalidate = 86400;

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
    // Le pagine a cui manca un testo o l'elenco delle agenzie non vanno indicizzate.
    indicizza: completa(voce.pagina) && completo(voce.verticale) && Boolean(voce.dati),
  });
}

export default async function Pagina({ params }: PageProps<"/[slug]/[citta]">) {
  const { slug, citta: slugCitta } = await params;
  const voce = trova(slug, slugCitta);
  if (!voce) notFound();
  const { verticale, c, dati } = voce;
  const genitore = { nome: verticale.percorso ?? verticale.nome, percorso: `/${verticale.slug}/` };
  const media = medie[verticale.slug];
  const quote = citta
    .map((x) => ({ nome: x.nome, quota: statistiche[verticale.slug]?.[x.slug]?.quota ?? 0 }))
    .filter((x) => x.quota > 0);
  const plurale = verticale.locale.plurale;
  const conClienti = dati && dati.clienti.n >= 15;
  return (
    <>
      <DatiPercorso voci={[genitore, { nome: c.nome, percorso: percorsoLocale(verticale, c) }]} />
      <Intro
        percorso={[{ nome: genitore.nome, href: genitore.percorso }, { nome: c.nome }]}
        titolo={titoloLocale(verticale, c)}
        intro={
          dati
            ? [
                `I dati di questa pagina sono stime di AgenziaGiusta.it sulle ${plurale.toLowerCase()} con sede ${a(c.nome)} e provincia, ricavate dall'analisi dei loro siti (rilevazione di ottobre 2026).`,
              ]
            : undefined
        }
        segnaposto="[DATI DELLA RILEVAZIONE: DA GENERARE]"
      >
        <p className="paragrafo">
          <Link href={percorsoCitta(c)}>Le agenzie {a(c.nome)}: il quadro della città →</Link>
        </p>
      </Intro>

      {dati && (
        <section className="contenitore dati-locali">
          <h2 className="titolo-blocco">
            {plurale} {a(c.nome)} in numeri
          </h2>
          <table className="dati-tabella">
            <caption className="dati-tabella__titolo">Stima AgenziaGiusta.it, rilevazione di ottobre 2026</caption>
            <tbody>
              {dati.schema.map(([voce, valore]) => (
                <tr key={voce}>
                  <th scope="row">{voce}</th>
                  <td>{valore}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="dati-locali__grafici">
            <GraficoQuote
              titolo={`Quante agenzie offrono il servizio, città per città`}
              voci={quote}
              evidenza={c.nome}
              didascalia={`${c.nome}: ${stima(dati.quota)}; media delle dieci città: ${stima(media.quota)}.`}
            />
            {conClienti && (
              <GraficoClienti
                titolo="Con che clienti lavorano"
                citta={c.nome}
                clienti={dati.clienti}
                media={media.clienti}
                didascalia=""
              />
            )}
          </div>
          <p className="fonti">
            Dati della rilevazione AgenziaGiusta.it, ottobre 2026.{" "}
            <Link href={percorsoCitta(c)}>Come sono raccolti</Link>
          </p>
        </section>
      )}

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">Quanto costa e cosa fa</h2>
        <p className="paragrafo">
          <Link href={`/${verticale.slug}/`}>Prezzi, attività e domande frequenti →</Link>
        </p>
      </section>

      <BloccoQuizCompatto />
      <ElencoAgenzie
        titolo={`${plurale} ${a(c.nome)}`}
        agenzie={voce.pagina?.agenzie ?? []}
        partner={partnerDi(verticale.slug)}
        citta={c.nome}
        chiave={percorsoLocale(verticale, c)}
      />
      <Luoghi
        luoghi={{
          titolo: `Altri tipi di agenzia ${a(c.nome)}`,
          voci: verticali
            .filter((v) => v.slug !== verticale.slug && completa(c.pagine?.[v.slug]))
            .map((v) => ({ nome: v.nome, href: percorsoLocale(v, c) })),
        }}
      />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
