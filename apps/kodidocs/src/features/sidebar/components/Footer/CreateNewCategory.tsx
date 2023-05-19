'use client'

import { DropdownMenuItem } from '@cli-components/DropdownMenu'
import { useSidebarStore } from '@features/sidebar/hooks/useSidebarStore'
import React from 'react'

export const CreateNewCategory = () => {
  const { setCategoriesDialog } = useSidebarStore()
  return <DropdownMenuItem onClick={() => setCategoriesDialog(true)}>Create new</DropdownMenuItem>
}
