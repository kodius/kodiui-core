import path from "path";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";

export async function installUI(directories) {
  const uiDir = directories.uiDir;

  const uiPath = path.join(
    url.fileURLToPath(new URL(`../cli/localUI/ui.zip`, import.meta.url))
  );

  const targetPathForUI = uiDir.replace(/^~/, os.homedir());

  const extractPathUI = path.join(process.cwd(), targetPathForUI, "ui");

  try {
    await extract(uiPath, { dir: extractPathUI });
    console.log(chalk.bgGreen.black(`UI are successfully installed.`));
  } catch (err) {
    console.error(err);
  }
}
