# ProvenanceWidgets Web Components Starter

A minimal Vite application using ProvenanceWidgets from vanilla JavaScript.

## Getting started

```bash
git clone --branch feat/pw-v2-starter https://github.com/ProvenanceWidgets/provenance-widgets-vanilla-starter.git
cd provenance-widgets-vanilla-starter
npm install
npm run dev
```

Open the URL printed by Vite. Change the checkbox selection, then use its
footprint button to switch between Aggregate and Temporal views.

## Structure

- `index.html` declares the custom element.
- `src/main.js` registers ProvenanceWidgets, assigns structured properties,
  and listens for widget events.
- `src/styles.css` contains only starter-specific layout styles.

Arrays and objects must be assigned as JavaScript properties rather than HTML
attributes; `src/main.js` demonstrates this with `data` and `selected`.

## Build

```bash
npm run build
```

This starter installs the published `provenance-widgets` 2.x package from npm.
