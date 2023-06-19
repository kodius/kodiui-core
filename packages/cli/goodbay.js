import chalk from "chalk";
import { sleep } from "./utils.js";

export function goodbye() {
  console.log(
    chalk.green(
      `

      ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗
      ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║
         ██║   ███████║███████║██╔██╗ ██║█████╔╝      ╚████╔╝ ██║   ██║██║   ██║
         ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗       ╚██╔╝  ██║   ██║██║   ██║
         ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗       ██║   ╚██████╔╝╚██████╔╝
         ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝       ╚═╝    ╚═════╝  ╚═════╝ 
                                                                                

      `
    )
  );

  console.log(chalk.bold("Next steps after installation:"));
  console.log("");
  console.log("1. Visit the following URL:");
  console.log(chalk.blue("   https://ui.shadcn.com/docs/installation"));
  console.log("");
  console.log("2. Follow the instructions provided on that page.");
  console.log("");
  console.log(
    "3. Configure `tailwind.config.js` as per step 3 of the documentation."
  );
  console.log("");
  console.log(
    "4. Configure your styles as mentioned in step 4 of the documentation."
  );
  console.log("");
  console.log("5. Add a `cn` helper by following step 5 of the documentation.");
}
