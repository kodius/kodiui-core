import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import unzipper from "unzipper";
import inquirer from "inquirer";

export async function addTypography() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const zipPath = path.join(
    __dirname,
    "..",
    "..",
    "out-components",
    "typography.zip"
  );

  async function extract() {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "extractPath",
        message: "Enter the path where you want to extract typography:",
        default: "components/typography/",
      },
    ]);

    const extractPath = path.join(process.cwd(), answer.extractPath);
    fs.createReadStream(zipPath).pipe(unzipper.Extract({ path: extractPath }));
  }

  await extract();
}
