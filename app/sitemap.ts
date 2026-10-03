import type { MetadataRoute } from "next";
import { citta } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { verticali } from "@/content/verticali";

// Sitemap generata dagli elenchi: verticali e città entrano solo quando hanno i testi
// (quelle con i segnaposto hanno il noindex e restano fuori).
export default function sitemap(): MetadataRoute.Sitemap {
  const pagine = [
    ...Object.values(percorsi),
    ...[...verticali, ...citta].filter((voce) => voce.pagina).map((voce) => `/${voce.slug}/`),
  ];
  return pagine.map((percorso) => ({ url: `${sito.url}${percorso}` }));
}
