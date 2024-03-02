import { redirect } from 'next/navigation'
import { getSession, login, logout } from '../lib'
import { Stack } from '@/components/primitives/stack'

export async function LoginForm() {
  const session = await getSession()
  return (
    <Stack className='text-sm'>
      <form
        action={async (formData) => {
          'use server'
          await login(formData)
          // redirect('/bible/system/auth')
        }}
      >
        <input className='p-xs' type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          'use server'
          await logout()
          redirect('/')
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Stack>
  )
}
