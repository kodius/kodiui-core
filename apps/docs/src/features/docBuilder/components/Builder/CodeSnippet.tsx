import React, { FC, Suspense, useState } from "react";
import { BuildElement } from "../../types";
import { Button } from "@/components";
import dynamic from "next/dynamic";
import { Animation, Cluster } from "@kodiui/ui";

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

const ButtonProps = {
  size: "small",
  variant: "transparent",
  width: "fit",
} as const;

export const CodeSnippet: FC<BuildElement> = (props) => {
  const [isSyntaxOpen, setIsSyntaxOpen] = useState(() => props.isCodeOpen);

  if (!props.codeSnippet) return null;

  const hasSnippet = Boolean(props.codeSnippet) && isSyntaxOpen;

  const onClick = () => setIsSyntaxOpen((prev) => !prev);

  return (
    <>
      {hasSnippet && (
        <Animation animation="fadeIn">
          <Suspense fallback={<>Loading...</>}>
            <Syntax code={props.codeSnippet} />
          </Suspense>
        </Animation>
      )}
      <Cluster justifyContent="flex-end" gap="xs">
        <Button onClick={onClick} {...ButtonProps}>
          code
        </Button>
        <Button onClick={onClick} {...ButtonProps}>
          copy
        </Button>
      </Cluster>
    </>
  );
};
