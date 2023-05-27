import { Button } from '@/components'
import React from 'react'
import { AdjustmentsIcon, useConfiguratorStore } from '..'

export const OpenConfigurator = () => {
  const { setConfiguratorState, isConfiguratorOpen } = useConfiguratorStore()

  const onClick = () => setConfiguratorState(true)

  const variant = isConfiguratorOpen ? 'ghost' : 'transparent'

  return (
    <Button variant={variant} size="sm" width="fit" onClick={onClick}>
      <AdjustmentsIcon />
    </Button>
  )
}
