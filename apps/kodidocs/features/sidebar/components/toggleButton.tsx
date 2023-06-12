"use client"

import React, { FC, ReactNode, useState } from "react"

import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export const ToggleButton: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Stack
        gap="xs"
        className="absolute top-4 right-4 md:hidden"
        onClick={handleToggle}
      >
        <Box
          className={`h-px w-6 bg-white transition-transform duration-300 ${
            isMenuOpen ? "translate-y-2" : "translate-y-0"
          } `}
        />
        <Box className="h-px w-6 bg-white" />
        <Box
          className={`h-px w-6 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-translate-y-2" : "translate-y-0"
          } `}
        />
      </Stack>
      <div
        className={`transition-all duration-300 md:block ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  )
}
