import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink color="inverted" to="/">Main</AppLink>
        <AppLink color="inverted" to="/about">About</AppLink>
      </div>
    </div>
  )
}
