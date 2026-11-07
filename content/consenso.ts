// Categorie di cookie che richiedono il consenso. Una categoria è "attiva" solo se il sito la usa davvero:
// le categorie spente non compaiono nell'avviso né nella cookie policy.
//
// Per accendere le campagne basta impostare su Vercel (Environment Variables, Production) uno o entrambi:
//   NEXT_PUBLIC_META_PIXEL_ID    ID del pixel di Meta (Gestione eventi)
//   NEXT_PUBLIC_GOOGLE_ADS_ID    ID del tag di Google Ads, nella forma AW-XXXXXXXXX
// e ripubblicare. Se si aggiunge una categoria nuova, l'avviso viene richiesto di nuovo a tutti,
// perché il consenso dato prima non la copre.

export const idMetaPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const idGoogleAds = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

export type IdCategoria = "video" | "marketing";

export type Categoria = {
  id: IdCategoria;
  nome: string;
  descrizione: string;
  // Se vale per tutto il sito l'avviso compare in ogni pagina; altrimenti solo dove serve (pagine con video).
  tuttoIlSito: boolean;
  attiva: boolean;
};

const fornitoriMarketing = [idMetaPixel && "Meta", idGoogleAds && "Google"].filter(Boolean).join(" e ");

export const categorie: Categoria[] = [
  {
    id: "video",
    nome: "Video di YouTube",
    descrizione:
      "Per guardare i video direttamente nelle pagine. YouTube (Google) installa i suoi cookie, anche per finalità pubblicitarie proprie.",
    tuttoIlSito: false,
    attiva: true,
  },
  {
    id: "marketing",
    nome: "Marketing",
    descrizione: `Strumenti di ${fornitoriMarketing || "terze parti"} per misurare le nostre campagne pubblicitarie e mostrare i nostri annunci a chi ha già visitato il sito.`,
    tuttoIlSito: true,
    attiva: Boolean(idMetaPixel || idGoogleAds),
  },
];

export const categorieAttive = categorie.filter((c) => c.attiva);
export const marketingAttivo = categorie.some((c) => c.id === "marketing" && c.attiva);
