import React, { FC } from "react"
import clsx from "clsx"

import { Box, BoxProps } from "./box/box"

interface SidebarProps {
  side?: "left" | "right"
}

export const Sidebar: FC<BoxProps & SidebarProps> = ({
  children,
  display,
  gap,
  side = "left",
  className,
  ...props
}) => {
  const sideStyle = {
    left: `[&>*:first-child]:grow [&>*:last-child]:grow-[999] [&>*:last-child]:basis-0 [&>*:last-child]:min-w-[50%]`,
    right: `[&>*:last-child]:grow [&>*:first-child]:basis-0 [&>*:first-child]:grow-[999] [&>*:first-child]:min-w-[50%]`,
  } as const

  return (
    <Box
      flex
      wrap
      gap={gap || "sm"}
      className={clsx(sideStyle[side], className)}
      {...props}
    >
      {children}
    </Box>
  )
}
