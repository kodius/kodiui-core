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
//# sourceMappingURL=choose-pkm.js.map