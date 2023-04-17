import { Doc } from "@/features/documentation";

const codeSnippet = `import { Text } from "@/components/typography/Text";
import { Box, BoxProps } from "@kodiui/ui";
import React, { FC } from "react";
import { buttonRecipe } from "./button.css";

interface Props {
  variant?: "solid" | "ghost" | "soft" | "transparent";
  size?: "standard" | "small";
}

type ButtonType = BoxProps & Props;

export const Button: FC<ButtonType> = (props) => {
  return (
    <Box
      as="button"
      className={buttonRecipe({ variant: props.variant, size: props.size })}
      {...props}
    >
      <Text as="span" fontWeight="bolder" fontSize="sm">{props.children}</Text>
    </Box>
  );
};`;

export const ButtonFile = () => {
  return <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={true} />;
};

export default ButtonFile;
