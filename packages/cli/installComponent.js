import inquirer from "inquirer";
import path from "path";
import os from "os";
import extract from "extract-zip";
import chalk from "chalk";

import url from "url";

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
      default: directory ? directory : "~/Desktop/",
    },
  ]);

  const targetPath = target.replace(/^~/, os.homedir());
  const extractPath = path.join(targetPath, componentName);

  console.log(chalk.bgBlue.black(`Installing ${componentName} component...`));
  try {
    await extract(sourcePath, { dir: extractPath });

    console.log(
      chalk.bgGreen.black(
        `Component ${componentName} has been successfully installed.`
      )
    );
  } catch (err) {
    console.error(err);
  }
}
