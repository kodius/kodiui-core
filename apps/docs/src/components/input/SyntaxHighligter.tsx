import { useThemeStore } from "@/features/theme";
import { Animation } from "@kodiui/ui";
import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: string;
  showLineNumber?: boolean;
}

const SyntaxHighligter: FC<Props> = (props) => {
  const { theme } = useThemeStore();
  const isLight = theme === "light";

  if (!props.code) return null;
  return (
    <Animation animation="fadeIn">
      <SyntaxHighlighter
        style={isLight ? docco : dracula}
        language="typescript"
        showLineNumbers={props.showLineNumber}
        customStyle={{ borderRadius: "5px", padding: "20px" }}
      >
        {props.code}
      </SyntaxHighlighter>
    </Animation>
  );
};

export default SyntaxHighligter;

SyntaxHighligter.defaultProps = {
  showLineNumber: true,
};
