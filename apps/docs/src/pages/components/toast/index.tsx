import React from 'react'
import { Doc } from '@/features/documentation'
import { ToastAction, Button, useToast } from '@/components'

const ToastPage = () => {
  const { toast } = useToast()
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
          <Button
            onClick={() => {
              toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: (
                  <ToastAction altText="Try again">
                    <Button tone="success" size="sm" variant="ghost">
                      Undo
                    </Button>
                  </ToastAction>
                ),
              })
            }}
          >
            Open Toast
          </Button>
        }
      />
    </Doc>
  )
}

export default ToastPage
