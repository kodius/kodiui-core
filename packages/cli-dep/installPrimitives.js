import path from "path";
import os from "os";
import url from "url";
import extract from "extract-zip";
import chalk from "chalk";
import { goodbye } from "./goodbay.js";

export async function installPrimitives(directories) {
  const primitivesDirectory = directories.primitivesDir;
  const varsDirecotry = directories.varsDir;

  const primitivePath = path.join(
    url.fileURLToPath(
      new URL(`../cli/primitives/primitives.zip`, import.meta.url)
    )
  );
  const varsPath = path.join(
    url.fileURLToPath(new URL(`../cli/primitives/tokens.zip`, import.meta.url))
  );

  const targetPathForPrimitices = primitivesDirectory.replace(
    /^~/,
    os.homedir()
  );

  const targetPathForVars = varsDirecotry.replace(/^~/, os.homedir());

  const extractPathPrimitives = path.join(
    process.cwd(),
    targetPathForPrimitices,
    "primitives"
  );

  const extractPathVars = path.join(process.cwd(), targetPathForVars, "tokens");

  try {
    await extract(primitivePath, { dir: extractPathPrimitives });
    await extract(varsPath, { dir: extractPathVars });

    console.log(
      chalk.bgGreen.black(`Primitive were has been successfully installed.`)
    );
    goodbye();
  } catch (err) {
    console.error(err);
  }
}
