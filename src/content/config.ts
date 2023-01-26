import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	// Type-check data using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string(),
        image: z.string(),
	}),
});

const notesCollection = defineCollection({
	// Type-check data using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string(),
	}),
});

export const collections = {
	'blog': blogCollection,
	'notes': notesCollection
};