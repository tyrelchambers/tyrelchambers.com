import path from "path";
import fs from "fs";

const imagesPath = path.join(__dirname, "..", "public/images");

export const getImages = async () => {
  const dir = await fs.readdirSync(imagesPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFileSync(path.join(imagesPath, filename));

      return {
        image: file,
        filename,
      };
    })
  );
};

export const getImage = async (filename) => {
  const file = fs.readFileSync(path.join(imagesPath, filename));
  return file;
};
