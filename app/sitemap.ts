import type { MetadataRoute } from "next";
import { citta, completa, percorsoLocale } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { completo, verticali } from "@/content/verticali";

// Sitemap generata dagli elenchi: verticali e pagine tipo + città entrano solo quando
// sono complete (quelle con i segnaposto hanno il noindex e restano fuori).
export default function sitemap(): MetadataRoute.Sitemap {
  const pagine = [
    ...Object.values(percorsi),
    ...verticali.filter(completo).map((v) => `/${v.slug}/`),
    ...verticali
      .filter(completo)
      .flatMap((v) =>
        citta.filter((c) => completa(c.pagine?.[v.slug])).map((c) => percorsoLocale(v, c)),
      ),
  ];
  return pagine.map((percorso) => ({ url: `${sito.url}${percorso}` }));
}
