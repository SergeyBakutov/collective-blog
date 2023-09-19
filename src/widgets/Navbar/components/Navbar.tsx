import { useTranslation } from 'react-i18next'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink color="inverted" to="/">{t('Main')}</AppLink>
        <AppLink color="inverted" to="/about">{t('About')}</AppLink>
      </div>
    </div>
  )
}
