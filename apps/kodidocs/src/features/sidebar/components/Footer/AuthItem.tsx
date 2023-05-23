'use client'

import { DropdownMenuItem } from '@cli-components/DropdownMenu'
import { useAuth } from '@features/auth'
import { LogInIcon, LogOutIcon } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

export const AuthItem = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return (
      <DropdownMenuItem onClick={() => signOut()}>
        <LogOutIcon width={'14px'} />
        Logout
      </DropdownMenuItem>
    )
  } else {
    return (
      <DropdownMenuItem onClick={() => signIn()}>
        <LogInIcon width="14px" /> Login
      </DropdownMenuItem>
    )
  }
}
