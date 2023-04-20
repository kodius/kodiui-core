import React from "react";
import { Box, Stack } from "@kodiui/ui";
import { Checkboxes } from "./component/Checkboxes";
import { placeholder } from "./Doc.css";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { HardStyles } from "@kodiui/ui/dist/styles/hardStyle";
import { CodeSnippet } from "./component/CodeSnippet";
import { Heading, Text } from "@/components";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Downloadable } from "./component/Downloadable";

interface Props {
  children: React.ReactNode;
  downloadable?: boolean;
}

export const Doc = ({ children, downloadable }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: "0", tablet: "3xl" }} />
      <Stack gap="xl">
        {children}
        {downloadable && <Downloadable />}
      </Stack>
    </Box>
  );
};

const Title = ({ children }: Props) => {
  return (
    <Box>
      <Heading color="blackA12" level="1">
        {children}
      </Heading>
    </Box>
  );
};

const SubTitle = ({ children }: Props) => {
  return (
    <Text color="blackA12" weight="medium">
      {children}
    </Text>
  );
};

const Description = ({ children }: Props) => {
  return (
    <Text color="blackA11" size="standard">
      {children}
    </Text>
  );
};

const Example = ({ children }: Props) => {
  return (
    <Box
      background="white"
      borderRadius="sm"
      p="md"
      borderColor="blackA5"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

const ExampleWithCode = ({ children }: Props) => {
  const codeSnippet = reactElementToJSXString(children);
  return (
    <>
      <Example>{children}</Example>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

interface BlockProps {
  subTitle: string;
  description?: string;
  exampleWithCode: React.ReactNode;
}

const Block = ({ exampleWithCode, subTitle, description }: BlockProps) => {
  return (
    <Stack gap={"sm"}>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <ExampleWithCode>{exampleWithCode}</ExampleWithCode>
    </Stack>
  );
};

interface PlaceholderProps extends Props {
  width: Sprinkles["width"];
  height: Sprinkles["height"];
}

// TODO: Make it cooler
const Placeholder = ({
  children,
  ...props
}: Partial<PlaceholderProps & HardStyles>) => {
  return (
    <Box
      padding="sm"
      borderWidth="sm"
      borderColor="gray8"
      borderStyle="solid"
      className={placeholder}
      borderRadius="sm"
      {...props}
    >
      {children}
    </Box>
  );
};

Doc.Title = Title;
Doc.Subtitle = SubTitle;
Doc.Description = Description;
Doc.Example = Example;
Doc.ExampleWithCode = ExampleWithCode;
Doc.Placeholder = Placeholder;
Doc.Checkboxes = Checkboxes;
Doc.CodeSnippet = CodeSnippet;
Doc.Block = Block;
