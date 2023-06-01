import React, { FC } from "react"
import clsx from "clsx"

import { Box, BoxProps } from "./box/box"

export const Switcher: FC<BoxProps> = ({
  children,
  display,
  flexDirection,
  gap,
  justifyContent,
  className,
  ...props
}) => {
  return (
    <Box
      display={display || "flex"}
      flexDirection={flexDirection || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent || "start"}
      gap={gap || "sm"}
      className={clsx("[&>*]:grow", className)}
      {...props}
    >
      {children}
    </Box>
  )
}
