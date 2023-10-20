import path from "path";
import fs from "fs";
import unzipper from "unzipper";
import ora from "ora";
import { fileURLToPath } from "url";

export const addLib = async () => {
  const extractPath = path.join(process.cwd());
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const zipPath = path.join(__dirname, "..", "..", "out-components", "lib.zip");

  const spinner = ora("Adding lib folder").start();
  fs.createReadStream(zipPath).pipe(
    unzipper.Extract({ path: `${extractPath}/lib` })
  );
  spinner.succeed("lib folder added to root of project");
};
