import { Doc } from "@/features/documentation/Doc";
import React from "react";
import { HeadingLevels } from "@/features/documentation";

const HeadingsPage = () => {
  return (
    <Doc>
      <Doc.Title>Heading</Doc.Title>
      <Doc.Description>Levels and weight</Doc.Description>
      <Doc.ExampleWithCode>
        {HeadingLevels()}
      </Doc.ExampleWithCode>
    </Doc>
  );
};

export default HeadingsPage;
