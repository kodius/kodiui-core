import { Heading } from "@/components";
import { Stack } from "@kodiui/ui";
import React, { FC } from "react";
import { BuildElement } from "../../types";
import { CodeSnippet } from "./CodeSnippet";
import { Description } from "./Description";
import { Examples } from "./Examples";

export const Builder: FC<BuildElement> = (props) => {
  const withExamples = props.example ? <Examples {...props.example} /> : null;

  const withCodeSnippet = props.codeSnippet ? <CodeSnippet {...props} /> : null;

  const withDescription = props.description?.codeSnippet ? (
    <Description {...props.description} />
  ) : null;

  return (
    <Stack gap="xs">
      <Heading level="3">{props.label}</Heading>
      {withDescription}
      {withExamples}
      {withCodeSnippet}
    </Stack>
  );
};
