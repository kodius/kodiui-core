import { Typography } from "@kodiui/ui";
import { FC, PropsWithChildren } from "react";

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
  <Typography fontWeight={800} color="gray12" fontSize="4xl" as="h1">
    {children}
  </Typography>
);

Heading.H2 = ({ children }) => <Typography as="h2">{children}</Typography>;
Heading.H3 = ({ children }) => (
  <Typography color="gray12" as="h3">
    {children}
  </Typography>
);
Heading.H4 = ({ children }) => (
  <Typography color={"blue11"} as="h4">
    {children}
  </Typography>
);
Heading.H5 = ({ children }) => <Typography as="h5">{children}</Typography>;
Heading.H6 = ({ children }) => <Typography as="h6">{children}</Typography>;
