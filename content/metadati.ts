import type { Metadata } from "next";
import { sito } from "./sito";

// Metadati di una pagina: title, description, canonical e anteprima per le condivisioni.
// - titolo: senza il nome del sito, che viene aggiunto in automatico (tranne con titoloIntero)
// - percorso: l'indirizzo della pagina, per il canonical ("/milano/")
// - indicizza: false per le pagine che non devono finire su Google
export function metadati({
  titolo,
  titoloIntero,
  descrizione,
  percorso,
  indicizza = true,
}: {
  titolo: string;
  titoloIntero?: boolean;
  descrizione?: string;
  percorso: string;
  indicizza?: boolean;
}): Metadata {
  return {
    title: titoloIntero ? { absolute: titolo } : titolo,
    description: descrizione,
    alternates: { canonical: percorso },
    openGraph: {
      title: titolo,
      description: descrizione,
      url: percorso,
      siteName: sito.nome,
      locale: "it_IT",
      type: "website",
      // Immagine di anteprima uguale per tutte le pagine: app/opengraph-image.png
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${sito.nome}: l'agenzia giusta si trova con un buon brief.`,
        },
      ],
    },
    robots: indicizza ? undefined : { index: false },
  };
}
