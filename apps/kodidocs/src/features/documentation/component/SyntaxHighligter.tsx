import { Animation, vars } from '@kodiui/ui'
import React, { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface Props {
  code: string
  showLineNumber?: boolean
}

const SyntaxHighligter: FC<Props> = (props) => {
  if (!props.code) return null
  return (
    <Animation animation="fadeIn">
      <SyntaxHighlighter
        language="typescript"
        showLineNumbers={props.showLineNumber}
        customStyle={{
          fontSize: '1rem',
          padding: '1.25rem',
          background: vars.colors.sky5,
          color: vars.colors.brand,
        }}
      >
        {props.code}
      </SyntaxHighlighter>
    </Animation>
  )
}

export default SyntaxHighligter

SyntaxHighligter.defaultProps = {
  showLineNumber: true,
}
