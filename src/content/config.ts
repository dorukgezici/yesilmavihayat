import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    source: z.string(),
    url: z.string().url(),
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
