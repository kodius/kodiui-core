import path from "path";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";

export async function installPrimitives(directory) {
  const sourcePath = path.join(
    url.fileURLToPath(
      new URL(`../cli/components/primitives.zip`, import.meta.url)
    )
  );

  const targetPath = directory.replace(/^~/, os.homedir());

  const extractPath = path.join(process.cwd(), targetPath, "primitives");

  console.log(sourcePath, targetPath, extractPath);
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
