import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import lottie from "astro-integration-lottie";
// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), lottie()],
  output: "server",
  adapter: netlify(),
});
