import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { Session } from './types'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)
const expires = new Date(Date.now() + 86400 * 1000) // 86400 sec  / 1 day

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 day from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(formData: FormData) {
  // Verify credentials && get the user

  const user = { email: formData.get('email'), name: 'John' }

  // Create the session
  const session = await encrypt({ user, expires })

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true })
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession(): Promise<Session | null> {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = expires
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
