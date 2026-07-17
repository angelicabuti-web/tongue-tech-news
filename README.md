# Tongue Tech News

Applicazione JavaScript sviluppata per visualizzare le notizie tecnologiche più recenti tramite le API di Hacker News.

## Descrizione

Tongue Tech News recupera gli ID delle ultime notizie pubblicate su Hacker News e mostra inizialmente i primi 10 contenuti disponibili.

## Demo online

Puoi provare l’applicazione qui:

https://legendary-fairy-0b5d54.netlify.app/

Ogni notizia presenta:

- titolo;
- sito di provenienza;
- data e ora di pubblicazione;
- link cliccabile alla pagina originale.

Attraverso il pulsante **Load more**, l’utente può caricare progressivamente altre 10 notizie.

## Tecnologie utilizzate

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Vitest
- Hacker News API

## Architettura

Il progetto utilizza una struttura modulare per separare le diverse responsabilità:

- `hackerNewsApi.js`: comunicazione con le API;
- `newsUtils.js`: formattazione e gestione dei dati;
- `newsView.js`: creazione e aggiornamento dell’interfaccia;
- `main.js`: coordinamento generale dell’applicazione.

Questa organizzazione applica il **Module Pattern** e il principio di separazione delle responsabilità.

## Avvio del progetto

Installare le dipendenze:

```bash
npm install

```

Avviare il progetto in modalità sviluppo:

```bash
npm run dev
```

## Test

Per eseguire i test automatici:

```bash
npm test
```

I test, realizzati con Vitest, verificano la formattazione delle date, la gestione delle fonti e la creazione dei link delle notizie.

## Build

Per creare la versione ottimizzata per la produzione:

```bash
npm run build
```
