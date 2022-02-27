import { supabase } from "./supabase";

export const getImages = async () => {
  const images = await supabase.storage.from("images").list();
  console.log(images);
  return null;
};

export const getImage = async (filename) => {
  const file = await supabase.storage.from("images").findOne({
    where: {
      filename,
    },
  });

  console.log(file);

  return file;
};
