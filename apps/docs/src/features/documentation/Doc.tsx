import React from "react";
import { Box, Stack } from "@kodiui/ui";
import { Heading } from "@/components/typography/Heading";
import { Checkboxes } from "./component/Checkboxes";
import { placeholder } from "./Doc.css";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { HardStyles } from "@kodiui/ui/dist/styles/hardStyle";
import { CodeSnippet } from "./component/CodeSnippet";
import { Button, Text } from "@/components";
import reactElementToJSXString from "react-element-to-jsx-string";
import { downloadFile, DownloadFileArgs } from "./utils";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";

interface Props {
  children: React.ReactNode;
}

export const Doc = ({ children }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: "0", tablet: "3xl" }} />
      <Stack gap="xs">{children}</Stack>
    </Box>
  );
};

const Title = ({ children }: Props) => {
  return (
    <Box>
      <Heading color="blackA12" level="h1">
        {children}
      </Heading>
    </Box>
  );
};

const SubTitle = ({ children }: Props) => {
  return (
    <Heading color="blackA12" level="h3">
      {children}
    </Heading>
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
      marginBottom="lg"
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

const Download = (args: DownloadFileArgs) => {
  return (
    <Button
      variant="ghost"
      tone="brandAccent"
      onClick={() => downloadFile(args)}
      size="sm"
      width="fit"
    >
      Download
    </Button>
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
Doc.Download = Download;
