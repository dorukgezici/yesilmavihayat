const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        charmonman: ["Charmonman", ...defaultTheme.fontFamily.sans],
        gotu: ["Gotu", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        yesilmavihayat: {
          primary: "rgb(127, 193, 198)",
          secondary: "#fef08a",
          accent: "#14b8a6",
          neutral: "#374151",
          "base-100": "rgb(186, 223, 222)",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
