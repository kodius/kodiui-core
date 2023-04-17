import { Button } from "@/components/input/Button";
import { Cluster } from "@kodiui/ui";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { copyText } from "./utils";

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

export type CodeSnippetProps = Pick<
  SyntaxHighlighterProps,
  "showLineNumbers" | "codeSnippet"
>;

export const CodeSnippet = ({
  codeSnippet = "",
  showLineNumbers = false,
}: CodeSnippetProps) => {
  const [isSnippetOpen, setIsSnippetOpen] = React.useState(false);

  const toggleSnippet = () => setIsSnippetOpen((prev) => !prev);
  return (
    <>
      {isSnippetOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Syntax showLineNumber={showLineNumbers} code={codeSnippet} />
        </Suspense>
      )}
      <Cluster justifyContent="flex-end" gap="xs">
        <Button
          onClick={toggleSnippet}
          size="sm"
          variant="transparent"
          width="fit"
        >
          code
        </Button>
        {isSnippetOpen && (
          <Button
            onClick={() => copyText(codeSnippet)}
            size="sm"
            variant="transparent"
            width="fit"
          >
            copy
          </Button>
        )}
      </Cluster>
    </>
  );
};
