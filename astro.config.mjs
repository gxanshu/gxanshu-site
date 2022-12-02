import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
  integrations: [mdx(), tailwind(), alpinejs()],
});
