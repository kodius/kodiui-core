import { Box, BoxProps, Typography } from "@kodiui/ui";
import { AnimationsKeys } from "@kodiui/ui/dist/styles/tokens/animations";
import { BuilderInterface } from "@kodiui/ui/dist/types";
import { FlexPropertiesKeys } from "@kodiui/ui/dist/types/flexProperites";
import { FC, PropsWithChildren } from "react";
import { headings } from "./Heading.css";

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
  <Typography color="brand" as="h4">
    {children}
  </Typography>
);
Heading.H5 = ({ children }) => <Typography as="h5">{children}</Typography>;
Heading.H6 = ({ children }) => <Typography as="h6">{children}</Typography>;

//////////////////////////////////////////

type HeadingProps = Pick<
  BuilderInterface,
  | "textAlign"
  | "fontWeight"
  | "color"
  | "textDecoration"
  | "textAlign"
  | "textTransform"
  | "cursor"
  | "as"
> & {
  level: keyof typeof headings | undefined;
};

export const NewHeading = ({
  children,
  as = "h1",
  level = "h1",
  ...rest
}: PropsWithChildren<HeadingProps>) => {
  return (
    <Box as={as} className={headings[level]} {...rest}>
      {children}
    </Box>
  );
};
