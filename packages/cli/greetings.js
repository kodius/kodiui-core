import chalk from "chalk";

export function greetings() {
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
