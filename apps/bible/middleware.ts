import { NextRequest } from 'next/server'
import { updateSession } from '@/module/auth/lib'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
