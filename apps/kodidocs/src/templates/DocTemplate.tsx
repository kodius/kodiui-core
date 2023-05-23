import { DocBlock } from '@features/docs'
import { CodeSnippet } from '@features/documentation'
import { Stack } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'

interface Props {
  install?: boolean
}

export const DocTemplate: FC<PropsWithChildren & Props> = ({ children, install }) => {
  return (
    <Stack gap="xl">
      {children}
      {install && (
        <DocBlock
          title="Install"
          description="You can install this component by running a CLI script"
        >
          <CodeSnippet initialOpen codeSnippet={'npx @kodiui/cli@latest'} />
        </DocBlock>
      )}
    </Stack>
  )
}
