import fs from "fs";
import path from "path";
import { getPrintableFromFilename } from "./utils/getPrintableFromFilename";
export function getImage(filename) {
  const imagesPath = path.join(__dirname, "../public", "/images/");
  const images = fs.readdirSync(imagesPath);
  const image = images.find((image) => image.includes(filename));

  return fs.readFileSync(`${imagesPath}${image}`, "base64");
}

export function getJobLogo(filename) {
  const imagesPath = path.join(__dirname, "../public", "/images/", "job/");
  const images = fs.readdirSync(imagesPath);
  const image = images.find((image) => image.includes(filename));

  return fs.readFileSync(`${imagesPath}${image}`, "base64");
}

export async function getIGPhotos() {
  const data = await fetch("https://www.instagram.com/imtyrelchambers/");
  // console.log(data);
}

export async function getGalleryPhotos() {
  const photos = [];
  const galleryPath = path.join(__dirname, "../public", "/images", "/gallery");
  const photosDir = fs.readdirSync(galleryPath);

  for (let index = 0; index < photosDir.length; index++) {
    const element = photosDir[index];

    photos.push({
      printable: !getPrintableFromFilename(element),
      image: fs.readFileSync(`${galleryPath}/${element}`, "base64"),
    });
  }

  return photos;
}
