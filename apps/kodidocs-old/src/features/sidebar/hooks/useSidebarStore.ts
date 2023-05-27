'use client'

import { create } from 'zustand'

interface SidebarStore {
  isCategoriesDialogOpen: boolean
  setCategoriesDialog: (state: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isCategoriesDialogOpen: false,
  setCategoriesDialog: (state) => set(() => ({ isCategoriesDialogOpen: state })),
}))
