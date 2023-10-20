import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import unzipper from "unzipper";
import inquirer from "inquirer";
import { installDependenciesPrimitives } from "./install-dependecies-primitives.js";
export function addPrimitives() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const zipPath = path.join(__dirname, "..", "..", "out-components", "primitives.zip");
    async function extractPrimitive() {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "extractPath",
                message: "Enter the path where you want to extract the primitives:",
                default: "components/primitives/",
            },
        ]);
        const extractPath = path.join(process.cwd(), answer.extractPath);
        fs.createReadStream(zipPath).pipe(unzipper.Extract({ path: extractPath }));
        installDependenciesPrimitives();
    }
    extractPrimitive();
}
//# sourceMappingURL=add-primitives.js.map