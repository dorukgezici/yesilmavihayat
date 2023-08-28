import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import decapCmsGithub from "astro-decap-cms-github";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yesilmavihayat.com",
  integrations: [tailwind(), sitemap(), decapCmsGithub()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  output: "server",
  adapter: process.env.VERCEL ? vercel() : netlify(),
});
