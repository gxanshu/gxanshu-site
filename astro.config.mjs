import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import customTheme from "./src/utils/theme.json";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./scripts/rehype-autolink-config";

// https://astro.build/config
export default defineConfig({
  site: "https://codenanshu.in/",
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
    preact({
      compat: true,
    }),
    prefetch({
      selector: "a[href^='/']",
    }),
  ],
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: customTheme,
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
  },
});
