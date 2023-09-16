import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, TTheme, ThemeContext } from './ThemeContext'

interface IUseThemeReturn {
  theme: TTheme
  toggleTheme: () => void
}

export function useTheme(): IUseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
