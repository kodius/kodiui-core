import { Typography } from "@kodiui/ui";
import { FC, PropsWithChildren, ReactNode } from "react";
import { defaultProps } from "./defaultProps";

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
  <Typography {...defaultProps} as="p">
    {children}
  </Typography>
);

Text.Caption = ({ children }) => (
  <Typography {...defaultProps} as="p" fontWeight="bolder">
    {children}
  </Typography>
);

Text.Sub = ({ children }) => (
  <Typography
    {...defaultProps}
    as="p"
    textTransform="uppercase"
    fontSize="sm"
    color="gray12"
  >
    {children}
  </Typography>
);
