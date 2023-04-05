import React, { FC, Suspense, useState } from "react";
import { BuildElement } from "../../types";
import { Button } from "@/components";
import dynamic from "next/dynamic";
import { Animation, FlexBox } from "@kodiui/ui";

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

export const CodeSnippet: FC<{ snippet: BuildElement["codeSnippet"] }> = (
  props
) => {
  const [isSyntaxOpen, setIsSyntaxOpen] = useState(false);

  if (!props.snippet) return null;

  const hasSnippet = Boolean(props.snippet) && isSyntaxOpen;

  const onClick = () => setIsSyntaxOpen((prev) => !prev);

  return (
    <>
      <FlexBox justifyContent="flex-end">
        <Button onClick={onClick} size="small" variant="soft" width="fit">
          code
        </Button>
      </FlexBox>
      {hasSnippet && (
        <Animation animation="fadeIn">
          <Suspense fallback={<>Loading...</>}>
            <Syntax code={props.snippet} />
          </Suspense>
        </Animation>
      )}
    </>
  );
};
