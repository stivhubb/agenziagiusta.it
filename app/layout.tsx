import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProviderConsenso } from "@/components/Consenso";
import { sito } from "@/content/sito";
import "./globals.css";

// Font serviti dal sito stesso, senza chiamate a Google Fonts.
const titoli = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  weight: "200 800",
  variable: "--font-titoli",
});

const testo = localFont({
  src: "./fonts/instrument-sans.woff2",
  weight: "400 700",
  variable: "--font-testo",
});

export const metadata: Metadata = {
  metadataBase: new URL(sito.url),
  title: { default: sito.nome, template: `%s | ${sito.nome}` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${titoli.variable} ${testo.variable}`}>
      <body>
        {/* Consenso ai cookie di terze parti: l'avviso compare solo nelle pagine con video di YouTube. */}
        <ProviderConsenso>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProviderConsenso>
        {/* Misurazione delle visite di Vercel: senza cookie, dati aggregati. */}
        <Analytics />
      </body>
    </html>
  );
}
