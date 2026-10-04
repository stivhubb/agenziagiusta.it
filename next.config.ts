import type { NextConfig } from "next";

// Le prime quattro pagine città stavano alla radice (/milano/): ora ogni città sta sotto
// un tipo di agenzia, e i vecchi indirizzi portano alla pagina sotto Comunicazione.
const vecchieCitta = ["milano", "roma", "padova", "bergamo"];

const nextConfig: NextConfig = {
  // Indirizzi con la barra finale, come nel documento di struttura (/brief/, /comunicazione/).
  trailingSlash: true,
  redirects() {
    return vecchieCitta.map((slug) => ({
      source: `/${slug}`,
      destination: `/comunicazione/${slug}/`,
      permanent: true,
    }));
  },
};

export default nextConfig;
