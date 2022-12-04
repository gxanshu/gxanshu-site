import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import customTheme from './src/utils/theme.json'

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  markdown: {
    shikiConfig: {
      theme: customTheme,
    },
  },
  integrations: [mdx(), tailwind(), alpinejs()],
});
