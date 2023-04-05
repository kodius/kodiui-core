import { BuildElement } from "@/features/docBuilder";

export const createConract: BuildElement = {
  label: "3. Create contract",
  description: {
    description: ["styles/contract.css.ts"],
    codeSnippet: [
      `import { vars } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

export const theme = createTheme(vars, tokens);`,
    ],
  },
};
