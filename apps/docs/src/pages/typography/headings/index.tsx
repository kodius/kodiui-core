import { Doc } from "@/features/documentation/Doc";
import React from "react";
import { HeadingLevels } from "@/features/documentation";

const HeadingsPage = () => {
  return (
    <Doc>
      <Doc.Title>Heading</Doc.Title>
      <Doc.Block
        subTitle="Levels and weight"
        exampleWithCode={HeadingLevels()}
      />
    </Doc>
  );
};

export default HeadingsPage;
