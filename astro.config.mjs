import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://rnd332.com',
  build: {
     inlineStylesheets: 'always',
  },
  image: {
    service: passthroughImageService()
  }
});