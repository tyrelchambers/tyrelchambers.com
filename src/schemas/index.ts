import { z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  cover: z.string(),
});
export type Blog = z.infer<typeof blogSchema>;

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  image: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
