import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DatiPercorso } from "@/components/DatiStrutturati";
import { BloccoQuizCompatto } from "@/components/BloccoQuizCompatto";
import { GraficoClienti, GraficoQuote } from "@/components/Grafici";
import { PulsanteContatti } from "@/components/PulsanteContatti";
import { StrisciaAgenzie } from "@/components/StrisciaAgenzie";
import { BloccoTesto, Fonti, Intro } from "@/components/Testo";
import { a, citta, percorsoCitta, percorsoLocale } from "@/content/citta";
import { notaMetodo } from "@/content/dati-citta";
import { metadati } from "@/content/metadati";
import { circa, datiCittaPagina, ordinale, percento, stima } from "@/content/statistiche";
import { fonteTerritorio } from "@/content/territorio";
import { verticali } from "@/content/verticali";

// Pagina della città (/agenzie/napoli/): i dati che cambiano solo con la città.
// Stime della rilevazione sulle agenzie della città e dati Istat sulle imprese della provincia,
// con la tabella dei servizi che porta a ogni pagina servizio + città.
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
    descrizione: `Quali servizi offrono le agenzie di comunicazione, marketing e web ${a(c.nome)}, con che clienti lavorano e com'è fatto il tessuto delle imprese della provincia.`,
    percorso: percorsoCitta(c),
  });
}

function confronto(p: number, media: number): string {
  if (stima(p) === stima(media)) return "in linea";
  return p > media ? "sopra la media" : "sotto la media";
}

export default async function Pagina({ params }: PageProps<"/agenzie/[citta]">) {
  const { citta: slug } = await params;
  const c = citta.find((x) => x.slug === slug);
  const d = c ? datiCittaPagina[c.slug] : undefined;
  if (!c || !d) notFound();
  const servizi = d.servizi
    .map(([s, quota, media]) => ({ v: verticali.find((v) => v.slug === s)!, quota, media }))
    .sort((x, y) => y.quota - x.quota);
  const istat = d.istat;
  return (
    <>
      <DatiPercorso voci={[{ nome: c.nome, percorso: percorsoCitta(c) }]} />
      <Intro
        percorso={[{ nome: c.nome }]}
        titolo={{ testo: `Agenzie ${a(c.nome)}:`, evidenza: "comunicazione, marketing e web in numeri." }}
        intro={[
          ...(c.intro ?? []),
          `Il quadro delle agenzie di comunicazione, marketing e web ${a(c.nome)}: le stime di AgenziaGiusta.it sulle agenzie della città e della provincia, ricavate dall'analisi dei loro siti, e i dati Istat sulle imprese del territorio.`,
        ]}
      />

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">Le agenzie {a(c.nome)}</h2>
        <table className="dati-tabella">
          <caption className="dati-tabella__titolo">Stima AgenziaGiusta.it, rilevazione di ottobre 2026</caption>
          <tbody>
            <tr>
              <th scope="row">Sede nel comune di {c.nome}</th>
              <td>{d.inCitta >= 0.95 ? "quasi tutte" : `${stima(d.inCitta)}, le altre in provincia`}</td>
            </tr>
            <tr>
              <th scope="row">Clienti soprattutto piccole e medie imprese</th>
              <td>
                {stima(d.clienti.pmi)}: {ordinale(d.posizionePmi)} tra le dieci città (media: {stima(d.mediaClienti.pmi)})
              </td>
            </tr>
            <tr>
              <th scope="row">Clienti di ogni dimensione</th>
              <td>{stima(d.clienti.misto)}</td>
            </tr>
            <tr>
              <th scope="row">Clienti soprattutto grandi marchi</th>
              <td>{stima(d.clienti.grandi)}</td>
            </tr>
            <tr>
              <th scope="row">Agenzie con al massimo tre servizi</th>
              <td>{stima(d.fino3)}</td>
            </tr>
            <tr>
              <th scope="row">Agenzie con sette servizi o più</th>
              <td>{stima(d.almeno7)}</td>
            </tr>
          </tbody>
        </table>
        <div className="dati-locali__grafici">
          <GraficoClienti
            titolo="Con che clienti lavorano le agenzie"
            citta={c.nome}
            clienti={d.clienti}
            media={d.mediaClienti}
            didascalia=""
          />
          <GraficoQuote
            titolo="Quante agenzie offrono ogni servizio"
            voci={servizi.map((x) => ({ nome: x.v.nome, quota: x.quota }))}
            evidenza=""
            etichetta={200}
            didascalia={`Servizi delle agenzie ${a(c.nome)}`}
          />
        </div>
      </section>

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">I servizi delle agenzie {a(c.nome)}</h2>
        <table className="dati-tabella">
          <caption className="dati-tabella__titolo">Quante agenzie offrono ogni servizio: stima AgenziaGiusta.it</caption>
          <thead>
            <tr>
              <th scope="col">Tipo di agenzia</th>
              <th scope="col">{c.nome}</th>
              <th scope="col">Rispetto alle dieci città</th>
            </tr>
          </thead>
          <tbody>
            {servizi.map(({ v, quota, media }) => (
              <tr key={v.slug}>
                <th scope="row">
                  <Link href={percorsoLocale(v, c)}>{v.locale.nome}</Link>
                </th>
                <td>{stima(quota)}</td>
                <td>{confronto(quota, media)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">Le imprese della provincia di {c.nome}</h2>
        <table className="dati-tabella">
          <caption className="dati-tabella__titolo">Istat, unità locali delle imprese dell&apos;industria e dei servizi, 2024</caption>
          <tbody>
            <tr>
              <th scope="row">Unità locali in provincia</th>
              <td>{circa(istat.unita)}</td>
            </tr>
            <tr>
              <th scope="row">Addetti medi per unità locale</th>
              <td>
                {istat.addettiMedi.toLocaleString("it-IT")} (Italia: {istat.addettiMediItalia.toLocaleString("it-IT")})
              </td>
            </tr>
          </tbody>
        </table>
        <table className="dati-tabella">
          <caption className="dati-tabella__titolo">I settori con più unità locali</caption>
          <thead>
            <tr>
              <th scope="col">Settore</th>
              <th scope="col">Unità locali</th>
              <th scope="col">Peso in provincia</th>
              <th scope="col">Peso in Italia</th>
            </tr>
          </thead>
          <tbody>
            {istat.settori.map(([nome, ul, quota, italia]) => (
              <tr key={nome}>
                <th scope="row">{nome}</th>
                <td>{circa(ul)}</td>
                <td>{percento(quota)}</td>
                <td>{percento(italia)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="contenitore dati-locali">
        <h2 className="titolo-blocco">Il settore della comunicazione in provincia di {c.nome}</h2>
        <table className="dati-tabella">
          <caption className="dati-tabella__titolo">Istat, imprese registrate per attività principale, 2024</caption>
          <thead>
            <tr>
              <th scope="col">Attività</th>
              <th scope="col">Unità locali</th>
              <th scope="col">Addetti medi</th>
              <th scope="col">Quota sul totale italiano</th>
            </tr>
          </thead>
          <tbody>
            {istat.comunicazione
              .filter(([, ul]) => ul > 0)
              .map(([nome, ul, addetti, quota]) => (
                <tr key={nome}>
                  <th scope="row">{nome}</th>
                  <td>{circa(ul)}</td>
                  <td>{addetti.toLocaleString("it-IT")}</td>
                  <td>{percento(quota)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <BloccoTesto blocco={{ nota: "Il codice di attività è quello principale dichiarato al Registro delle imprese: un'agenzia di comunicazione può essere registrata, per esempio, come agenzia pubblicitaria o come studio di grafica. Le agenzie analizzate da AgenziaGiusta.it sono quelle con un sito e visibili su Google: una parte di questo mercato, la più strutturata." }} />
        <Fonti fonti={[fonteTerritorio]} />
      </section>

      <section className="contenitore dati-locali">
        <BloccoTesto blocco={{ nota: notaMetodo(c.nome) }} />
      </section>

      <BloccoQuizCompatto />
      <StrisciaAgenzie />
      <PulsanteContatti />
    </>
  );
}
