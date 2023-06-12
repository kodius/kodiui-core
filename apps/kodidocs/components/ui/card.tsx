import React, { FC, ReactNode } from "react"

import { Box } from "../primitives/box/box"

interface CardProps {
  children?: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <Box
      p="sm"
      className="border border-border hover:border-gray-600 rounded-xl transition ease-in-out duration-300 "
    >
      {children}
    </Box>
  )
}
