import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
};
