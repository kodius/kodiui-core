import { DocBuilder } from "@/features/docBuilder";
import { firstStep } from "@/features/docs/newProject/firstStep.docs";
import React from "react";

const NewProjectPage = () => {
  return <DocBuilder title="New Project" build={() => [firstStep]} />;
};

export default NewProjectPage;
