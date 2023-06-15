import path from "path";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";

export async function installUI(directories) {
  const uiDir = directories.uiDir;

  const typoPath = path.join(
    url.fileURLToPath(new URL(`../cli/localUI/ui.zip`, import.meta.url))
  );

  const targetPathForTypography = uiDir.replace(/^~/, os.homedir());

  const extractPathTypography = path.join(
    process.cwd(),
    targetPathForTypography,
    "ui"
  );

  try {
    await extract(typoPath, { dir: extractPathTypography });
    console.log(chalk.bgGreen.black(`Typography are successfully installed.`));
  } catch (err) {
    console.error(err);
  }
}
