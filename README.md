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

Una pagina a cui manca un testo mostra i segnaposto, ha il `noindex` e resta fuori dalla
sitemap, così non finisce su Google finché non è scritta. Quando i testi ci sono, entra in
sitemap da sola.

### Pagina di un verticale

Quattro parti: l'intro con il primo blocco di testo (mercato, costi, cosa fa, domande
frequenti), il blocco quiz, le attività e lavorazioni, i link alle città. Mercato, costi e
domande stanno nel file del verticale in `content/testi-verticali/`:

```ts
mercato: {
  testo: ["Primo paragrafo."],
  fonti: [{ nome: "Nome dell'ente", url: "https://..." }],
},
costi: {
  testo: ["Fasce di costo, generiche."],
  nota: "Fasce elaborate da AgenziaGiusta.it su listini pubblici di agenzie, ottobre 2026.",
},
domande: [{ domanda: "Domanda?", risposta: "Risposta." }],
```

Il verticale va su Google quando ha tutti e tre.

### Pagina tipo + città

Quattro blocchi: l'intro (mercato locale con le fonti, poi i costi), il blocco quiz, cosa fa
quel tipo di agenzia con le domande frequenti, l'elenco delle agenzie di quel tipo nella città.
Costi, cosa fa e domande vengono dal verticale e sono uguali in tutte le città. Mercato locale
ed elenco stanno in `content/citta.ts`, nel campo `pagine` della città:

```ts
pagine: {
  "seo-sem": {
    testo: ["Primo paragrafo.", "Secondo paragrafo."],
    fonti: [{ nome: "Nome dell'ente", url: "https://..." }],
    agenzie: [{ nome: "Nome agenzia", url: "https://...", comune: "Milano" }],
  },
}
```

La pagina va su Google quando ha il testo, almeno un'agenzia e il verticale completo. L'elenco
esce in ordine alfabetico.

Come fonti si citano per nome solo enti e associazioni. I dati presi da aziende e agenzie si
aggregano da più fonti e si presentano come dato del sito, con la nota che lo dice.

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
