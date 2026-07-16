# UPC Quant Society Website

## Project

- Static institutional website built with Astro 7 and TypeScript.
- The website is bilingual: Catalan and English.
- Catalan routes live under `/ca/`.
- English routes live under `/en/`.
- Shared content is primarily stored in `src/data/site.ts`.
- Shared visual styles are stored in `src/styles/global.css`.

## Working rules

- Do not invent projects, partners, events, achievements, statistics or institutional relationships.
- Clearly distinguish confirmed activity from planned or proposed activity.
- Preserve the existing institutional and technical tone.
- Avoid generic AI marketing language and exaggerated claims.
- Do not redesign the entire website unless explicitly requested.
- Keep Catalan and English versions synchronized.
- When changing a route, verify its equivalent route in the other language.
- Preserve the current dark visual identity:
  - Stone Black `#111111`
  - Graphite `#1A1A1A`
  - Dark Stone `#242424`
  - Off White `#F4F1EA`
  - Warm Grey `#B8B5AD`
  - Border Grey `#3A3A3A`
  - Signal Green `#39FF88`
- Use Inter for general text and IBM Plex Mono for technical labels.
- Do not add gradients, neon effects, candlestick decorations or generic Wall Street imagery.
- Do not add dependencies without explaining why they are needed.
- Do not edit generated directories: `dist/`, `.astro/` or `node_modules/`.

## Validation

After making changes:

1. Run `npm run build`.
2. Confirm that both `/ca/` and `/en/` are generated.
3. Check affected internal links.
4. Review mobile layouts when changing CSS or navigation.
5. Summarize modified files and any unresolved issues.
6. Show the diff before committing unless explicitly asked to commit.

## Git

- Prefer small, focused commits.
- Do not push directly to `main` unless explicitly requested.
- Do not modify the GitHub Pages workflow unless deployment is part of the task.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
