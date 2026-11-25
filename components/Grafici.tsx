import type { Clienti } from "@/content/statistiche";

// Grafici delle pagine servizio + città, disegnati in SVG lato server (niente librerie esterne).
// La didascalia va nell'aria-label: i numeri sono già nel testo e nella tabella della pagina.

const MAGENTA = "var(--magenta)";
const GRIGIO = "var(--bordo-su-sezione)";

// Quota di agenzie che offrono il servizio, città per città, con la città della pagina evidenziata.
export function GraficoQuote({
  titolo,
  voci,
  evidenza,
  didascalia,
}: {
  titolo: string;
  voci: { nome: string; quota: number }[];
  evidenza: string;
  didascalia: string;
}) {
  const ordinate = [...voci].sort((a, b) => b.quota - a.quota);
  const riga = 30;
  const etichetta = 92;
  const larghezza = 560;
  const barra = larghezza - etichetta - 64;
  const altezza = ordinate.length * riga;
  return (
    <figure className="grafico">
      <figcaption className="grafico__titolo">{titolo}</figcaption>
      <svg viewBox={`0 0 ${larghezza} ${altezza}`} role="img" aria-label={didascalia || titolo} className="grafico__svg">
        {ordinate.map((v, i) => {
          const y = i * riga;
          const w = Math.max(2, v.quota * barra);
          const attiva = v.nome === evidenza;
          return (
            <g key={v.nome}>
              <text x={etichetta - 10} y={y + 19} textAnchor="end" className={attiva ? "grafico__etichetta grafico__etichetta--attiva" : "grafico__etichetta"}>
                {v.nome}
              </text>
              <rect x={etichetta} y={y + 6} width={w} height={18} rx={4} fill={attiva ? MAGENTA : GRIGIO} />
              <text x={etichetta + w + 8} y={y + 19} className="grafico__valore">
                {Math.round(v.quota * 10)}/10
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

// Tipo di clienti: la città della pagina contro la media delle dieci città.
export function GraficoClienti({
  titolo,
  citta,
  clienti,
  media,
  didascalia,
}: {
  titolo: string;
  citta: string;
  clienti: Clienti;
  media: Clienti;
  didascalia: string;
}) {
  const righe = [
    { nome: citta, c: clienti },
    { nome: "Media dieci città", c: media },
  ];
  const parti: { chiave: keyof Omit<Clienti, "n">; nome: string; colore: string }[] = [
    { chiave: "pmi", nome: "Soprattutto PMI", colore: MAGENTA },
    { chiave: "misto", nome: "Aziende di ogni dimensione", colore: "#e7a5bf" },
    { chiave: "grandi", nome: "Soprattutto grandi marchi", colore: GRIGIO },
  ];
  const etichetta = 150;
  const larghezza = 560;
  const barra = larghezza - etichetta - 10;
  return (
    <figure className="grafico">
      <figcaption className="grafico__titolo">{titolo}</figcaption>
      <svg viewBox={`0 0 ${larghezza} 84`} role="img" aria-label={didascalia || titolo} className="grafico__svg">
        {righe.map((r, i) => {
          let x = etichetta;
          const y = i * 40;
          return (
            <g key={r.nome}>
              <text x={etichetta - 10} y={y + 22} textAnchor="end" className={i === 0 ? "grafico__etichetta grafico__etichetta--attiva" : "grafico__etichetta"}>
                {r.nome}
              </text>
              {parti.map((p) => {
                const w = r.c[p.chiave] * barra;
                const rect = <rect key={p.chiave} x={x} y={y + 8} width={w} height={22} fill={p.colore} />;
                x += w;
                return rect;
              })}
            </g>
          );
        })}
      </svg>
      <ul className="grafico__legenda">
        {parti.map((p) => (
          <li key={p.chiave}>
            <span style={{ background: p.colore }} aria-hidden="true" />
            {p.nome}
          </li>
        ))}
      </ul>
    </figure>
  );
}
