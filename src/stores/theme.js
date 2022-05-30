import { defineStore } from 'pinia'

const THEME = Object.freeze({
  lightTheme: 'lightTheme',
  darkTheme: 'darkTheme',
})
export const useThemeStore = defineStore('theme', {
  state: () => {
    return { theme: THEME.lightTheme }
  },
  getters: {
    tailwindThemeMode: ({ theme }) => {
      return theme === THEME.lightTheme ? 'light' : 'dark'
    },
  },
})
