import { Typography } from "@kodiui/ui";
import { FC, PropsWithChildren, ReactNode } from "react";

type TextType = ({ children }: { children: ReactNode }) => JSX.Element;

interface Props {
  Base: TextType;
  Caption: TextType;
  Sub: TextType;
}

export const Text: FC<PropsWithChildren> & Props = () => {
  return null;
};

Text.Base = ({ children }) => <Typography fontSize="sm" as="p">{children}</Typography>;

Text.Caption = ({ children }) => (
  <Typography as="span" fontWeight="bolder" fontSize="sm">
    {children}
  </Typography>
);

Text.Sub = ({ children }) => (
  <Typography as="p" textTransform="uppercase" fontSize="sm" color="gray12">
    {children}
  </Typography>
);
