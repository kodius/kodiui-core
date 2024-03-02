import { getSession, logout } from '@/module/auth/lib'

export default async function AuthPage() {
  const session = await getSession()
  return (
    <div>
      hello {session?.user?.name}
      <form
        action={async () => {
          'use server'
          await logout()
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}
