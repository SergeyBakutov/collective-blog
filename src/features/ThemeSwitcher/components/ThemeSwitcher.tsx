import { memo } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button } from 'shared/components/Button'
import { useTheme } from 'shared/hooks/useTheme'
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
