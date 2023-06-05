import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const Cluster: FC<BoxProps> = ({
  children,
  display,
  flexDirection,
  gap,
  justify,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexDirection={flexDirection || undefined}
      wrap="wrap"
      justify={justify || "start"}
      gap={gap || "sm"}
      {...props}
    >
      {children}
    </Box>
  )
}
