import { bundleMdx } from "./compile-mdx.server";
import { supabase } from "~/supabase.server";

export async function getPost(slug) {
  const { body: post } = await supabase
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

  return { post, markdown };
}

export async function getPosts() {
  const { body: posts } = await supabase.from("posts").select();
  return posts;
}
