import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./scripts/rehype-autolink-config";

// https://astro.build/config
export default defineConfig({
  site: "https://gxanshu.in/",
  integrations: [
    mdx({
      optimize: true,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-light",
      },
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
      gfm: true,
    }),
    tailwind(),
    sitemap(),
    preact({
      compat: true,
    }),
  ],
});
