import type { MetadataRoute } from "next";
import { citta, completa, percorsoLocale } from "@/content/citta";
import { percorsi, sito } from "@/content/sito";
import { completo, verticali } from "@/content/verticali";

const modificaPagineCitta = "2026-11-04";

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
  // Data di ultima modifica delle pagine tipo + città: aggiornarla quando cambiano i loro testi.
  const pagineCitta = new Set(
    verticali
      .filter(completo)
      .flatMap((v) => citta.filter((c) => completa(c.pagine?.[v.slug])).map((c) => percorsoLocale(v, c))),
  );
  return pagine.map((percorso) => ({
    url: `${sito.url}${percorso}`,
    ...(pagineCitta.has(percorso) ? { lastModified: modificaPagineCitta } : {}),
  }));
}
