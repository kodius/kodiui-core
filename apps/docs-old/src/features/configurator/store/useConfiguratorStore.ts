import { create } from 'zustand'

interface ConfiguratorStore {
  isConfiguratorOpen: boolean
  setConfiguratorState: (state: boolean) => void
}

export const useConfiguratorStore = create<ConfiguratorStore>((set) => ({
  isConfiguratorOpen: false,
  setConfiguratorState: (state) =>
    set(() => ({
      isConfiguratorOpen: state,
    })),
}))
