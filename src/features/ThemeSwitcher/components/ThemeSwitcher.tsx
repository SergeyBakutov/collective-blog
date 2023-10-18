import { memo } from 'react'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { useTheme } from 'shared/hooks/useTheme'
import { Button } from 'shared/components/Button'
import { classNames } from 'shared/utils/classNames'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo((props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      color="clear"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'
