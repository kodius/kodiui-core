'use client'

import { Button } from '@cli-components/Button/Button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@cli-components/Dialog'
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
    <Dialog open={isOpen} onOpenChange={() => setCategoriesDialog(false)}>
      <DialogContent>
        <DialogTitle>Create a new Category</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
          consectetur cupidatat.
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <Stack>
                <Input<CreateCategoryMutationVariables> name="name" label="name" />
                <Button loading={mutation.isLoading}>Create</Button>
              </Stack>
            </form>
          </FormProvider>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

const resolver = z.object<ZodKeyChecker<CreateCategoryMutationVariables>>({
  name: z.string().min(1),
})
