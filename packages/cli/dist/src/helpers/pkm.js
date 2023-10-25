import inquirer from "inquirer";
const pkms = ["pnpm", "npm", "yarn"];
export const choosePkm = async () => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "selected",
            message: "Select package manager",
            default: "pnpm",
            choices: pkms.map((pkm) => ({
                name: pkm,
                value: pkm,
            })),
        },
    ]);
    return answer.selected;
};
export const pkmCommands = {
    npm: "install",
    yarn: "add",
    pnpm: "add",
};
//# sourceMappingURL=pkm.js.map