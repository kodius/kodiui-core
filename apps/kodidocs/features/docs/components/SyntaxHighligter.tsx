import React, { FC } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import * as Themes from "react-syntax-highlighter/dist/esm/styles/hljs"

interface Props {
  code: string
  showLineNumber?: boolean
}

const SyntaxHighligter: FC<Props> = ({ showLineNumber = true, ...props }) => {
  if (!props.code) return null
  return (
    <div className="fade-in">
      <SyntaxHighlighter
        style={Themes.atomOneDark}
        language="typescript"
        showLineNumbers={showLineNumber}
        customStyle={{
          fontSize: "1rem",
          borderRadius: "5px",
          padding: "1.25rem",
          fontWeight: 600,
          fontFamily: "inter",
        }}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  )
}

export default SyntaxHighligter
