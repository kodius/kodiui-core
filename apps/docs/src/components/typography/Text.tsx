import { Box, Typography } from "@kodiui/ui";
import { BuilderInterface } from "@kodiui/ui/dist/types";
import { FC, PropsWithChildren, ReactNode } from "react";
import { TextVariants, text, textStyle } from "./Text.css";
import classNames from "classnames";

type TextProps = Pick<
  BuilderInterface,
  | "textAlign"
  | "fontWeight"
  | "color"
  | "textDecoration"
  | "textAlign"
  | "textTransform"
  | "cursor"
  | "as"
  | "color"
  | "fontSize"
> &
  TextVariants;

export const Text = ({
  as = "p",
  tone,
  children,
  ...rest
}: PropsWithChildren<TextProps>) => {
  return (
    <Box
      as={as}
      display="flex"
      gap="xxs"
      alignItems="center"
      {...rest}
      className={classNames(textStyle, text({ tone: tone }))}
    >
      {children}
    </Box>
  );
};
