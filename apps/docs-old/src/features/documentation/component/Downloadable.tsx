import { Stack } from '@kodiui/ui'
import React from 'react'
import { Doc } from '../Doc'
import { CodeSnippet } from './CodeSnippet'

export const Downloadable = () => {
  return (
    <Stack gap="md">
      <Doc.Block
        subTitle="Install"
        description="You can install this component by running a CLI script"
      />
      <CodeSnippet initialOpen codeSnippet={`npx @kodiui/cli@latest`} />
    </Stack>
  )
}
