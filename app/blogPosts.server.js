import { bundleMDX } from "mdx-bundler";
import React from "react";
import { supabase } from "~/supabase.server";

export async function getPost(slug) {
  const { body: post, error } = await supabase
    .from("posts")
    .select()
    .eq("slug", slug)
    .single();

  const { body: likes } = await supabase
    .from("PostLikes")
    .select()
    .eq("slug", slug);

  const { code } = await bundleMDX({
    source: post.markdown,
  });

  return {
    post,
    error,
    markdown: code,
    likes: likes.length,
    readingTime: Math.ceil(post.markdown.split(" ").length / 200),
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
    .select("*, PostLikes (*)")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw new Error(error);

  return posts;
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

export async function isPostLikedByUser(ipAddress, slug) {
  const { body: liked } = await supabase
    .from("PostLikes")
    .select()
    .eq("slug", slug)
    .eq("ip_address", ipAddress)
    .limit(1)
    .single();

  return liked;
}

export async function getPostLikes(slug) {
  const { body: likes } = await supabase
    .from("PostLikes")
    .select()
    .eq("slug", slug);

  return likes;
}

export async function getPostsLikesCount() {
  const { body: likes } = await supabase.from("PostLikes").select();

  return likes.length;
}

export async function getPostsViewsCount() {
  const { body: views } = await supabase.from("posts").select();

  return views.reduce((acc, curr) => acc + curr.views, 0);
}
