import { BuildElement } from "@/features/docBuilder";

export const firstStep: BuildElement = {
  label: "1. Create new Next.js project",
  description: {
    description: ["In terminal run:"],
    codeSnippet: [`pnpm create next-app`],
  },
};
