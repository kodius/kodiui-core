#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import { addPrimitives } from "./workers/add-primitives.js";
import { addTypography } from "./workers/add-typography.js";
import { addLib } from "./workers/add-lib.js";

const program = new Command();

console.log(figlet.textSync("Kemanl Važin"));

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();

type Answer = {
  questions: "primitives" | "typography";
};

async function main() {
  const answers: Answer = await inquirer.prompt([
    {
      type: "list",
      name: "questions",
      message: "What would you like to do?",
      choices: [
        { name: "add primitives", value: "primitives" },
        { name: "add typography", value: "typography" },
      ],
    },
  ]);

  if (answers.questions === "primitives") await addPrimitives();
  if (answers.questions === "typography") addTypography();

  addLib();
}

main();
