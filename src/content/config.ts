import { z, defineCollection } from "astro:content";

const presentationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  "presentations-telesis-20240209": presentationCollection,
};
