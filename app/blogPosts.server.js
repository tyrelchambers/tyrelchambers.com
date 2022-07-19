import { bundleMDX } from "mdx-bundler";
import React from "react";
import { supabase } from "~/supabase.server";

export async function getPost(slug) {
  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("slug", slug)
    .single();

  const { code } = await bundleMDX({
    source: post.markdown,
  });

  return {
    post,
    error,
    markdown: code,
  };
}

export async function getPostById(id) {
  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("id", id)
    .single();

  const { code } = await bundleMDX({
    source: post.markdown,
  });

  return { ...post, error, markdown: code };
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

export async function likePost(ipAddress, slug) {
  await supabase.from("PostLikes").insert({
    slug,
    ip_address: ipAddress,
  });
}

export async function dislikePost(ipAddress, slug) {
  await supabase
    .from("PostLikes")
    .delete()
    .eq("slug", slug)
    .eq("ip_address", ipAddress);
}

export async function getLikes(ipAddress, slug) {
  const { body: liked } = await supabase
    .from("PostLikes")
    .select()
    .eq("slug", slug)
    .eq("ip_address", ipAddress)
    .limit(1)
    .single();

  return liked;
}
