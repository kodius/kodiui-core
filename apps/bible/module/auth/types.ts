export type User = {
  email: string | null
  name: string
}

export type Session = {
  expires: string
  iat: number
  exp: number
  user: User
}
