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
    <Doc downloadable>
      <Doc.Title>Button</Doc.Title>
      <Doc.Block
        subTitle="Button Variants"
        exampleWithCode={ButtonVariants()}
      />
      <Doc.Block subTitle="Button sizes" exampleWithCode={ButtonSizes()} />
      <Doc.Block subTitle="Branding" exampleWithCode={ButtonBranding()} />
      <Doc.Block subTitle="Loading" exampleWithCode={LoadingButton()} />
    </Doc>
  );
};

export default ButtonPage;
