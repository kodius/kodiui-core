#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { greetings } from "./greetings.js";
import { installComponent } from "./installComponent.js";

const prompt = inquirer.createPromptModule();

async function run() {
  greetings();

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
      choices: ["Install a component", "Quit"],
    },
    {
      name: "component",
      message: "Choose component to install?",
      type: "list",
      choices: choices,
      when: function (answers) {
        return answers.action === "Install a component";
      },
    },
  ]);

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
  } else {
    console.log("Goodbye!");
  }
}

run();
