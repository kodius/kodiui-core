import { LoginForm } from '@/module/auth/components/login'
import { getSession } from '@/module/auth/lib'
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getSession()
  if (!session) return <LoginForm />
  return <>{children}</>
}
