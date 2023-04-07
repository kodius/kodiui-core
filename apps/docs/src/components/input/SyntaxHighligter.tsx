import { useThemeStore } from "@/features/theme";
import { Animation, vars } from "@kodiui/ui";
import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  atomOneDark,
  arduinoLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        style={isLight ? atomOneDark : arduinoLight}
        language="typescript"
        showLineNumbers={props.showLineNumber}
        customStyle={{
          fontSize: "1rem",
          borderRadius: "5px",
          padding: "1.25rem",
          fontWeight: 600,
          fontFamily: "monospace",
          color: vars.colors.blue4,
        }}
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
