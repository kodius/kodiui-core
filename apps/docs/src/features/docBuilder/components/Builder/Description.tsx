import { Button, Text } from "@/components";
import { FlexBox, Stack } from "@kodiui/ui";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { copyText } from "../../helpers/copyText";
import { BuildElement } from "../../types";

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

export const Description: FC<BuildElement["description"]> = (props) => {
  if (!props?.codeSnippet) return null;

  const index = props.description.length;

  const makeArray = Array(index).fill("");

  const Component = makeArray.map((_, i) => (
    <Stack gap="xxs" key={i}>
      {props.description ? (
        <Text.Base> {props.description[i]} </Text.Base>
      ) : null}
      <Syntax code={props.codeSnippet[i]} showLineNumber={false} />
      <FlexBox justifyContent="flex-end">
        <Button
          onClick={() => copyText(props.codeSnippet[i])}
          size="small"
          variant="transparent"
        >
          copy
        </Button>
      </FlexBox>
    </Stack>
  ));

  return <Stack gap="xs">{Component}</Stack>;
};
