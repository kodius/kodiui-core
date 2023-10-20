import inquirer from "inquirer";

const pkms = ["pnpm", "npm", "yarn"] as const;

type PkmKeys = (typeof pkms)[number];

export const choosePkm = async (): Promise<PkmKeys> => {
  const answer = await inquirer.prompt<{ selected: PkmKeys }>([
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

export const pkmCommands: Record<PkmKeys, string> = {
  npm: "install",
  yarn: "add",
  pnpm: "add",
};
