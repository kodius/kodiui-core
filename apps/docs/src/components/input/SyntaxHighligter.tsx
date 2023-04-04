import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { docco, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  code: string;
}

const SyntaxHighligter: FC<Props> = (props) => {
  if (!props.code) return null
  return (
    <>
      <SyntaxHighlighter
        style={dracula}
        language="typescript"
        showLineNumbers
        customStyle={{ borderRadius: "5px", padding: "20px" }}
      >
        {props.code}
      </SyntaxHighlighter>
    </>
  );
};

export default SyntaxHighligter;
