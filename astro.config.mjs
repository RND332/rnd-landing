import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import { shield } from '@kindspells/astro-shield';
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    shield({}),
    playformCompress(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })],
  site: 'https://rnd332.com',
  build: {
    inlineStylesheets: 'always'
  }
});