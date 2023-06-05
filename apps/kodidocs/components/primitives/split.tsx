import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const Split: FC<BoxProps> = ({
  children,
  display,
  gap,
  justify,
  wrap,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      wrap={wrap || "wrap"}
      justify={justify || "between"}
      gap={gap || "sm"}
      {...props}
    >
      {children}
    </Box>
  )
}
