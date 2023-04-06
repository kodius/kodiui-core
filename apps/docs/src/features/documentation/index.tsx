import React from "react";
import { Box, Stack, BoxProps } from "@kodiui/ui";
import { Heading } from "@/components/typography/Heading";
import { Checkboxes } from "./Checkboxes";
import { placeholder } from "./Doc.css";

interface Props {
  children: React.ReactNode;
}

const boxStyles = {
  borderRadius: "sm",
  p: "md",
} as const;

export const Doc = ({ children }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: 0, tablet: "3xl" }} />
      <Stack gap="lg">{children}</Stack>
    </Box>
  );
};

const Title = ({ children }: Props) => {
  return <Heading.H1>{children}</Heading.H1>;
};

const SubTitle = ({ children }: Props) => {
  return <Heading.H3>{children}</Heading.H3>;
};

const Example = ({ children }: Props) => {
  return (
    <Box background="gray2" {...boxStyles}>
      <Box background="white" {...boxStyles}>
        {children}
      </Box>
    </Box>
  );
};

// TODO: Make it cooler
const Placeholder = ({ children, ...props }: Partial<Props> & BoxProps) => {
  return (
    <Box
      padding="sm"
      borderWidth="md"
      borderColor="gray12"
      borderStyle="solid"
      className={placeholder}
      {...props}
    >
      {children}
    </Box>
  );
};

Doc.Title = Title;
Doc.Subtitle = SubTitle;
Doc.Example = Example;
Doc.Placeholder = Placeholder;
Doc.Checkboxes = Checkboxes;
