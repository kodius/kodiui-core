import {
  ButtonBranding,
  ButtonSizes,
  ButtonVariants,
  LoadingButton,
} from "@/features/documentation";
import { Doc } from "@/features/documentation/Doc";
import React from "react";

const ButtonPage = () => {
  return (
    <Doc>
      <Doc.Title>Button</Doc.Title>
      <Doc.Download fileName="Button" />
      <Doc.Description>Button Variants</Doc.Description>
      <Doc.ExampleWithCode>{ButtonVariants()}</Doc.ExampleWithCode>
      <Doc.Description>Button sizes</Doc.Description>
      <Doc.ExampleWithCode>{ButtonSizes()}</Doc.ExampleWithCode>
      <Doc.Description>Branding</Doc.Description>
      <Doc.ExampleWithCode>{ButtonBranding()}</Doc.ExampleWithCode>
      <Doc.Description>Loading</Doc.Description>
      <Doc.ExampleWithCode>{LoadingButton()}</Doc.ExampleWithCode>
    </Doc>
  );
};

export default ButtonPage;
