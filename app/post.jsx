import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { bundleMDX } from "./compile-mdx.server";
import { slugify } from "./utils/slugify";

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

  return {};
}

export async function getPosts(posts) {
  return Promise.all(
    posts.map(async (file) => {
      const { attributes } = parseFrontMatter(JSON.parse(file));
      console.log(attributes.title);
      invariant(
        isValidPostAttributes(attributes),
        `${slugify(attributes.title)} has bad meta data!`
      );

      return {
        slug: slugify(attributes.title).replace(/\.mdx$/, ""),
        title: attributes.title,
        banner: attributes.banner,
        date: attributes.date,
        description: attributes.description,
        tags: attributes.tags,
      };
    })
  );
}
