import { Animation, Center } from '@kodiui/ui'
import React from 'react'
import { DotsBounceIcon } from './DotsBounceIcon'

export const Loading = () => {
  return (
    <Animation animation="fadeIn">
      <Center>
        <DotsBounceIcon />
      </Center>
    </Animation>
  )
}
