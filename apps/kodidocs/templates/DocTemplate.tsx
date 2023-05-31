import React, { FC, PropsWithChildren } from "react"
import { DocBlock } from "@/features/docs/DocBlock"
import { CodeSnippet } from "@/features/docs/components/CodeSnippet"

import { Stack } from "@/components/primitives/stack"

interface Props {
  install?: boolean
}

export const DocTemplate: FC<PropsWithChildren & Props> = ({
  children,
  install,
}) => {
  return (
    <Stack gap="xl">
      {children}
      {install && (
        <DocBlock
          title="Install"
          description="You can install this component by running a CLI script"
        >
          <CodeSnippet initialOpen codeSnippet={"npx @kodiui/cli@latest"} />
        </DocBlock>
      )}
    </Stack>
  )
}
