import { Heading } from "@/components";
import { Stack } from "@kodiui/ui";
import React, { FC } from "react";
import { BuildElement } from "../../types";
import { CodeSnippet } from "./CodeSnippet";
import { Examples } from "./Examples";

export const Builder: FC<BuildElement> = (props) => {
  // const [isViewCode, setIsViewCode] = useState(false);

  const withExamples = props.example ? <Examples {...props.example} /> : null;
  const withCodeSnippet = props.codeSnippet ? <CodeSnippet {...props} /> : null;

  return (
    <Stack gap="xs">
      <Heading.H3>{props.label}</Heading.H3>
      {withExamples}
      {withCodeSnippet}
    </Stack>
  );
};
