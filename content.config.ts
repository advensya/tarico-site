import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),

    // blog: defineCollection({
    //   type: "page",
    //   source: "blog/**/*.md",
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),

    // others: defineCollection({
    //   type: "page",
    //   source: "others/*.md",
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),

    // products: defineCollection({
    //   type: "page",
    //   source: "products/*.md",
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),
  },
});
