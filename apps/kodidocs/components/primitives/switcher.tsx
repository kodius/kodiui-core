import React, { FC } from "react"
import clsx from "clsx"

import { Box, BoxProps } from "./box/box"

export const Switcher: FC<BoxProps> = ({
  children,
  display,
  flexDirection,
  gap,
  justify,
  className,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexDirection={flexDirection || "row"}
      wrap="wrap"
      justify={justify || "start"}
      gap={gap || "sm"}
      className={clsx("[&>*]:grow", className)}
      {...props}
    >
      {children}
    </Box>
  )
}
