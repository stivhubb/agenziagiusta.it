import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { BloccoQuizCompatto } from "@/components/BloccoQuizCompatto";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { BloccoTesto, Fonti, Intro } from "@/components/Testo";
import { a, citta, percorsoCitta, percorsoLocale } from "@/content/citta";
import { notaMetodo } from "@/content/dati-citta";
import { metadati } from "@/content/metadati";
import { datiCittaPagina, statistiche, su10 } from "@/content/statistiche";
import { fonteTerritorio, territorio } from "@/content/territorio";
import { verticali } from "@/content/verticali";

// Pagina della città (/agenzie/napoli/): i dati che cambiano solo con la città.
// Imprese della provincia e settore della comunicazione (Istat), agenzie analizzate, tipo di clienti,
// tabella dei servizi con il link a ogni pagina servizio + città, metodo della rilevazione.
// Regola (25 novembre 2026): niente di quello che sta qui si ripete nelle pagine servizio + città.

export const dynamicParams = false;

export function generateStaticParams() {
  return citta.filter((c) => datiCittaPagina[c.slug]).map((c) => ({ citta: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/agenzie/[citta]">): Promise<Metadata> {
  const { citta: slug } = await params;
  const c = citta.find((x) => x.slug === slug);
  if (!c) return {};
  return metadati({
    titolo: `Agenzie ${a(c.nome)}: comunicazione, marketing e web`,
    titoloIntero: true,
    descrizione: `Quante agenzie di comunicazione, marketing e web ci sono ${a(c.nome)}, quali servizi offrono e con che clienti lavorano: i dati della rilevazione di AgenziaGiusta.it.`,
    percorso: percorsoCitta(c),
  });
}

export default async function Pagina({ params }: PageProps<"/agenzie/[citta]">) {
  const { citta: slug } = await params;
  const c = citta.find((x) => x.slug === slug);
  const dati = c ? datiCittaPagina[c.slug] : undefined;
  if (!c || !dati) notFound();
  const servizi = verticali
    .map((v) => ({ v, d: statistiche[v.slug]?.[c.slug] }))
    .filter((x) => x.d)
    .sort((x, y) => (y.d?.quota ?? 0) - (x.d?.quota ?? 0));
  return (
    <>
      <DatiPercorso voci={[{ nome: c.nome, percorso: percorsoCitta(c) }]} />
      <Intro
        percorso={[{ nome: c.nome }]}
        titolo={{ testo: `Agenzie ${a(c.nome)}:`, evidenza: "comunicazione, marketing e web in numeri." }}
        intro={[...(c.intro ?? []), ...dati.testo]}
      />

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">I servizi delle agenzie {a(c.nome)}</h2>
        <table className="dati-tabella">
          <thead>
            <tr>
              <th scope="col">Tipo di agenzia</th>
              <th scope="col">Agenzie</th>
              <th scope="col">Quota</th>
            </tr>
          </thead>
          <tbody>
            {servizi.map(({ v, d }) => (
              <tr key={v.slug}>
                <th scope="row">
                  <Link href={percorsoLocale(v, c)}>{v.locale.nome}</Link>
                </th>
                <td>{d?.agenzie}</td>
                <td>{d ? su10(d.quota) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {territorio[c.slug] && (
        <section className="contenitore dati-locali">
          <h2 className="titolo-blocco">Imprese e comunicazione in provincia di {c.nome}</h2>
          {territorio[c.slug].map((paragrafo, i) => (
            <BloccoTesto key={i} blocco={paragrafo} />
          ))}
          <Fonti fonti={[fonteTerritorio]} />
        </section>
      )}

      <section className="contenitore dati-locali">
        <BloccoTesto blocco={{ nota: notaMetodo(c.nome) }} />
      </section>

      <BloccoQuizCompatto />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
