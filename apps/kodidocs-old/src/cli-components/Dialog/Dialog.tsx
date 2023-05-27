'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import classNames from 'classnames'
import { dialogClose, dialogContent, dialogOverlay } from './dialog.css'
import { Heading } from '@cli-components/Heading'
import { Text } from '@cli-components/Text'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ className, children, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={classNames(className)} {...props}>
    {children}
  </DialogPrimitive.Portal>
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={classNames(dialogOverlay, className)} {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content ref={ref} className={classNames(dialogContent, className)} {...props}>
      {children}
      <DialogPrimitive.Close className={dialogClose}>
        <X width={'16px'} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} {...props}>
    {children}
  </DialogPrimitive.Close>
))
DialogClose.displayName = DialogPrimitive.Close.displayName

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={classNames(className)} asChild {...props}>
    <Heading level="2">{props.children}</Heading>
  </DialogPrimitive.Title>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={classNames(className)} {...props}>
    <Text size="small">{props.children}</Text>
  </DialogPrimitive.Description>
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose }
