import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://upc-quant-society.github.io',
  integrations: [sitemap()],
  redirects: {
    '/en/resources/library': '/en/resources/',
    '/ca/recursos/biblioteca': '/ca/recursos/',
    '/en/about': '/en/',
    '/en/contact': '/en/#contact',
    '/en/activity': '/en/',
    '/en/competitions': '/en/projects/',
    '/en/events': '/en/',
    '/en/team': '/en/',
    '/en/collaborate': '/en/#contact',
    '/en/join': '/en/#contact',
    '/ca/associacio': '/ca/',
    '/ca/contacte': '/ca/#contact',
    '/ca/activitat': '/ca/',
    '/ca/competicions': '/ca/projectes/',
    '/ca/esdeveniments': '/ca/',
    '/ca/equip': '/ca/',
    '/ca/collabora': '/ca/#contact',
    '/ca/participa': '/ca/#contact',
  },
});
