import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { shield } from "@kindspells/astro-shield";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
		shield({}),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		compress(),
	],
	site: "https://rnd332.com",
	// build: {
	//   inlineStylesheets: 'always'
	// }
});
