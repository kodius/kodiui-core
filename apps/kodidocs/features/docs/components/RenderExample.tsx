"use client"

import React, { FC, PropsWithChildren, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Box } from "@/components/primitives/box/box"
import { Stack } from "@/components/primitives/stack"

export interface RenderExmapleProps {
  canPlay?: boolean
}

export const RenderExample: FC<PropsWithChildren & RenderExmapleProps> = ({
  children,
  canPlay,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const width = ChangeBoxWidth(isPlaying)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <Stack gap="xs">
      {canPlay && (
        <Button size="sm" variant="ghost" onClick={handlePlayClick}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      )}
      <Box
        style={{ width: `${width}%` }}
        background="gray-200"
        p="md"
        className="border"
      >
        {children}
      </Box>
    </Stack>
  )
}

const ChangeBoxWidth = (isPlaying: boolean) => {
  const [width, setWidth] = useState(100)
  const [isGrowing, setIsGrowing] = useState(true)
  const widthChange = 0.2

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setWidth((currentWidth) => {
          if (currentWidth >= 100) {
            setIsGrowing(false)
            return currentWidth - widthChange
          } else if (currentWidth <= 15) {
            setIsGrowing(true)
            return currentWidth + widthChange
          } else {
            return isGrowing
              ? currentWidth + widthChange
              : currentWidth - widthChange
          }
        })
      }, 10)
      return () => clearInterval(timer)
    }
  }, [isGrowing, isPlaying])
  return width
}
