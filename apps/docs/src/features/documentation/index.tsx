import React from "react";
import { Box, Stack } from "@kodiui/ui";
import { Heading } from "@/components/typography/Heading";

interface Props {
  children: React.ReactNode;
}

const boxStyles = {
  borderRadius: "sm",
  p: "md",
} as const;

export const Documentation = ({ children }: Props) => {
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
const Placeholder = ({ children }: Partial<Props>) => {
  return (
    <Box
      width="full"
      background="gray2"
      padding="sm"
      borderWidth="lg"
      borderColor="gray5"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

Documentation.Title = Title;
Documentation.Example = Example;
Documentation.Placeholder = Placeholder;
