# Panda Vite transform .raw() reproduction

With `transform: true` in the `@pandacss/vite` plugin, `css(scrollFade.raw({ x: 32, inset: 56 }))` in `src/App.tsx` loses the mask styles from the custom pattern. The pattern options are rewritten as CSS declarations instead.

## Run

```sh
npm install
npm run dev
```

Open the page and inspect the rendered element. It has no `mask-image`.

Change `transform: true` to `transform: false` in `vite.config.ts`, restart the dev server, and reload. The mask appears.
