import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://upc-quant-society.github.io',
  integrations: [sitemap()],
  redirects: {
    '/en/activity': '/en/about/',
    '/en/competitions': '/en/projects/',
    '/en/events': '/en/about/',
    '/en/team': '/en/about/',
    '/en/collaborate': '/en/contact/',
    '/en/join': '/en/contact/',
    '/ca/activitat': '/ca/associacio/',
    '/ca/competicions': '/ca/projectes/',
    '/ca/esdeveniments': '/ca/associacio/',
    '/ca/equip': '/ca/associacio/',
    '/ca/collabora': '/ca/contacte/',
    '/ca/participa': '/ca/contacte/',
  },
});
