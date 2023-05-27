'use client'

import { Button } from '@cli-components/Button/Button'
import { DialogBlock } from '@cli-components/Dialog'
import { Input } from '@cli-components/Input'
import { useSidebarStore } from '@features/sidebar'
import { CreateCategoryDocument, CreateCategoryMutationVariables } from '@gql/graphql'
import { Stack } from '@kodiui/ui'
import { graphQlClient } from '@lib'
import { useMutation } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useToast } from '@cli-components/Toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ZodKeyChecker } from '@types'

export const CateogriesDialog = () => {
  const { isCategoriesDialogOpen: isOpen, setCategoriesDialog } = useSidebarStore()
  const form = useForm<CreateCategoryMutationVariables>({ resolver: zodResolver(resolver) })
  const router = useRouter()

  const { toast } = useToast()

  const mutation = useMutation((args: CreateCategoryMutationVariables) =>
    graphQlClient.request(CreateCategoryDocument, args)
  )

  const submit = async (data: CreateCategoryMutationVariables) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: `Category ${data.name} successfully created`,
          tone: 'success',
        })
        router.refresh()
        setCategoriesDialog(false)
        form.reset()
      },
    })
  }

  if (!isOpen) return null

  return (
    <DialogBlock
      open={isOpen}
      title="Create a new Category"
      description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex e"
      onOpenChange={() => setCategoriesDialog(false)}
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <Stack>
            <Input<CreateCategoryMutationVariables> name="name" label="name" />
            <Button loading={mutation.isLoading}>Create</Button>
          </Stack>
        </form>
      </FormProvider>
    </DialogBlock>
  )
}

const resolver = z.object<ZodKeyChecker<CreateCategoryMutationVariables>>({
  name: z.string().min(3),
})
