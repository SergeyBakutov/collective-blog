import { createContext } from 'react'

export type TTheme = 'light' | 'dark'

interface IThemeContext {
  theme: TTheme
  setTheme: (theme: TTheme) => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => undefined
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

