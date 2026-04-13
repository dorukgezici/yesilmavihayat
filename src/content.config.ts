import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    source: z.string(),
    url: z.url(),
    img: z.string(),
    date: z.coerce.date(),
    title: z.string(),
  }),
});

const storiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  stories: storiesCollection,
};
