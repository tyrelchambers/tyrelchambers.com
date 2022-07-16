import React from "react";
import { supabase } from "~/supabase.server";

export async function getPost(slug) {
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkRehype } = await import("remark-rehype");
  const { default: rehypeReact } = await import("rehype-react");

  const { unified } = await import("unified");

  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("slug", slug)
    .single();

  const markdown = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement: React.createElement,
    })
    .use(rehypeStringify)
    .process(post.markdown);

  return {
    post,
    error,
    markdown: markdown.value,
  };
}

export async function getPostById(id) {
  const { default: rehypeStringify } = await import("rehype-stringify");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkRehype } = await import("remark-rehype");

  const { unified } = await import("unified");

  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", id)
    .single();

  const markdown = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(post.markdown);

  return { ...post, error, markdown: markdown.value };
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

export async function triggerView(id) {
  const { data } = await supabase.from("posts").select().eq("id", id).single();
  await supabase
    .from("posts")
    .update({
      views: data.views + 1,
    })
    .eq("id", id);
}
