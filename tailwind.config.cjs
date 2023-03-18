/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      kanit: "Kanit, sans-serif",
    },
    extend: {
      colors: {
        "main-color": "#1C1C1C",
        "second-color": "#BB000E",
        "third-color": "#161616",
        "fouth-color": "#E31C25",
      },
    },
  },
  plugins: [],
};
