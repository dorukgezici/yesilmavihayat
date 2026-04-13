import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    source: z.string(),
    url: z.url(),
    img: z.string(),
    date: z.date(),
    title: z.string(),
  }),
});

const storiesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  stories: storiesCollection,
};
