import { supabase } from "./supabase";

export const getBlogPosts = async () => {
  const { data: posts } = await supabase.from("post").select();
  return posts;
};
