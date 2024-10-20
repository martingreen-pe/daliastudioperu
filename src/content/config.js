import { defineCollection } from 'astro:content';
import { z } from 'zod';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  }),
});

export const collections = {
  posts: posts,
};
