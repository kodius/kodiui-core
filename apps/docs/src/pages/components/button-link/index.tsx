import { Doc } from "@/features/documentation";
import { ButtonLinkBase } from "@/features/documentation/docs/buttonLink/buttonLinkBase";
import React from "react";

const ButtonLinkPage = () => {
  return (
    <Doc>
      <Doc.Title>ButtonLink</Doc.Title>
      <Doc.Description>Looks like a button but its a link</Doc.Description>
      <Doc.ExampleWithCode>{ButtonLinkBase()}</Doc.ExampleWithCode>
    </Doc>
  );
};

export default ButtonLinkPage;
