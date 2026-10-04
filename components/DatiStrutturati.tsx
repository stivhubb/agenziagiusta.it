import { sito } from "@/content/sito";

// Dati strutturati (JSON-LD) per i motori di ricerca e gli assistenti AI.
function Script({ dati }: { dati: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dati).replace(/</g, "\\u003c") }}
    />
  );
}

// Home: chi è il sito.
export function DatiSito() {
  return (
    <Script
      dati={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${sito.url}/#organizzazione`,
            name: sito.nome,
            url: `${sito.url}/`,
            logo: `${sito.url}/icon.png`,
          },
          {
            "@type": "WebSite",
            "@id": `${sito.url}/#sito`,
            name: sito.nome,
            url: `${sito.url}/`,
            inLanguage: "it-IT",
            publisher: { "@id": `${sito.url}/#organizzazione` },
          },
        ],
      }}
    />
  );
}

// Pagine interne: percorso di navigazione (Home / pagina, oppure Home / tipo / città).
export function DatiPercorso({ voci }: { voci: { nome: string; percorso: string }[] }) {
  return (
    <Script
      dati={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${sito.url}/` },
          ...voci.map((voce, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: voce.nome,
            item: `${sito.url}${voce.percorso}`,
          })),
        ],
      }}
    />
  );
}
