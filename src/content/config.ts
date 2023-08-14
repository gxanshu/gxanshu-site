import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  // Type-check data using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    image: z.string(),
  }),
});

const notesCollection = defineCollection({
  // Type-check data using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
  }),
});

const projectCollection = defineCollection({
  // Type-check data using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    pubDate: z.string(),
    logo: z.string(),
    status: z.string(),
    author: z.string(),
    techStack: z.array(z.string()),
    sourceCode: z.string().optional(),
    download: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
  projects: projectCollection,
};
