'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast'
import { useToast } from './useToast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props} duration={555555555555}>
            {title && (
              <ToastTitle>
                {title}
                {id}
              </ToastTitle>
            )}
            {description && <ToastDescription>{description}</ToastDescription>}
            <ToastClose />
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
