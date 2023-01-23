import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import customTheme from "./src/utils/theme.json";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./scripts/rehype-autolink-config";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://codenanshu.in",
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      filter: (page) => page !== "/admin",
    }),
    partytown({
      config: {
        forward: ["datalayer.push"],
      },
    }),
    preact({ compat: true }),
  ],

  markdown: {
    gfm: true,
    shikiConfig: {
      theme: customTheme,
    },
    rehypePlugins: [
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
});
