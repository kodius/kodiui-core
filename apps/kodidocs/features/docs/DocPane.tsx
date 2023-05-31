import React from "react"

import { Box, BoxProps } from "@/components/primitives/box/box"
import { Text } from "@/components/typography/text"

export type DocPaneProps = Partial<BoxProps>

export const DocPane = ({ children, ...props }: DocPaneProps) => {
  return (
    <Box
      className="border"
      p="sm"
      color="brand"
      background="green-200"
      style={{ fontFamily: "monospace" }}
      {...props}
    >
      <Text textAlign="center" size="sm">
        {children}
      </Text>
    </Box>
  )
}