import { DocBuilder } from "@/features/docBuilder";
import React from "react";

const NewProjectPage = () => {
  return (
    <DocBuilder
      title="New Project"
      build={() => [
        {
          label: "1. Create new Next.js project",
          description: {
            description: ["In terminal run:"],
            codeSnippet: [`pnpm create next-app`],
          },
        },
        {
          label: "2. Create new Next.js project",
          description: {
            description: ["In terminal run:"],
            codeSnippet: [`pnpm create next-app`],
          },
        },
      ]}
    />
  );
};

export default NewProjectPage;
