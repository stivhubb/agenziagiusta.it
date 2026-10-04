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
| `/social-media/`, `/comunicazione/`, ... | Verticali | `content/verticali.ts` (elenco, title, H1) e `content/testi-verticali/` (testi, un file per pagina) |
| `/comunicazione/milano/`, `/web-agency/roma/`, ... | Tipo + città | `content/citta.ts` |
| `/guide/come-scegliere-agenzia/` | Guida | `content/guida.ts` |
| `/brief/` | Quiz + brief | `content/quiz.ts` |
| `/come-funziona/` | Come funziona | `content/come-funziona.ts` |
| `/per-le-agenzie/` | Per le agenzie | `content/per-le-agenzie.ts` |
| `/contatti/` | Contatti | `content/contatti.ts` |
| `/privacy/` | Privacy e policy | `content/privacy.ts` |

Gli indirizzi sono quelli proposti nel documento di struttura, non ancora confermati.
Quelli delle pagine fisse stanno in `content/sito.ts`.

## Aggiungere un verticale o una città

Il tipo di agenzia è la pagina madre e le città stanno sotto ciascun tipo: ogni incrocio tra
un verticale e una città ha la sua pagina (`/web-agency/roma/`).

- **Verticale:** una voce in `content/verticali.ts` e un file di testi in `content/testi-verticali/`.
  Nascono la pagina, la scheda in home e le sue pagine per tutte le città.
- **Città:** una riga in `content/citta.ts`. Nascono le sue pagine sotto tutti i verticali
  e il link in fondo a ogni verticale.

Una pagina senza testi mostra i segnaposto, ha il `noindex` e resta fuori dalla sitemap,
così non finisce su Google finché non è scritta. Quando i testi ci sono, entra in sitemap da sola.
I testi di una pagina tipo + città stanno in `content/citta.ts`, nel campo `pagine` della città.

## Title, H1 e description

Ogni pagina ha il suo H1 (`titolo`) e i suoi `seo.title` e `seo.description` nel file di contenuto:
title entro 60 caratteri, description entro 155. Per le pagine tipo + città seguono uno schema
unico, in `content/citta.ts`.

## Segnaposto

I dati mancanti sono tra parentesi quadre e restano visibili nel sito. Ragione sociale,
partita IVA ed email stanno in `content/sito.ts`; gli altri sono nei testi delle singole pagine.

## Quiz e brief

Il quiz (`/brief/`) mostra un'area alla volta, poi chiede i contatti e i due consensi obbligatori
e alla fine mostra il brief, che si può stampare o salvare in PDF.

| File | Contenuto |
|---|---|
| `content/quiz.ts` | Aree, domande e voci del quiz |
| `content/brief.ts` | Le regole che scrivono il brief dalle risposte, senza modello AI |
| `content/correzioni.ts` | Correzione degli errori più comuni nelle risposte aperte |
| `content/brief-esempio.ts` | Risposte di un'azienda inventata, per la pagina `/brief/esempio/` |

Se si rinomina una voce in `content/quiz.ts` va rinominata anche nei dizionari di `content/brief.ts`.

## Non ancora collegato

- I contatti raccolti dal quiz non vengono salvati e il brief non viene inviato via email:
  Supabase e Resend non sono collegati.
- I moduli (Per le agenzie, Contatti) si vedono ma non inviano nulla.
