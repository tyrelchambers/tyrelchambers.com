import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";

const caseStudyiesPath = `./case-studies-md/`;

export const getCaseStudy = async (slug) => {
  const filepath = path.join(caseStudyiesPath, slug + ".mdx");
  const file = await fs.readFileSync(filepath, "utf-8");

  const { code, frontmatter } = await bundleMDX({
    source: file,
    cwd: caseStudyiesPath,
  });

  return { slug, title: frontmatter.title, code };
};
