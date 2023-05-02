import { Badge, Input } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'

import { FormProvider, useForm } from 'react-hook-form'

interface ExampleForm {
  name: string
  password: string
}

const InputPage = () => {
  const form = useForm<ExampleForm>()

  const onSubmit = (data: ExampleForm) => {
    console.log(data)
  }

  return (
    <Doc>
      <Stack>
        <Doc.Title>Input</Doc.Title>
        <Badge tone="brandAccent">react-hook-form</Badge>
      </Stack>
      <Doc.Block
        subTitle="Input with reac-hook form"
        exampleWithCode={
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Input<ExampleForm> name="name" label="uncontrolled" placeholder="name" />
              <br />
              <Input<ExampleForm> controled label="controlled" placeholder="name" />
            </form>
          </FormProvider>
        }
      />
    </Doc>
  )
}

export default InputPage
