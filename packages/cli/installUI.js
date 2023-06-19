import path from "path";
import fs from "fs";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";
import inquirer from "inquirer";
import { goodbye } from "./goodbay.js";

export async function installUI(directories) {
  const uiDir = directories.uiDir;

  const currentFileUrl = import.meta.url;
  const currentFilePath = url.fileURLToPath(currentFileUrl);

  const localUIPath = path.join(
    path.dirname(currentFilePath),
    "../cli/localUI"
  );

  const files = fs.readdirSync(localUIPath);

  const zipFiles = files.filter((file) => path.extname(file) === ".zip");

  let installOneMore = true;

  while (installOneMore) {
    const choices = [
      {
        name: "Install all",
        value: "all",
      },
      new inquirer.Separator(),
      ...zipFiles.map((zipFile) => ({
        name: zipFile.replace(/\.tsx\.zip$/, ""),
        value: zipFile,
      })),
    ];

    const promptQuestion = {
      name: "zipFile",
      message: "Select a zip file to install:",
      type: "list",
      choices: choices,
    };

    const answer = await inquirer.prompt([promptQuestion]);

    const selectedZipFile = answer.zipFile;

    if (selectedZipFile === "all") {
      for (const zipFile of zipFiles) {
        const zipFilePath = path.join(localUIPath, zipFile);
        const targetPathForUI = uiDir.replace(/^~/, os.homedir());
        const extractPathUI = path.join(process.cwd(), targetPathForUI, "ui");

        try {
          await extract(zipFilePath, { dir: extractPathUI });
          console.log(
            chalk.bgGreen.black(`UI from ${zipFile} is successfully installed.`)
          );
        } catch (err) {
          console.error(err);
        }
        installOneMore = false;
      }
    } else {
      const zipFilePath = path.join(localUIPath, selectedZipFile);
      const targetPathForUI = uiDir.replace(/^~/, os.homedir());
      const extractPathUI = path.join(process.cwd(), targetPathForUI, "ui");

      try {
        await extract(zipFilePath, { dir: extractPathUI });
        console.log(
          chalk.bgGreen.black(
            `UI from ${selectedZipFile} is successfully installed.`
          )
        );
      } catch (err) {
        console.error(err);
      }

      const installOneMoreAnswer = await inquirer.prompt([
        {
          name: "installOneMore",
          message: "Do you want to install one more component?",
          type: "confirm",
          default: false,
        },
      ]);

      installOneMore = installOneMoreAnswer.installOneMore;
    }
  }
  goodbye();
}
