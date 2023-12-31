import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import decapCmsOauth from "astro-decap-cms-oauth";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yesilmavihayat.com",
  integrations: [tailwind(), sitemap(), decapCmsOauth()],
  output: "hybrid",
  adapter: vercel({ webAnalytics: { enabled: true }, speedInsights: { enabled: true } }),
  image: { service: squooshImageService() },
});
