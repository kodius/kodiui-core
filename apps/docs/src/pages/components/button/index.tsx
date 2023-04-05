import { DocBuilder } from "@/features/docBuilder";
import { buttonVariants, loadingButton } from "@/features/docs";
import { buttonCssFile } from "@/features/docs/button/button.css";
import { buttonFile } from "@/features/docs/button/button.file";
import { buttonSizes } from "@/features/docs/button/buttonSizes.docs";
import React from "react";

const ButtonPage = () => {
  return (
    <DocBuilder
      title="Button"
      build={() => [
        buttonVariants,
        buttonSizes,
        loadingButton,
        buttonFile,
        buttonCssFile,
      ]}
    />
  );
};

export default ButtonPage;
