'use client'

import { routes } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Center, Stack } from '@kodiui/ui'
import { signIn } from 'next-auth/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CreateSessionInput } from '@gql/graphql'
import { Input } from '@cli-components/Input'
import { Button } from '@cli-components/Button'
import { ZodKeyChecker } from '@types'

const LoginPage = () => {
  const form = useForm<CreateSessionInput>()

  const onSubmit = async (data: CreateSessionInput) => {
    console.log(data)

    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: routes.home,
    }).catch((err) => console.log('errrr', err))
  }
  return (
    <Box height="screen">
      <Center direction="center">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack>
              <Input<CreateSessionInput>
                name="email"
                label="email"
                placeholder="email"
                type="email"
              />
              <Input<CreateSessionInput>
                name="password"
                type="password"
                label="passwrod"
                placeholder="passwrod"
              />
              <Button>Login</Button>
            </Stack>
          </form>
        </FormProvider>
      </Center>
    </Box>
  )
}

export default LoginPage

const loginSchema = z.object<ZodKeyChecker<CreateSessionInput>>({
  email: z.string().email().optional(),
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
})
