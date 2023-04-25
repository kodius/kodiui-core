import React, { useEffect, useState } from "react";
import { Box, BoxProps, FlexBox, Stack } from "@kodiui/ui";
import { Checkboxes } from "./component/Checkboxes";
import { placeholder } from "./Doc.css";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { HardStyles } from "@kodiui/ui/dist/styles/hardStyle";
import { CodeSnippet } from "./component/CodeSnippet";
import { Button, Heading, Text } from "@/components";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Downloadable } from "./component/Downloadable";
import { PlayIcon } from "@/assets/icons/PlayIcon";
import { PauseIcon } from "@/assets";
import { changeBoxWidth } from "./utils";

interface Props {
  children?: React.ReactNode;
  downloadable?: boolean;
}

export const Doc = ({ children, downloadable }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: "0", tablet: "3xl" }} />
      <Stack gap="5xxl">
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

interface ExampleProps extends Props {
  canPlay?: boolean;
}

const Example = ({ children, canPlay = false }: ExampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const width = changeBoxWidth(isPlaying);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Stack>
      {canPlay && (
        <Button
          width={"fit"}
          size="sm"
          borderRadius="xs"
          variant="transparent"
          onClick={handlePlayClick}
          background="white"
        >
          <Text icon={isPlaying ? <PauseIcon /> : <PlayIcon />}>
            {isPlaying ? "Pause" : "Play"}
          </Text>
        </Button>
      )}
      <Box
        background="white"
        borderRadius="sm"
        __width={`${width}%`}
        p="md"
        borderColor="blackA5"
        borderStyle="solid"
      >
        {children}
      </Box>
    </Stack>
  );
};

const ExampleWithCode = ({ children, canPlay }: ExampleProps) => {
  const codeSnippet = reactElementToJSXString(children);
  return (
    <>
      <Example canPlay={canPlay}>{children}</Example>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

interface BlockProps extends ExampleProps {
  subTitle: string;
  description?: string;
  exampleWithCode: React.ReactNode;
}

const Block = ({
  exampleWithCode,
  subTitle,
  description,
  canPlay,
  children,
}: BlockProps) => {
  return (
    <Stack gap={"xs"}>
      <SubTitle>{subTitle}</SubTitle>
      <Description>{description}</Description>
      <ExampleWithCode canPlay={canPlay}>{exampleWithCode}</ExampleWithCode>
      {children}
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
}: Partial<PlaceholderProps & HardStyles & BoxProps>) => {
  return (
    <Box
      padding="sm"
      borderWidth="sm"
      color={props.color || "gray10"}
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
Doc.Placeholder = Placeholder;
Doc.Checkboxes = Checkboxes;
Doc.CodeSnippet = CodeSnippet;
Doc.Block = Block;
