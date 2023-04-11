import { Box, Typography } from "@kodiui/ui";
import { BuilderInterface } from "@kodiui/ui/dist/types";
import { FC, PropsWithChildren, ReactNode } from "react";
import { TextVariants, text, textStyle } from "./Text.css";
import classNames from "classnames";

type TextType = ({ children }: { children: ReactNode }) => JSX.Element;

interface Props {
  Base: TextType;
  Caption: TextType;
  Sub: TextType;
}

export const Text: FC<PropsWithChildren> & Props = () => {
  return null;
};

Text.Base = ({ children }) => (
  <NewText color="black" fontSize="base" as="p">
    {children}
  </NewText>
);

Text.Caption = ({ children }) => (
  <NewText as="span" fontWeight="bolder" fontSize="sm">
    {children}
  </NewText>
);

Text.Sub = ({ children }) => (
  <NewText as="p" textTransform="uppercase" fontSize="sm" color="gray12">
    {children}
  </NewText>
);

/////////////////////////////////////////////

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

export const NewText = ({
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
