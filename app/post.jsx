import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { bundleMDX } from "./compile-mdx.server";

const postsPath = path.join(__dirname, "..", "posts");

function isValidPostAttributes(attributes) {
  return attributes?.title;
}

export async function getPost(slug) {
  const filepath = path.join(postsPath, slug + ".mdx");
  const { code, frontmatter } = await bundleMDX({
    cwd: postsPath,
    file: filepath,
  });

  invariant(
    isValidPostAttributes(frontmatter),
    `Post ${filepath} is missing attributes`
  );

  return { slug, code, frontmatter };
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: attributes.title,
        banner: attributes.banner,
        date: attributes.date,
        description: attributes.description,
        tags: attributes.tags,
      };
    })
  );
}
