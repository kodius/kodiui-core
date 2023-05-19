'use client'

import { Button } from '@cli-components/Button'
import { DialogBlock } from '@cli-components/Dialog'
import { Input } from '@cli-components/Input'
import { useToast } from '@cli-components/Toast'
import { Category, CreateElementDocument, CreateElementMutationVariables } from '@gql/graphql'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack } from '@kodiui/ui'
import { graphQlClient } from '@lib'
import { useMutation } from '@tanstack/react-query'
import { ZodKeyChecker } from '@types'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

export const CreateNewElement: FC<Category | undefined | null> = (category) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<CreateElementMutationVariables>({ resolver: zodResolver(resolver) })
  const router = useRouter()
  const { toast } = useToast()

  const mutation = useMutation((args: CreateElementMutationVariables) => {
    if (!category?.id) throw new Error('No category id')
    return graphQlClient.request(CreateElementDocument, { ...args, categoryId: category?.id })
  })

  const submit = (data: CreateElementMutationVariables) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.refresh()
        setIsDialogOpen(false)
        form.reset()
        toast({ title: 'Element created!', tone: 'success' })
      },
      onError: (e: any) => {
        toast({ title: e?.message, tone: 'critical' })
      },
    })
  }

  const onOpenChange = () => setIsDialogOpen(false)
  const onClick = () => setIsDialogOpen(true)

  return (
    <>
      <Button onClick={onClick} width="full" size="sm" variant="transparent">
        Create new Element
      </Button>
      <DialogBlock
        open={isDialogOpen}
        onOpenChange={onOpenChange}
        title="Create a new Element"
        description={`Creates a new Element insdie ${category?.name} category`}
      >
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <Stack>
              <Input<CreateElementMutationVariables> name="name" label="name" />
              <Input<CreateElementMutationVariables> name="description" label="description" />
              <Button loading={mutation.isLoading} variant="soft">
                Create
              </Button>
            </Stack>
          </form>
        </FormProvider>
      </DialogBlock>
    </>
  )
}

const resolver = z.object<ZodKeyChecker<CreateElementMutationVariables>>({
  name: z.string().min(3),
  description: z.string().min(3),
})
