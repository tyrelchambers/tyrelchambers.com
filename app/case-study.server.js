import fs from "fs";
import { marked } from "marked";
import parseFrontMatter from "front-matter";
import path from "path";

const caseStudyiesPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "app",
  "case-studies-md"
);

export const getCaseStudy = async (slug) => {
  const filepath = path.join(caseStudyiesPath, slug + ".mdx");
  const file = await fs.readFileSync(filepath);

  const { attributes, body } = parseFrontMatter(file.toString());

  return { slug, title: attributes.title, markdown: marked(body) };
};
