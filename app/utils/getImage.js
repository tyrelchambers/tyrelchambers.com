import { supabase } from "./supabase";

export const getImages = async () => {
  const images = await supabase.storage.from("tyrel-chambers/images").list();
  return null;
};

export const getImage = async (filename) => {
  const {
    data: { publicURL },
  } = await supabase.storage
    .from("tyrel-chambers/images")
    .getPublicUrl(filename);

  return publicURL;
};
