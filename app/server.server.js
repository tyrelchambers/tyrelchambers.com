import fs from "fs";
import path from "path";

export function getPDF() {
  const publicPath = path.join(__dirname, "../public", "/");
  const pdf = fs.readFileSync(publicPath + "Resume.pdf");

  return pdf;
}
