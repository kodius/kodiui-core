import { api } from '@/site/api'
import { User } from '../user/types'

export type GetUserResponse = {
  users: User[]
}

export const getUsers = async (consoleMessage?: string, init?: RequestInit): Promise<GetUserResponse> => {
  console.log('fatching users' + ' ' + consoleMessage)
  const resJSON = await fetch(`${api.route}/users`, init)
  console.log('fatching users finished' + ' ' + consoleMessage)
  const data = (await resJSON.json()) as GetUserResponse
  return data
}

export const createUser = async () => {
  const resJSON = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'Amazing',
      lastName: 'Progress',
      age: 250,
    }),
  })
  const data = await resJSON.json()
  console.log(data)
  return data
}
