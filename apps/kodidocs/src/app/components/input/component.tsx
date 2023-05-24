'use client'

import { Input } from '@cli-components/Input'
import { DocBlock, DocPane } from '@features/docs'
import { DocPaneProps } from '@features/docs/DocPane'
import { Box } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface ExampleForm {
  name: string
  password: string
}

export const Component = () => {
  const form = useForm<ExampleForm>()

  const onSubmit = (data: ExampleForm) => {
    console.log(data)
  }
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Exmaple"
        description="Uncontrolled, controlled input"
        exampleWithCode={
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Input<ExampleForm> name="name" label="uncontrolled" placeholder="name" />
              <br />
              <Input<ExampleForm> controlled label="controlled" placeholder="name" />
            </form>
          </FormProvider>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return (
    <Box __width={Math.random() * 100 + 300}>
      <DocPane {...props}>Element</DocPane>
    </Box>
  )
}
