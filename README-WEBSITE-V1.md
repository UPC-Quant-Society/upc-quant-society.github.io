# UPC Quant Society — Website V1

Aquest paquet conté la primera versió multipàgina i bilingüe de la web.

## Què substitueix

Copia aquestes carpetes a l’arrel del repositori:

- `src/`
- `public/favicon.svg`

No cal modificar:

- `package.json`
- `astro.config.mjs`
- `.github/workflows/deploy.yml`

## Instal·lació al Codespace

1. Puja i descomprimeix el paquet a l’arrel del repositori.
2. Confirma que els fitxers han quedat dins de `src/` i `public/`.
3. Executa:

```bash
npm run build
npm run dev
```

4. Revisa especialment:

- el correu de contacte a `src/data/site.ts`
- els noms i descripcions de l’equip
- l’estat legal i institucional de l’associació
- les línies de projectes que es volen publicar

5. Quan estigui revisat:

```bash
git add .
git commit -m "Build bilingual multi-page website"
git push origin main
```

## Rutes principals

Català:

- `/ca/`
- `/ca/associacio/`
- `/ca/activitat/`
- `/ca/projectes/`
- `/ca/competicions/`
- `/ca/esdeveniments/`
- `/ca/recursos/`
- `/ca/collabora/`
- `/ca/equip/`
- `/ca/participa/`
- `/ca/contacte/`

English:

- `/en/`
- `/en/about/`
- `/en/activity/`
- `/en/projects/`
- `/en/competitions/`
- `/en/events/`
- `/en/resources/`
- `/en/collaborate/`
- `/en/team/`
- `/en/join/`
- `/en/contact/`

## Edició de contingut

La major part del text i de les rutes es troba en un únic fitxer:

```text
src/data/site.ts
```

Això permet revisar contingut en català i anglès sense tocar els components visuals.
