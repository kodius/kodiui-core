import {
  ButtonBranding,
  ButtonSizes,
  ButtonVariants,
  LoadingButton,
} from "@/features/documentation";
import { Doc } from "@/features/documentation/Doc";
import { Stack } from "@kodiui/ui";
import React from "react";

const ButtonPage = () => {
  return (
    <Doc downloadable>
      <Doc.Title>Button</Doc.Title>
      {/* <Doc.Block sub="asdf" ex="asdf" /> */}
      <Stack gap='xs'>
        <Doc.Subtitle>Button Variants</Doc.Subtitle>
        <Doc.ExampleWithCode>{ButtonVariants()}</Doc.ExampleWithCode>
      </Stack>
      <Doc.Subtitle>Button sizes</Doc.Subtitle>
      <Doc.ExampleWithCode>{ButtonSizes()}</Doc.ExampleWithCode>
      <Doc.Subtitle>Branding</Doc.Subtitle>
      <Doc.ExampleWithCode>{ButtonBranding()}</Doc.ExampleWithCode>
      <Doc.Subtitle>Loading</Doc.Subtitle>
      <Doc.ExampleWithCode>{LoadingButton()}</Doc.ExampleWithCode>
    </Doc>
  );
};

export default ButtonPage;
