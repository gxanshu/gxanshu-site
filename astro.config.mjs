import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import customTheme from "./src/utils/theme.json";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://codenanshu.in",
  markdown: {
    shikiConfig: {
      theme: customTheme,
    },
  },
  integrations: [
    mdx(),
    tailwind(),
    alpinejs(),
    sitemap({
      filter: (page) => page !== "/admin",
    }),
    partytown({
      config: {
        forward: ["datalayer.push"],
      },
    }),
  ],
});
