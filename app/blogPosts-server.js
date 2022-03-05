import { bundleMdx } from "./compile-mdx.server";
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
    .order("created_at", {
      ascending: false,
    });
  return { posts, error };
}
