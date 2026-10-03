import type { MetadataRoute } from "next";
import { sito } from "@/content/sito";

// Accesso aperto a tutti i crawler, compresi quelli degli assistenti AI.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${sito.url}/sitemap.xml`,
  };
}
