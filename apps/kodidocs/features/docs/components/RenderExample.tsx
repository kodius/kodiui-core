"use client"

import React, { FC, PropsWithChildren, useEffect, useState } from "react"
import { PauseIcon, PlayIcon } from "lucide-react"

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

  const bgColor = "hsl(var(--muted))"
  const dotColor = "hsl(var(--border))"

  return (
    <Stack gap="xs">
      {canPlay && (
        <Button
          size="sm"
          className="w-fit"
          variant="outline"
          onClick={handlePlayClick}
        >
          {isPlaying ? (
            <PauseIcon className="w-4 mr-1" />
          ) : (
            <PlayIcon className="w-4 mr-1" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </Button>
      )}
      <Box
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${bgColor} 10px,transparent 1%) 50%,linear-gradient(${bgColor} 10px,transparent 1%) 50%, ${dotColor}`,
          backgroundSize: "13px 13px",
        }}
        p="md"
        className="border rounded border-border relative"
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
