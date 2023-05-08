import React from 'react'
import { Doc } from '@/features/documentation'
import { ToastAction, Button, useToast } from '@/components'
import { Cluster } from '@kodiui/ui'

const ToastPage = () => {
  const { toast, dismiss } = useToast()
  return (
    <Doc>
      <Doc.Header
        title="Toast"
        dependsOn="Radix-ui"
        description="A succinct message that is displayed temporarily."
      />
      <Doc.Block
        subTitle="Example"
        description="Usage with tones"
        exampleWithCode={
          <Cluster>
            <Button
              onClick={() => {
                toast({
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
            <Button
              tone="brandAccent"
              onClick={() => {
                toast({
                  tone: 'brandAccent',
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button tone="brandAccent" size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
            <Button
              tone="success"
              onClick={() => {
                toast({
                  tone: 'success',
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button tone="success" size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
            <Button
              tone="info"
              onClick={() => {
                toast({
                  tone: 'info',
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button tone="info" size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
            <Button
              tone="critical"
              onClick={() => {
                toast({
                  tone: 'critical',
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button tone="critical" size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
            <Button
              tone="neutral"
              onClick={() => {
                toast({
                  tone: 'neutral',
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                  action: (
                    <ToastAction altText="Try again">
                      <Button tone="neutral" size="sm" variant="ghost" onClick={() => dismiss}>
                        Close
                      </Button>
                    </ToastAction>
                  ),
                })
              }}
            >
              Trigger
            </Button>
          </Cluster>
        }
      />
    </Doc>
  )
}

export default ToastPage
