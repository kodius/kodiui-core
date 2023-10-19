#! /usr/bin/env node
import { Command } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import { addPrimitives } from "./workers/add-primitives.js";
const program = new Command();
console.log(figlet.textSync("kodiui"));
program
    .version("1.0.0")
    .description("An example CLI for managing a directory")
    .option("-l, --ls  [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);
const options = program.opts();
async function main() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "questions",
            message: "What would you like to do?",
            choices: [{ name: "add primitives", value: "primitives" }],
        },
    ]);
    console.log(answers);
    if (answers.questions === "primitives") {
        addPrimitives();
    }
}
main();
//# sourceMappingURL=index.js.map