# AgenziaGiusta.it

Sito in Next.js (App Router, TypeScript), riscritto a partire dalla simulazione grafica.
Tutte le pagine sono generate in modo statico: il contenuto è già nell'HTML.

## Avvio

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
```

## Dove sono le cose

| Cartella | Contenuto |
|---|---|
| `content/` | Tutti i testi e i dati. Si cambiano qui, senza toccare la struttura |
| `components/` | Moduli condivisi: header, blocco quiz (completo e compatto), striscia agenzie, footer, pulsante contatti |
| `app/` | Le pagine e il foglio di stile (`globals.css`, con colori e font in cima) |

## Pagine

| Indirizzo | Pagina | Testi |
|---|---|---|
| `/` | Home | `content/home.ts` |
| `/social-media/`, `/pubblicita/`, ... | Verticali | `content/verticali.ts` |
| `/milano/`, `/roma/`, ... | Città | `content/citta.ts` |
| `/guide/come-scegliere-agenzia/` | Guida | `content/guida.ts` |
| `/brief/` | Quiz + brief | `content/quiz.ts` |
| `/come-funziona/` | Come funziona | `content/come-funziona.ts` |
| `/per-le-agenzie/` | Per le agenzie | `content/per-le-agenzie.ts` |
| `/contatti/` | Contatti | `content/contatti.ts` |
| `/privacy/` | Privacy e policy | `content/privacy.ts` |

Gli indirizzi sono quelli proposti nel documento di struttura, non ancora confermati.
Quelli delle pagine fisse stanno in `content/sito.ts`.

## Aggiungere un verticale o una città

Si aggiunge una voce all'elenco in `content/verticali.ts` o `content/citta.ts`: la pagina,
la scheda in home (verticali) e il link nel footer (città) si creano da soli.

Una voce senza testi (`pagina`) mostra i segnaposto, ha il `noindex` e resta fuori dalla sitemap,
così non finisce su Google finché non è scritta. Quando i testi ci sono, entra in sitemap da sola.

## Title, H1 e description

Ogni pagina ha il suo H1 (`titolo`) e i suoi `seo.title` e `seo.description` nel file di contenuto:
title entro 60 caratteri, description entro 155. Per le città seguono uno schema unico,
in `content/citta.ts`.

## Segnaposto

I dati mancanti sono tra parentesi quadre e restano visibili nel sito. Ragione sociale,
partita IVA ed email stanno in `content/sito.ts`; gli altri sono nei testi delle singole pagine.

## Fuori dal primo giro

- I moduli (Per le agenzie, Contatti) si vedono ma non inviano nulla.
- Il quiz scorre tra i cinque passi ma non salva e non invia: domande, contenuto del brief,
  raccolta dei contatti e consenso sono da definire.
- Supabase e Resend non sono ancora collegati.
