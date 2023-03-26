import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-modern-personal-website.netlify.app",
  integrations: [ tailwind()],
});
