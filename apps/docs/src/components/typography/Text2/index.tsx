import { Box, BoxProps } from "@kodiui/ui";
import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import { textRecipe, textStyle, TextVariants } from "./text.css";

type TextProps = {
  icon?: JSX.Element;
} & Pick<BoxProps, "textAlign" | "color">;

export const Text: FC<PropsWithChildren & TextVariants & TextProps> = (
  props
) => {
  const recipe = textRecipe({
    size: props.size,
    tone: props.tone,
    weight: props.weight,
  });

  if (props.icon) {
    return (
      <Box
        className={classNames(textStyle, recipe)}
        display="flex"
        gap="xxs"
        alignItems="center"
        as="p"
        {...props}
      >
        {props.icon}
        {props.children}
      </Box>
    );
  }
  return (
    <Box className={recipe} as="p" {...props}>
      {props.children}
    </Box>
  );
};
