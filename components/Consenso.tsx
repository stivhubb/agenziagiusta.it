"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { percorsi } from "@/content/sito";

// Consenso ai cookie di terze parti (oggi solo i video di YouTube), secondo le linee guida
// del Garante privacy del 10 giugno 2021:
// - l'avviso compare solo nelle pagine che contengono un video, perché solo lì si
//   installerebbero cookie di terze parti; finché non c'è il consenso YouTube non viene caricato
//   (la copertina è un'immagine del nostro sito, non la miniatura di YouTube);
// - "Accetta" dà il consenso; chiudere con la X equivale a rifiutare e mantiene solo i cookie tecnici;
// - la scelta si cambia in qualsiasi momento da "Preferenze cookie" nel footer;
// - dopo un rifiuto l'avviso non si ripropone per 6 mesi.
// La scelta è salvata nel browser (memoria locale): è uno strumento tecnico, non serve consenso.

type Scelta = "accettato" | "rifiutato";
type Salvata = { scelta: Scelta; data: number };

const CHIAVE = "agenziagiusta-consenso";
const DURATA = { accettato: 365, rifiutato: 183 }; // giorni

type Stato = {
  scelta: Scelta | null;
  accetta: () => void;
  rifiuta: () => void;
  riapri: () => void;
  richiedi: () => () => void;
};

const Contesto = createContext<Stato | null>(null);

function leggi(): Scelta | null {
  try {
    const s = JSON.parse(localStorage.getItem(CHIAVE) ?? "null") as Salvata | null;
    if (!s) return null;
    const giorni = (Date.now() - s.data) / 86_400_000;
    return giorni < DURATA[s.scelta] ? s.scelta : null;
  } catch {
    return null;
  }
}

function salva(scelta: Scelta) {
  try {
    localStorage.setItem(CHIAVE, JSON.stringify({ scelta, data: Date.now() } satisfies Salvata));
  } catch {
    // Memoria del browser non disponibile: la scelta vale solo per questa visita.
  }
}

export function ProviderConsenso({ children }: { children: React.ReactNode }) {
  const [scelta, setScelta] = useState<Scelta | null>(null);
  const [letta, setLetta] = useState(false);
  const [video, setVideo] = useState(0);
  const [aperto, setAperto] = useState(false);

  useEffect(() => {
    setScelta(leggi());
    setLetta(true);
  }, []);

  const decidi = useCallback((s: Scelta) => {
    salva(s);
    setScelta(s);
    setAperto(false);
  }, []);

  const valore: Stato = {
    scelta,
    accetta: () => decidi("accettato"),
    rifiuta: () => decidi("rifiutato"),
    riapri: () => setAperto(true),
    richiedi: () => {
      setVideo((n) => n + 1);
      return () => setVideo((n) => n - 1);
    },
  };

  const mostra = letta && (aperto || (video > 0 && scelta === null));

  return (
    <Contesto.Provider value={valore}>
      {children}
      {mostra && <AvvisoCookie onAccetta={valore.accetta} onChiudi={valore.rifiuta} />}
    </Contesto.Provider>
  );
}

export function useConsenso() {
  const c = useContext(Contesto);
  if (!c) throw new Error("useConsenso fuori da ProviderConsenso");
  return c;
}

function AvvisoCookie({ onAccetta, onChiudi }: { onAccetta: () => void; onChiudi: () => void }) {
  return (
    <div className="avviso-cookie" role="dialog" aria-labelledby="avviso-cookie-titolo">
      <p className="avviso-cookie__titolo" id="avviso-cookie-titolo">
        Video di YouTube
      </p>
      <p className="avviso-cookie__testo">
        I video di questa pagina sono su YouTube, che usa cookie di terze parti. Chiudendo con la X continui senza.{" "}
        <Link href={percorsi.cookie}>Cookie policy</Link>
      </p>
      <button type="button" className="pulsante avviso-cookie__accetta" onClick={onAccetta}>
        Accetta
      </button>
      <button type="button" className="avviso-cookie__chiudi" onClick={onChiudi} aria-label="Chiudi e continua senza accettare">
        ×
      </button>
    </div>
  );
}

// Link nel footer per cambiare la scelta.
export function PreferenzeCookie() {
  const { riapri } = useConsenso();
  return (
    <button type="button" className="footer__link-pulsante" onClick={riapri}>
      Preferenze cookie
    </button>
  );
}

// Video di YouTube, caricato (in modalità privacy avanzata) solo dopo il consenso.
// - Nessuna scelta: copertina del nostro sito con il tasto play; cliccarlo vale come "Accetta".
// - Rifiutato (X sull'avviso): riquadro scuro con "Accetta e guarda il video" e link a YouTube.
// - Accettato: il video.
// `copertina` è un'immagine in public/ (16:9), la stessa usata come copertina su YouTube.
export function VideoYoutube({ id, titolo, copertina }: { id: string; titolo: string; copertina: string }) {
  const { scelta, accetta, richiedi } = useConsenso();
  const [avviato, setAvviato] = useState(false);
  useEffect(() => richiedi(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const guarda = () => {
    setAvviato(true);
    accetta();
  };

  if (scelta === "accettato") {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}${avviato ? "?autoplay=1" : ""}`}
          title={titolo}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (scelta === null) {
    return (
      <button type="button" className="video video--copertina" onClick={guarda} aria-label={`Accetta e guarda il video: ${titolo}`}>
        <Image src={copertina} alt="" fill sizes="(max-width: 800px) 100vw, 760px" />
        <span className="video__play" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="video video--bloccato">
      <p className="video__titolo">{titolo}</p>
      <p className="video__testo">Il video è ospitato su YouTube, che può installare cookie di terze parti.</p>
      <button type="button" className="pulsante" onClick={guarda}>
        Accetta e guarda il video
      </button>
      <a className="video__link" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
        Oppure guardalo su YouTube
      </a>
    </div>
  );
}
