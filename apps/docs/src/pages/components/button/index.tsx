import { DocBuilder } from "@/features/docBuilder";
import {
  buttonBranding,
  buttonCssFile,
  buttonFile,
  buttonSizes,
  buttonVariants,
  loadingButton,
} from "@/features/docs";
import React from "react";

const ButtonPage = () => {
  return (
    <DocBuilder
      title="Button"
      build={() => [
        buttonVariants,
        buttonSizes,
        buttonBranding,
        loadingButton,
        buttonFile,
        buttonCssFile,
      ]}
    />
  );
};

export default ButtonPage;
