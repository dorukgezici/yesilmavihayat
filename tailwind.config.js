/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        "base-100": "var(--background-light-rgb)",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
}
