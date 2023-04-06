import { DocBuilder } from "@/features/docBuilder";
import { firstStep } from "@/features/docs/newProject/firstStep.docs";
import { secondStep } from "@/features/docs/newProject/secondStep.docs";
import { thirdStep } from "@/features/docs/newProject/thirdStep.docs";
import React from "react";

const NewProjectPage = () => {
  return (
    <DocBuilder
      title="New Project"
      build={() => [firstStep, secondStep, thirdStep]}
    />
  );
};

export default NewProjectPage;
