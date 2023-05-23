'use client'

import { Button } from '@cli-components/Button'
import { Box, Stack } from '@kodiui/ui'
import { PauseIcon, PlayIcon } from 'lucide-react'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'

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
        <Button
          width="fit"
          size="sm"
          variant="transparent"
          icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
          onClick={handlePlayClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
      )}
      <Box
        __width={`${width}%`}
        background="body"
        p="md"
        borderStyle="solid"
        borderColor="brandSoft"
        borderWidth="md"
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
          } else if (currentWidth <= 30) {
            setIsGrowing(true)
            return currentWidth + widthChange
          } else {
            return isGrowing ? currentWidth + widthChange : currentWidth - widthChange
          }
        })
      }, 10)
      return () => clearInterval(timer)
    }
  }, [isGrowing, isPlaying])
  return width
}
