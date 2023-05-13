'use client'

import { darkTheme, lightTheme, useThemeStore } from '@/styles'

export const useTheme = () => {
  const { theme } = useThemeStore()

  const activeTheme = theme === 'light' ? lightTheme : darkTheme

  return activeTheme
}
