import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import unzipper from "unzipper";

export function addPrimitives() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const zipPath = path.join(
    __dirname,
    "..",
    "..",
    "out-components",
    "primitives.zip"
  );
  const extractPath = path.join(process.cwd(), "components/primitives/");

  fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: extractPath }))
    .on("close", () => {
      console.log("Primitives have been successfully added to your project!");
    });
}
