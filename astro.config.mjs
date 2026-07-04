import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import decapCmsOauth from "astro-decap-cms-oauth";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yesilmavihayat.com",
  integrations: [sitemap(), decapCmsOauth()],
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
