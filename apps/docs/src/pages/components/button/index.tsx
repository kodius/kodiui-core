import { Doc } from "@/features/documentation";
import React from "react";
import { ButtonVariants } from "@/features/docs/button/buttonVariants.docs";
import { ButtonSizes } from "@/features/docs/button/buttonSizes.docs";
import { ButtonBranding } from "@/features/docs/button/buttonBranding.docs";
import { LoadingButton } from "@/features/docs/button/loadingButton.docs";
import { ButtonFile } from "@/features/docs/button/button.file";
import { ButtonCssFile } from "@/features/docs/button/button.style";

const ButtonPage = () => {
  return (
    <Doc>
      <Doc.Title>Button</Doc.Title>
      <Doc.Download
        href="http://localhost:3003/button.zip"
        fileName="button"
      ></Doc.Download>
      <Doc.Description>Button Variants</Doc.Description>
      <Doc.ExampleWithCode>{ButtonVariants()}</Doc.ExampleWithCode>
      <Doc.Description>Button sizes</Doc.Description>
      <Doc.ExampleWithCode>{ButtonSizes()}</Doc.ExampleWithCode>
      <Doc.Description>Branding</Doc.Description>
      <Doc.ExampleWithCode>{ButtonBranding()}</Doc.ExampleWithCode>
      <Doc.Description>Loading</Doc.Description>
      <Doc.ExampleWithCode>{LoadingButton()}</Doc.ExampleWithCode>
      <Doc.Description>Button.tsx</Doc.Description>
      <Doc.Example>{ButtonFile()}</Doc.Example>
      <Doc.Description>button.css.ts</Doc.Description>
      <Doc.Example>{ButtonCssFile()}</Doc.Example>
    </Doc>
  );
};

export default ButtonPage;
