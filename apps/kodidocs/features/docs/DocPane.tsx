import React from "react"

import { Box, BoxProps } from "@/components/primitives/box/box"
import { Text } from "@/components/typography/text"

export type DocPaneProps = Partial<BoxProps>

export const DocPane = ({ children, ...props }: DocPaneProps) => {
  return (
    <Box
      className="border rounded bg-background border-border"
      p="sm"
      color="brand"
      style={{ fontFamily: "monospace" }}
      {...props}
    >
      <Text textAlign="center" size="sm">
        {children}
      </Text>
    </Box>
  )
}
