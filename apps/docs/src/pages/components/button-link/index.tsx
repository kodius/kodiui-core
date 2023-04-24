import { Doc } from "@/features/documentation";
import { ButtonLinkBase } from "@/features/documentation/docs/buttonLink/buttonLinkBase";
import React from "react";

const ButtonLinkPage = () => {
  return (
    <Doc>
      <Doc.Title>ButtonLink</Doc.Title>
      <Doc.Block
        subTitle="Looks like a button but its a link"
        exampleWithCode={ButtonLinkBase()}
      />
    </Doc>
  );
};

export default ButtonLinkPage;
