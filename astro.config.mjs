import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mmotano.de',
  base: '/astro-portfolio',
  integrations: [sitemap(), tailwind()]
});