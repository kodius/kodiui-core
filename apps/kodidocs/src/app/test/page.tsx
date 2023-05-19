'use client'

import { Button } from '@cli-components/Button'
import { ToastAction, useToast } from '@cli-components/Toast'
import React from 'react'

const Page = () => {
  const { toast } = useToast()

  React.useEffect(() => {}, [])
  return (
    <div
      onClick={() => {
        toast({
          title: `Category successfully created`,
          action: (
            <ToastAction altText="Try again">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  //
                }}
              >
                Close
              </Button>
            </ToastAction>
          ),
        })
      }}
    >
      page
    </div>
  )
}

export default Page
