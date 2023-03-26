/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  daisyui: {
    themes: ["halloween", "acid"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
