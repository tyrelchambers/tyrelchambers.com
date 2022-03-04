import { supabase } from "./supabase";

export const getBlogPosts = async () => {
  const { data: posts } = await supabase.from("posts").select();
  return posts;
};
