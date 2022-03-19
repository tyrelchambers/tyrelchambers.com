import { bundleMdx } from "./compile-mdx.server";
import { devToPublishedArticles } from "~/api/devToPublishedArticles";
import { getHashnodeStats } from "./api/getHashnodeStats";
import { supabase } from "~/supabase.server";

export async function getPost(slug) {
  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("slug", slug)
    .single();

  const { code: markdown } = await bundleMdx({
    source: post.markdown,
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      return options;
    },
  });

  return { post, error, markdown };
}

export async function getPostById(id) {
  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", id)
    .single();

  const { code: markdown } = await bundleMdx({
    source: post.markdown,
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      return options;
    },
  });

  return { ...post, error, markdown };
}
export async function getPosts() {
  const { body: posts, error } = await supabase
    .from("posts")
    .select()
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });
  return { posts, error };
}

export async function getDevToStats() {
  const articles = await devToPublishedArticles();
  const stats = articles.data
    .map((art) => ({
      comments_count: art.comments_count,
      public_reactions_count: art.public_reactions_count,
      positive_reactions_count: art.positive_reactions_count,
      page_views_count: art.page_views_count,
    }))
    .reduce((acc, curr) => {
      acc.comments_count += curr.comments_count;
      acc.public_reactions_count += curr.public_reactions_count;
      acc.positive_reactions_count += curr.positive_reactions_count;
      acc.page_views_count += curr.page_views_count;
      return acc;
    });

  return stats;
}

export async function hashNodeStats() {
  const posts = await getHashnodeStats();

  const stats = posts
    .map((post) => ({
      totalReactions: post.totalReactions,
      replyCount: post.replyCount,
      responseCount: post.responseCount,
    }))
    .reduce((acc, curr) => {
      acc.totalReactions += curr.totalReactions;
      acc.replyCount += curr.replyCount;
      acc.responseCount += curr.responseCount;
      return acc;
    });

  return stats;
}
