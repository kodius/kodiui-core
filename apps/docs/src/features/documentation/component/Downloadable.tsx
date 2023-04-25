import { Stack } from '@kodiui/ui'
import React from 'react'
import { Doc } from '../Doc'
import { CodeSnippet } from './CodeSnippet'

export const Downloadable = () => {
  return (
    <Stack gap="sm">
      <Doc.Subtitle>Install</Doc.Subtitle>
      <CodeSnippet initialOpen codeSnippet={`npx @kodiui/cli@latest`} />
    </Stack>
  )
}
