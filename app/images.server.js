import fs from "fs";
export function getImage(filename) {
  const imagesPath = `${__dirname}/../../public/images/`;
  const images = fs.readdirSync(imagesPath);
  const image = images.find((image) => image.includes(filename));

  return fs.readFileSync(`${imagesPath}${image}`, "base64");
}
