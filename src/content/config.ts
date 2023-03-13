import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const resourceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});
const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    role: z.string(),
    projectDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = {
  blog: blogCollection,
  resources: resourceCollection,
  work: workCollection,
};
