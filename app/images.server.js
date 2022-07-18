import fs from "fs";
import path from "path";
export function getImage(filename) {
  const imagesPath = path.join(__dirname, "../public", "/images/");
  const images = fs.readdirSync(imagesPath);
  const image = images.find((image) => image.includes(filename));

  return fs.readFileSync(`${imagesPath}${image}`, "base64");
}
