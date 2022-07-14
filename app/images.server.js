import fs from "fs";
export function getImage(filename) {
  const images = fs.readdirSync("public/images");
  const image = images.find((image) => image.includes(filename));

  return fs.readFileSync(`public/images/${image}`, "base64");
}
