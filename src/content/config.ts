// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      //
      isDraft: z.boolean(),
      sortOrder: z.number().default(0),
      image: z
        .object({
          src: image().refine((img) => img.width >= 1080, {
            message: "Cover image must be at least 1080 pixels wide!",
          }),
          alt: z.string(),
        })
        .optional(),
      language: z.union([z.literal("sv"), z.literal("en")]),
      // An optional frontmatter property. Very common!
      footnote: z.string().optional(),
      // In frontmatter, dates written without quotes around them are interpreted as Date objects
      publishDate: z.date(),
      // You can also transform a date string (e.g. "2022-07-08") to a Date object
      // publishDate: z.string().transform((str) => new Date(str)),
      // Advanced: Validate that the string is also an email
      authorContact: z.string().email(),
      // Advanced: Validate that the string is also a URL
      // ! canonicalURL: z.string().url(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
