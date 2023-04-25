import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { sleep } from "./utils.js";


export async function greetings() {
  const rainbowTitle = chalkAnimation.glitch("                KODI UI 3");

  await sleep();
  console.log(
    chalk.green(
      `

                                     
        ██╗  ██╗ ██████╗ ██████╗ ██╗             ██╗    
        ██║ ██╔╝██╔═══██╗██╔══██╗██║    ██╗   ██╗╚═╝
        █████╔╝ ██║   ██║██║  ██║██║    ██║   ██║██╗
        ██╔═██╗ ██║   ██║██║  ██║██║    ██║   ██║██║
        ██║  ██╗╚██████╔╝██████╔╝██║    ╚██████╔╝██║
        ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  3.0


      `
    )
  );

  console.log(chalk.bgBlue.black("    ARGUMENTS     "));
  console.log("");
  console.log(
    chalk.blue.bold("--directory"),
    chalk.red.italic("-> your project directory.")
  );
  console.log("");
  console.log("");
  console.log("");
}
