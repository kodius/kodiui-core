import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const Stack: FC<BoxProps> = ({
  children,
  display,
  flexDirection,
  gap,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexDirection={flexDirection || "flexCol"}
      gap={gap || "sm"}
      {...props}
    >
      {children}
    </Box>
  )
}
