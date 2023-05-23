'use client'

import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const { status, data } = useSession()
  const { user, expires } = data || {}

  const isAuthenticated = status === 'authenticated'
  const isAuthenticating = status === 'loading'
  const isUnAuthenticated = status === 'unauthenticated'

  return { isAuthenticated, isAuthenticating, isUnAuthenticated, user, expires }
}
