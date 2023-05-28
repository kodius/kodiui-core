import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const Cluster: FC<BoxProps> = ({
  children,
  display,
  flexDirection,
  gap,
  justifyContent,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexDirection={flexDirection || undefined}
      flexWrap="wrap"
      justifyContent={justifyContent || "start"}
      gap={gap || "sm"}
      {...props}
    >
      {children}
    </Box>
  )
}
