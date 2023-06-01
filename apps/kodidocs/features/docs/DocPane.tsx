import React from "react"
import clsx from "clsx"

import { Box, BoxProps } from "@/components/primitives/box/box"
import { Text } from "@/components/typography/text"

export type DocPaneProps = Partial<BoxProps>

export const DocPane = ({ children, className, ...props }: DocPaneProps) => {
  return (
    <Box
      className={clsx(`border rounded bg-background border-border`, className)}
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
