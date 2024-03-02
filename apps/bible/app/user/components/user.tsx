import { Text } from '@/components/typography/text'
import { FC } from 'react'
import { User as UserType } from '../types'

export const User: FC<UserType> = (user) => {
  return (
    <div className="p-md border rounded">
      <Text>{user.firstName}</Text>
    </div>
  )
}
