import { Typography } from "@kodiui/ui";
import { FC, PropsWithChildren } from "react";
import { defaultProps } from "./defaultProps";

type HeadingType = FC<PropsWithChildren>;

interface Props {
  H1: HeadingType;
  H2: HeadingType;
  H3: HeadingType;
  H4: HeadingType;
  H5: HeadingType;
  H6: HeadingType;
}

export const Heading: FC<PropsWithChildren> & Props = () => {
  return null;
};

Heading.H1 = ({ children }) => (
  <Typography {...defaultProps} as="h1">
    {children}
  </Typography>
);

Heading.H2 = ({ children }) => (
  <Typography {...defaultProps} as="h2">
    {children}
  </Typography>
);
Heading.H3 = ({ children }) => (
  <Typography {...defaultProps} as="h3">
    {children}
  </Typography>
);
Heading.H4 = ({ children }) => (
  <Typography {...defaultProps} as="h4">
    {children}
  </Typography>
);
Heading.H5 = ({ children }) => (
  <Typography {...defaultProps} as="h5">
    {children}
  </Typography>
);
Heading.H6 = ({ children }) => (
  <Typography {...defaultProps} as="h6">
    {children}
  </Typography>
);
