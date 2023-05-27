import React, { FC } from "react"
import clsx from "clsx"

import { Box, BoxProps } from "./box/box"

interface CenterProps {
  direction?: "horizontal" | "vertical" | "center"
}

export const Center: FC<BoxProps & CenterProps> = ({
  children,
  direction = "horizontal",
  className,
  ...props
}) => {
  const centerVariants = {
    horizontal: `mx-auto w-fit`,
    vertical: `flex flex-col justify-center h-full w-full`,
    center: `flex flex-col items-center justify-center h-full w-full`,
  } as const

  return (
    <Box {...props} className={clsx(centerVariants[direction], className)}>
      {children}
    </Box>
  )
}
