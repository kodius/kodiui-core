import { create } from 'zustand'
import { Theme } from '../types'
import { LocalStorage } from '@/helpers'

type ThemeFn = (currentTheme: Theme) => Theme

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const reverseTheme: ThemeFn = (t) => (t === 'light' ? 'dark' : 'light')

const setThemeToLocalStorate = (t: Theme) => LocalStorage.setItem('theme-mode', t)

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (LocalStorage.getItem('theme-mode') as Theme) || 'light',
  setTheme: (theme) =>
    set(() => {
      setThemeToLocalStorate(theme)
      return { theme }
    }),
  toggleTheme: () =>
    set((s) => {
      setThemeToLocalStorate(reverseTheme(s.theme))
      return { theme: reverseTheme(s.theme) }
    }),
}))
