import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://linhngkh.github.io/linh-portfolio/",

  integrations: [tailwind()],
});
