import { ButtonLink } from '@/components'
import { Cluster } from '@kodiui/ui'
import React from 'react'

export const ButtonLinkBase = () => {
  return (
    <Cluster>
      <ButtonLink href="#">Solid</ButtonLink>
      <ButtonLink variant="soft" href="#">
        Soft
      </ButtonLink>
      <ButtonLink variant="ghost" href="#">
        Ghost
      </ButtonLink>
      <ButtonLink variant="transparent" href="#">
        Transparent
      </ButtonLink>
    </Cluster>
  )
}
