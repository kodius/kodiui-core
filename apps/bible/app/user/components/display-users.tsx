import { GetUserResponse } from '@/app/api/users'
import { User } from './user'
import { FC } from 'react'
import { BasicList } from '@/app/_templates/basic-list'

export const DisplayUsers: FC<GetUserResponse> = ({ users }) => {
  return (
    <BasicList title="Users:">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </BasicList>
  )
}
