import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const FlexBox: FC<BoxProps> = ({ children, display, gap, ...props }) => {
  return (
    <Box display={display || "flex"} gap={gap || "sm"} {...props}>
      {children}
    </Box>
  )
}
