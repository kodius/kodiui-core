import { DocBuilder } from "@/features/docBuilder";
import {
  buttonBranding,
  buttonSizes,
  buttonVariants,
  loadingButton,
} from "@/features/docs";
import React from "react";

const ButtonPage = () => {
  return (
    <DocBuilder
      title="Button"
      build={() => [buttonVariants, buttonSizes, buttonBranding, loadingButton]}
    />
  );
};

export default ButtonPage;
