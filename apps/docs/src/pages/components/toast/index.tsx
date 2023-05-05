import React from 'react'
import { Doc } from '@/features/documentation'
import {
  ToastTitle,
  Toast,
  ToastDescription,
  ToastAction,
  ToastViewport,
  ToastProvider,
  Button,
  ToastClose,
} from '@/components'
import { CrossCircledIcon } from '@radix-ui/react-icons'

const ToastPage = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Doc>
      <CrossCircledIcon />
      <Doc.Header
        title="Toast"
        dependsOn="Radix-ui"
        description="A succinct message that is displayed temporarily."
      />
      <Doc.Block
        subTitle="Example"
        description="Basic example"
        exampleWithCode={
          <ToastProvider swipeDirection="right">
            <Button
              onClick={() => {
                setOpen(false)
                setOpen(true)
              }}
            >
              Open Toast
            </Button>
            <Toast open={open} onOpenChange={setOpen}>
              <ToastTitle>Title</ToastTitle>
              <ToastDescription>Description</ToastDescription>
              <ToastClose asChild />
              <ToastAction asChild altText="Undo">
                <Button tone="success" size="sm" variant="ghost">
                  Undo
                </Button>
              </ToastAction>
            </Toast>
            <ToastViewport />
          </ToastProvider>
        }
      />
    </Doc>
  )
}

export default ToastPage
