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
} from '@/components'

const ToastPage = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Doc>
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
            <Toast className="ToastRoot" open={open} onOpenChange={setOpen}>
              <ToastTitle>Title</ToastTitle>
              <ToastDescription>Description</ToastDescription>
              <ToastAction asChild altText="Undo">
                <Button tone="success" size="sm" variant="ghost">
                  Undo
                </Button>
              </ToastAction>
            </Toast>
            <ToastViewport className="ToastViewport" />
          </ToastProvider>
        }
      />
    </Doc>
  )
}

export default ToastPage
