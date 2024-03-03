import { createUser } from '@/app/api/users'
import { Button } from '@/components/ui/button'

export const CreateUser = () => {
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await createUser()
        }}
      >
        <Button type="submit">create user</Button>
      </form>
    </div>
  )
}
