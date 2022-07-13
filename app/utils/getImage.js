import { supabase } from "./supabase";

export const getImages = async () => {
  const images = await supabase.storage.from("tyrel-chambers/images").list();
  return null;
};
