import type { NextConfig } from "next";

// Le prime quattro pagine città stavano alla radice (/milano/): ora ogni città sta sotto
// un tipo di agenzia, e i vecchi indirizzi portano alla pagina sotto Comunicazione.
// Bergamo non ha ancora le pagine: porta alla pagina Comunicazione.
const vecchieCitta = ["milano", "roma", "padova"];

const nextConfig: NextConfig = {
  // Indirizzi con la barra finale, come nel documento di struttura (/brief/, /comunicazione/).
  trailingSlash: true,
  redirects() {
    return [
      ...vecchieCitta.map((slug) => ({
        source: `/${slug}`,
        destination: `/comunicazione/${slug}/`,
        permanent: true,
      })),
      { source: "/bergamo", destination: "/comunicazione/", permanent: true },
      // Dal 20 ottobre 2026 la pagina video ha l'indirizzo con la parola chiave.
      { source: "/video-foto", destination: "/societa-produzione-video-foto/", permanent: true },
      {
        source: "/video-foto/:citta",
        destination: "/societa-produzione-video-foto/:citta/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
