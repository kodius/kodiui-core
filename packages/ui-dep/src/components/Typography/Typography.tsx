import { FC } from "react";
import { AnimationsKeys } from "../../styles/tokens/animations";
import { FlexPropertiesKeys } from "../../types/flexProperites";
import { Box, BoxProps } from "../primitives/Box/Box";

type TypographyProps = {
  type?: TypographyTypes;
  fontFamily?: string;
};

type TypographyTypes =
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "a"
  | "p";

export const Typography: FC<
  Omit<BoxProps, AnimationsKeys | FlexPropertiesKeys> & TypographyProps
> = (props) => {
  return (
    <Box
      as={props.type || "p"}
      style={{ fontFamily: props.fontFamily, ...props.style }}
      {...props}
    >
      {props.children}
    </Box>
  );
};
