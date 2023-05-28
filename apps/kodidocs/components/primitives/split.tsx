import React, { FC } from "react"

import { Box, BoxProps } from "./box/box"

export const Split: FC<BoxProps> = ({
  children,
  display,
  gap,
  justifyContent,
  flexWrap,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexWrap={flexWrap || "wrap"}
      justifyContent={justifyContent || "between"}
      gap={gap || "sm"}
      {...props}
    >
      {children}
    </Box>
  )
}
