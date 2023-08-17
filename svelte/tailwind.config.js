/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
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
