import inquirer from "inquirer";
import { spawn } from "child_process";
import ora from "ora";
import { choosePkm, pkmCommands } from "../helpers/pkm.js";
async function askForPermission() {
    const answer = await inquirer.prompt([
        {
            type: "confirm",
            name: "permission",
            message: "Would you like to install required dependencies?",
            default: true,
        },
    ]);
    return answer.permission;
}
const dependenciesToInstall = [
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
];
export async function installDependenciesPrimitives() {
    const permission = await askForPermission();
    if (permission) {
        const selectedPkm = await choosePkm();
        const pkmCommand = pkmCommands[selectedPkm];
        const spinner = ora("Installing dependencies...").start();
        try {
            const promises = dependenciesToInstall.map((dependency) => {
                return new Promise((resolve, reject) => {
                    const child = spawn(selectedPkm, [pkmCommand, dependency]);
                    child.on("close", (code) => {
                        if (code === 0) {
                            resolve(null);
                        }
                        else {
                            reject(new Error(`${selectedPkm} install for ${dependency} failed with code ${code}`));
                        }
                    });
                });
            });
            await Promise.all(promises);
            spinner.succeed("Dependencies installed successfully!");
        }
        catch (error) {
            spinner.fail("Failed to install dependencies");
            console.error(error);
        }
    }
    else {
        const spinner = ora("Installing components...").start();
        spinner.succeed("installed successfully!");
    }
}
//# sourceMappingURL=install-dependecies-primitives.js.map