#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { greetings } from "./greetings.js";
import { installComponent } from "./installComponent.js";
import { installPrimitives } from "./installPrimitives.js";

const prompt = inquirer.createPromptModule();

export async function run() {
  await greetings();

  const currentModulePath = fileURLToPath(import.meta.url);
  const componentsDir = path.join(
    path.dirname(currentModulePath),
    "components"
  );
  const choices = fs.readdirSync(componentsDir).map((filename) => {
    return path.parse(filename).name;
  });

  const answer = await prompt([
    {
      name: "action",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "Install primitives",
        "Install a component",
        "Create a new project",
        "Quit",
      ],
    },
    {
      name: "component",
      message: "Choose component to install?",
      type: "list",
      choices: choices,
      when: function(answers) {
        return answers.action === "Install a component";
      },
    },
    {
      name: "directory",
      message: "Enter the target directory to install primitives:",
      type: "input",
      default: "./components",
      when: function(answers) {
        return answers.action === "Install primitives";
      },
    },
  ]);

  console.log('ovooooooooo',answer.directory);

  if (answer.action === "Install a component") {
    // Parse the command-line arguments
    const args = process.argv.slice(2);
    const argMap = args.reduce((acc, arg, index) => {
      if (arg.startsWith("--")) {
        acc[arg.slice(2)] = args[index + 1];
      }
      return acc;
    }, {});

    // Get the value of the projectDirectory argument
    const projectDirectory = argMap["directory"];

    installComponent(answer.component, projectDirectory);
  } else if (answer.action === "Install primitives") {
    installPrimitives(answer.directory);
  } else {
    console.log("Goodbye!");
  }
}

run();
