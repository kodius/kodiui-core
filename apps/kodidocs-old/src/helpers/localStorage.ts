type LocalItemTypes = 'theme-mode'

export const LocalStorage = {
  setItem: (key: LocalItemTypes, value: string) => {
    localStorage.setItem(key, value)
  },
  getItem: (key: LocalItemTypes) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
  },
  deleteItem: (key: LocalItemTypes) => {
    if (typeof window !== 'undefined') {
      return localStorage.removeItem(key)
    }
  },
  clearStorage: () => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  },
}
