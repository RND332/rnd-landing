import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  site: 'https://rnd332.com',
  build: {
    inlineStylesheets: 'always'
  },
  image: {
    service: passthroughImageService()
  }
});