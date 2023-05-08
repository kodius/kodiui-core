import React from 'react'
import { Doc, PropsProps, VersionsProps } from '@/features/documentation'
import {
  ToastAction,
  Button,
  useToast,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components'
import { Cluster } from '@kodiui/ui'
import { Stack } from '@kodiui/ui'

const ToastPage = () => {
  const { toast, dismiss } = useToast()
  return (
    <Doc>
      <Doc.Header
        title="Toast"
        dependsOn="Radix-ui"
        description="A succinct message that is displayed temporarily."
      />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Stack>
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
                            <Button
                              tone="brandAccent"
                              size="sm"
                              variant="ghost"
                              onClick={() => dismiss}
                            >
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
                            <Button
                              tone="success"
                              size="sm"
                              variant="ghost"
                              onClick={() => dismiss}
                            >
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
                            <Button
                              tone="critical"
                              size="sm"
                              variant="ghost"
                              onClick={() => dismiss}
                            >
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
                            <Button
                              tone="neutral"
                              size="sm"
                              variant="ghost"
                              onClick={() => dismiss}
                            >
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
            <Stack>
              <Doc.Subtitle>Toaster</Doc.Subtitle>
              <Doc.Description>
                Add the {`<Toaster /> `}component to your app. The {`<Toaster />`} component is
                where your toasts are displayed. You can place it anywhere in your app, but
                it&apos;s recommended to place it at the root of your app.
              </Doc.Description>
              <Doc.CodeSnippet
                codeSnippet={`import { Toaster } from "@/components/ui/toaster"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
   )
  }
`}
              />
            </Stack>
            <Stack>
              <Doc.Subtitle>useToast hook</Doc.Subtitle>
              <Doc.Description>
                The useToast hook returns a toast function that you can use to display a toast. To
                control number of toasts at the same time, you can update the TOAST_LIMIT in
                use-toast.tsx.
              </Doc.Description>
              <Doc.CodeSnippet
                codeSnippet={`export const ToastDemo = () => {
  const { toast, dismiss } = useToast()

  return (
    <Button
    tone="success"
    onClick={() => {
      toast({
        tone: 'success',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: (
          <ToastAction altText="Try again">
            <Button
              tone="success"
              size="sm"
              variant="ghost"
              onClick={() => dismiss}
            >
              Close
            </Button>
          </ToastAction>
        ),
      })
    }}
  >
    Trigger
  </Button>
  )
}
`}
              />
            </Stack>
          </Stack>
          <Doc.Download />
        </TabsContent>
        <TabsContent value="tab2">
          <Doc.Props {...props} />
        </TabsContent>
        <TabsContent value="tab3">
          <Doc.Versions {...versions} />
        </TabsContent>
      </Tabs>
    </Doc>
  )
}

export default ToastPage

const props: PropsProps = {
  link: {
    name: 'Radix doc',
    href: 'https://www.radix-ui.com/docs/primitives/components/toast#api-reference',
  },
  props: [],
}
const versions: VersionsProps = {
  versions: [
    {
      title: 'Add Toast to components',
      description: 'Initial Toast API with useToast hook',
      version: '0.0.1',
    },
    { title: 'Initial', description: 'Initial', version: '0.0.1' },
  ],
}
