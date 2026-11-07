"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { categorieAttive, idGoogleAds, idMetaPixel, type IdCategoria } from "@/content/consenso";
import { percorsi } from "@/content/sito";

// Consenso ai cookie non tecnici, secondo le linee guida del Garante privacy del 10 giugno 2021:
// - finché non c'è il consenso nessuno strumento di terze parti viene caricato (video, pixel, tag);
// - primo livello: "Accetta tutti", "Personalizza" e la X; chiudere con la X equivale a rifiutare tutto;
// - secondo livello: una scelta per ogni categoria (content/consenso.ts);
// - la scelta si cambia in qualsiasi momento da "Preferenze cookie" nel footer;
// - se si rifiuta tutto, l'avviso non si ripropone per 6 mesi; se si accetta qualcosa, la scelta vale 12 mesi;
// - se si aggiunge una categoria nuova, l'avviso ricompare per chiedere quella.
// La scelta è salvata nella memoria locale del browser: strumento tecnico, non serve consenso.

type Scelte = Partial<Record<IdCategoria, boolean>>;
type Salvata = { scelte: Scelte; data: number };

const CHIAVE = "agenziagiusta-consenso-v2";
const GIORNI_CONSENSO = 365;
const GIORNI_RIFIUTO = 183;

function leggi(): Scelte | null {
  try {
    const s = JSON.parse(localStorage.getItem(CHIAVE) ?? "null") as Salvata | null;
    if (!s?.scelte) return null;
    const qualcosa = Object.values(s.scelte).some(Boolean);
    const giorni = (Date.now() - s.data) / 86_400_000;
    if (giorni > (qualcosa ? GIORNI_CONSENSO : GIORNI_RIFIUTO)) return null;
    return s.scelte;
  } catch {
    return null;
  }
}

function salva(scelte: Scelte) {
  try {
    localStorage.setItem(CHIAVE, JSON.stringify({ scelte, data: Date.now() } satisfies Salvata));
  } catch {
    // Memoria del browser non disponibile: la scelta vale solo per questa visita.
  }
}

const tutte = (valore: boolean): Scelte => Object.fromEntries(categorieAttive.map((c) => [c.id, valore]));

// Manca una scelta se c'è una categoria attiva su cui non si è mai deciso (per esempio una categoria
// aggiunta dopo, o il marketing quando si è accettato solo il video premendo play).
const manca = (s: Scelte | null, id: IdCategoria) => s?.[id] === undefined;

type Stato = {
  scelte: Scelte | null;
  consente: (id: IdCategoria) => boolean;
  accettaCategoria: (id: IdCategoria) => void;
  apriPreferenze: () => void;
  richiedi: (id: IdCategoria) => () => void;
};

const Contesto = createContext<Stato | null>(null);

export function useConsenso() {
  const c = useContext(Contesto);
  if (!c) throw new Error("useConsenso fuori da ProviderConsenso");
  return c;
}

export function ProviderConsenso({ children }: { children: React.ReactNode }) {
  const [scelte, setScelte] = useState<Scelte | null>(null);
  const [letta, setLetta] = useState(false);
  const [richieste, setRichieste] = useState<Partial<Record<IdCategoria, number>>>({});
  const [vista, setVista] = useState<"chiusa" | "avviso" | "preferenze">("chiusa");

  useEffect(() => {
    setScelte(leggi());
    setLetta(true);
  }, []);

  const decidi = useCallback((nuove: Scelte) => {
    salva(nuove);
    setScelte(nuove);
    setVista("chiusa");
  }, []);

  const valore: Stato = {
    scelte,
    consente: (id) => scelte?.[id] === true,
    // Premere play accetta solo i video: le altre categorie restano da decidere e l'avviso resta.
    accettaCategoria: (id) => decidi({ ...scelte, [id]: true }),
    apriPreferenze: () => setVista("preferenze"),
    richiedi: (id) => {
      setRichieste((r) => ({ ...r, [id]: (r[id] ?? 0) + 1 }));
      return () => setRichieste((r) => ({ ...r, [id]: (r[id] ?? 1) - 1 }));
    },
  };

  // L'avviso compare se manca una scelta e la pagina usa almeno una categoria attiva.
  const serve = categorieAttive.some((c) => manca(scelte, c.id) && (c.tuttoIlSito || (richieste[c.id] ?? 0) > 0));
  const mostraAvviso = letta && vista === "chiusa" && serve;

  return (
    <Contesto.Provider value={valore}>
      {children}
      {letta && <StrumentiMarketing attivo={scelte?.marketing === true} />}
      {mostraAvviso && (
        <AvvisoCookie
          onAccetta={() => decidi(tutte(true))}
          onPersonalizza={() => setVista("preferenze")}
          onChiudi={() => decidi({ ...tutte(false), ...scelte })}
        />
      )}
      {vista === "preferenze" && (
        <PreferenzeCookiePannello
          iniziali={{ ...tutte(false), ...scelte }}
          onSalva={decidi}
          onAccettaTutti={() => decidi(tutte(true))}
          onChiudi={() => decidi({ ...tutte(false), ...scelte })}
        />
      )}
    </Contesto.Provider>
  );
}

function elencoNomi() {
  const nomi = categorieAttive.map((c) => (c.id === "video" ? "i video di YouTube" : "le nostre campagne pubblicitarie"));
  return nomi.length > 1 ? `${nomi.slice(0, -1).join(", ")} e ${nomi.at(-1)}` : nomi[0];
}

function AvvisoCookie({
  onAccetta,
  onPersonalizza,
  onChiudi,
}: {
  onAccetta: () => void;
  onPersonalizza: () => void;
  onChiudi: () => void;
}) {
  const soloVideo = categorieAttive.length === 1 && categorieAttive[0].id === "video";
  return (
    <div className="avviso-cookie" role="dialog" aria-labelledby="avviso-cookie-titolo">
      <p className="avviso-cookie__titolo" id="avviso-cookie-titolo">
        {soloVideo ? "Video di YouTube" : "Cookie"}
      </p>
      <p className="avviso-cookie__testo">
        {soloVideo
          ? "I video di questa pagina sono su YouTube, che usa cookie di terze parti."
          : `Con il tuo consenso usiamo cookie di terze parti per ${elencoNomi()}.`}{" "}
        Chiudendo con la X continui senza.{" "}
        {!soloVideo && (
          <>
            <button type="button" className="avviso-cookie__link" onClick={onPersonalizza}>
              Personalizza
            </button>
            {" · "}
          </>
        )}
        <Link href={percorsi.cookie}>Cookie policy</Link>
      </p>
      <button type="button" className="pulsante avviso-cookie__accetta" onClick={onAccetta}>
        {soloVideo ? "Accetta" : "Accetta tutti"}
      </button>
      <button type="button" className="avviso-cookie__chiudi" onClick={onChiudi} aria-label="Chiudi e continua senza accettare">
        ×
      </button>
    </div>
  );
}

function PreferenzeCookiePannello({
  iniziali,
  onSalva,
  onAccettaTutti,
  onChiudi,
}: {
  iniziali: Scelte;
  onSalva: (s: Scelte) => void;
  onAccettaTutti: () => void;
  onChiudi: () => void;
}) {
  const [scelte, setScelte] = useState<Scelte>(iniziali);
  return (
    <div className="preferenze-cookie" role="dialog" aria-modal="true" aria-labelledby="preferenze-cookie-titolo">
      <div className="preferenze-cookie__pannello">
        <button type="button" className="avviso-cookie__chiudi" onClick={onChiudi} aria-label="Chiudi">
          ×
        </button>
        <p className="avviso-cookie__titolo" id="preferenze-cookie-titolo">
          Preferenze cookie
        </p>
        <ul className="preferenze-cookie__elenco">
          <li>
            <div>
              <strong>Tecnici</strong>
              <span>Servono al funzionamento del sito e a ricordare questa scelta. Sempre attivi.</span>
            </div>
            <input type="checkbox" checked disabled aria-label="Cookie tecnici, sempre attivi" />
          </li>
          {categorieAttive.map((c) => (
            <li key={c.id}>
              <label htmlFor={`cookie-${c.id}`}>
                <strong>{c.nome}</strong>
                <span>{c.descrizione}</span>
              </label>
              <input
                id={`cookie-${c.id}`}
                type="checkbox"
                checked={scelte[c.id] === true}
                onChange={(e) => setScelte({ ...scelte, [c.id]: e.target.checked })}
              />
            </li>
          ))}
        </ul>
        <div className="preferenze-cookie__azioni">
          <button type="button" className="pulsante pulsante--contorno pulsante--piccolo" onClick={() => onSalva(scelte)}>
            Salva le scelte
          </button>
          <button type="button" className="pulsante avviso-cookie__accetta" onClick={onAccettaTutti}>
            Accetta tutti
          </button>
        </div>
        <Link href={percorsi.cookie} className="preferenze-cookie__policy">
          Cookie policy
        </Link>
      </div>
    </div>
  );
}

// Link nel footer per cambiare la scelta.
export function PreferenzeCookie() {
  const { apriPreferenze } = useConsenso();
  return (
    <button type="button" className="footer__link-pulsante" onClick={apriPreferenze}>
      Preferenze cookie
    </button>
  );
}

// ---------- Pixel di Meta e tag di Google Ads ----------
// Caricati solo dopo il consenso alla categoria marketing (nessuno script prima della scelta).
// Google riceve anche i segnali del Consent Mode v2. Se il consenso viene revocato, il caricamento
// si ferma dalla pagina successiva; i cookie già installati si cancellano dal browser.

type Finestra = Window & {
  fbq?: ((...a: unknown[]) => void) & { queue?: unknown[][]; callMethod?: (...a: unknown[]) => void; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
  dataLayer?: unknown[];
  gtag?: (...a: unknown[]) => void;
};

function caricaScript(src: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function avviaMeta(id: string) {
  const w = window as Finestra;
  if (w.fbq) return;
  const fbq = ((...a: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...a);
    else fbq.queue!.push(a);
  }) as NonNullable<Finestra["fbq"]>;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  w.fbq = fbq;
  w._fbq = fbq;
  caricaScript("https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
}

function avviaGoogle(id: string) {
  const w = window as Finestra;
  if (w.gtag) return;
  w.dataLayer = w.dataLayer ?? [];
  w.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("consent", "default", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "denied",
  });
  w.gtag("js", new Date());
  w.gtag("config", id, { send_page_view: false });
  caricaScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
}

function StrumentiMarketing({ attivo }: { attivo: boolean }) {
  const percorso = usePathname();

  useEffect(() => {
    if (!attivo) return;
    if (idMetaPixel) avviaMeta(idMetaPixel);
    if (idGoogleAds) avviaGoogle(idGoogleAds);
  }, [attivo]);

  // Una visualizzazione di pagina a ogni cambio di pagina.
  useEffect(() => {
    if (!attivo) return;
    const w = window as Finestra;
    w.fbq?.("track", "PageView");
    if (idGoogleAds) w.gtag?.("event", "page_view", { send_to: idGoogleAds, page_path: percorso });
  }, [attivo, percorso]);

  return null;
}

// ---------- Video di YouTube ----------
// Caricato (in modalità privacy avanzata) solo dopo il consenso alla categoria video.
// - Nessuna scelta: copertina del nostro sito con il tasto play; cliccarlo vale come consenso ai video.
// - Video rifiutati: riquadro scuro con "Accetta e guarda il video" e link a YouTube.
// - Video accettati: il video.
// `copertina` è un'immagine in public/ (16:9), la stessa usata come copertina su YouTube.
export function VideoYoutube({ id, titolo, copertina }: { id: string; titolo: string; copertina: string }) {
  const { scelte, consente, accettaCategoria, richiedi } = useConsenso();
  const [avviato, setAvviato] = useState(false);
  useEffect(() => richiedi("video"), []); // eslint-disable-line react-hooks/exhaustive-deps

  const guarda = () => {
    setAvviato(true);
    accettaCategoria("video");
  };

  if (consente("video")) {
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

  if (manca(scelte, "video")) {
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
