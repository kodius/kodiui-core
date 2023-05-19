import React, { FC, ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './Dialog'
import { Stack } from '@kodiui/ui'
import { DialogProps } from '@radix-ui/react-dialog'

interface Props extends DialogProps {
  title: string
  description?: string
  children: ReactNode
}

export const DialogBlock: FC<Props> = ({ title, description, children, ...dialogProps }) => {
  return (
    <Dialog {...dialogProps}>
      <DialogContent>
        <Stack>
          <Stack gap="xxs">
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </Stack>
          {children}
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
