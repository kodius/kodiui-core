import React from "react";
import { Box, Cluster, Split, Stack } from "@kodiui/ui";
import { Checkboxes } from "./component/Checkboxes";
import { placeholder } from "./Doc.css";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { HardStyles } from "@kodiui/ui/dist/styles/hardStyle";
import { CodeSnippet } from "./component/CodeSnippet";
import {  Heading, Text } from "@/components";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Download } from "./component/Download";
import { Install } from "./component/Install";

interface Props {
  children: React.ReactNode;
}

interface TitleProps extends Props {
  download?: string;
  install?: string;
}

export const Doc = ({ children }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: "0", tablet: "3xl" }} />
      <Stack gap="xs">{children}</Stack>
    </Box>
  );
};

const Title = ({ children, download, install }: TitleProps) => {
  const content = (
    <Box>
      <Heading color="blackA12" level="1">
        {children}
      </Heading>
    </Box>
  );
  if (download || install) {
    return (
      <Split alignItems="center">
        {content}
        <Cluster>
          {download && <Download fileName={download} />}
          {install && <Install />}
        </Cluster>
      </Split>
    );
  }
  return <>{content}</>;
};

const SubTitle = ({ children }: Props) => {
  return (
    <Heading color="blackA12" level="3">
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


Doc.Title = Title;
Doc.Subtitle = SubTitle;
Doc.Description = Description;
Doc.Example = Example;
Doc.ExampleWithCode = ExampleWithCode;
Doc.Placeholder = Placeholder;
Doc.Checkboxes = Checkboxes;
Doc.CodeSnippet = CodeSnippet;
