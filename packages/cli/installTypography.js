import path from "path";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";
import { goodbye } from "./goodbay.js";

export async function installTypography(directories) {
  const typoDir = directories.typoDir;

  const typoPath = path.join(
    url.fileURLToPath(
      new URL(`../cli/typography/typography.zip`, import.meta.url)
    )
  );

  const targetPathForTypography = typoDir.replace(/^~/, os.homedir());

  const extractPathTypography = path.join(
    process.cwd(),
    targetPathForTypography,
    "typography"
  );

  try {
    await extract(typoPath, { dir: extractPathTypography });
    console.log(chalk.bgGreen.black(`Typography are successfully installed.`));
    goodbye();
  } catch (err) {
    console.error(err);
  }
}
