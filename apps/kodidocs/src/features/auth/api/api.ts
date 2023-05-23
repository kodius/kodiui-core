import { getServerSession } from 'next-auth'

export const getServerUser = async () => {
  const session = await getServerSession()
  return session?.user
}

export const ifHaveServerSession = async (): Promise<boolean> => {
  const session = await getServerSession()
  if (session?.user) return true
  else return false
}
