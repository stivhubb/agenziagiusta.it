import type { MetadataRoute } from "next";
import { citta, percorsoLocale } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { verticali } from "@/content/verticali";

// Sitemap generata dagli elenchi: verticali e pagine tipo + città entrano solo quando
// hanno i testi (quelle con i segnaposto hanno il noindex e restano fuori).
export default function sitemap(): MetadataRoute.Sitemap {
  const pagine = [
    ...Object.values(percorsi),
    ...verticali.filter((v) => v.pagina).map((v) => `/${v.slug}/`),
    ...verticali.flatMap((v) =>
      citta.filter((c) => c.pagine?.[v.slug]).map((c) => percorsoLocale(v, c)),
    ),
  ];
  return pagine.map((percorso) => ({ url: `${sito.url}${percorso}` }));
}
