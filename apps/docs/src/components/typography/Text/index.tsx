import { Box, BoxProps } from "@kodiui/ui";
import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import { textRecipe, textStyle, TextVariants } from "./text.css";

type TextProps = {
  icon?: JSX.Element;
} & Partial<
  Pick<BoxProps, "textAlign" | "color" | "textTransform" | "textDecoration">
>;

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
        as="span"
        display="flex"
        alignItems="center"
        {...props}
      >
        <span
          style={{
            display: "block",
            verticalAlign: "baseline",
            paddingRight: "0.5rem",
          }}
        >
          {props.icon}
        </span>
        {props.children}
      </Box>
    );
  }
  return (
    <Box className={recipe} as="span" display="flex" {...props}>
      {props.children}
    </Box>
  );
};
