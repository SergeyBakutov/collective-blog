import { useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, TTheme, ThemeContext } from 'shared/hooks/useTheme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme || 'light'

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme)

  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}
