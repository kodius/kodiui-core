import inquirer from "inquirer";
import path from "path";
import os from "os";
import extract from "extract-zip";
import chalk from "chalk";

import url from "url";
import { run } from "./index.js";

const prompt = inquirer.createPromptModule();

export async function installComponent(componentName, directory) {
  const sourcePath = path.join(
    url.fileURLToPath(
      new URL(`../cli/components/${componentName}.zip`, import.meta.url)
    )
  );

  const { target } = await prompt([
    {
      type: "input",
      name: "target",
      message: `Enter the target directory to install the ${componentName} component:`,
      default: directory ? directory : "./components/",
    },
  ]);

  const targetPath = target.replace(/^~/, os.homedir());
  const extractPath = path.join(process.cwd(), targetPath, componentName);

  console.log(chalk.bgBlue.black(`Installing ${componentName} component...`));
  try {
    await extract(sourcePath, { dir: extractPath });

    console.log(
      chalk.bgGreen.black(
        `Component ${componentName} has been successfully installed.`
      )
    );
    run();
  } catch (err) {
    console.error(err);
  }
}
