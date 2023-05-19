'use client'

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@cli-components/Dialog'
import { useSidebarStore } from '@features/sidebar'

export const CateogriesDialog = () => {
  const { isCategoriesDialogOpen: isOpen, setCategoriesDialog } = useSidebarStore()
  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={() => setCategoriesDialog(false)}>
      <DialogContent>
        <DialogTitle>Create a new Category</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
          consectetur cupidatat.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
