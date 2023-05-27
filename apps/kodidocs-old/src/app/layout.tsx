export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import { Toaster } from '@cli-components/Toast/Toaster'
import { QueryProvider } from '@lib'
import { ThemeProvider } from '@styles'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <QueryProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </QueryProvider>
    </html>
  )
}