import ButtonCssFile from "@/features/docs/button/button.style";
import ButtonFile from "@/features/docs/button/button.file";
import ButtonBranding from "@/features/docs/button/buttonBranding.docs";
import ButtonSizes from "@/features/docs/button/buttonSizes.docs";
import ButtonVariants from "@/features/docs/button/buttonVariants.docs";
import LoadingButton from "@/features/docs/button/loadingButton.docs";
import { Doc } from "@/features/documentation";
import React from "react";

const ButtonPage = () => {
  return (
    <Doc>
      <Doc.Title>Button</Doc.Title>
      <ButtonVariants />
      <ButtonSizes />
      <ButtonBranding />
      <LoadingButton />
      <ButtonFile />
      <ButtonCssFile />
    </Doc>
  );
};

export default ButtonPage;
