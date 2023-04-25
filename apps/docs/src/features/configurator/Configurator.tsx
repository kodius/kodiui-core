import { Drawer } from '@/components'
import { vars } from '@kodiui/ui'
import React from 'react'
import { useConfiguratorStore } from './store/useConfiguratorStore'

export const Configurator = () => {
  const { isConfiguratorOpen, setConfiguratorState } = useConfiguratorStore()

  const onClose = () => setConfiguratorState(false)

  return (
    <Drawer title="Configurator" open={isConfiguratorOpen} onClose={onClose}>
      <input type="color" value={vars.colors.brand} />
    </Drawer>
  )
}
