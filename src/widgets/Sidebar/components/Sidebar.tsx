import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg'
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg'
import { APP_ROUTES } from 'shared/router'
import { AppLink } from 'shared/ui/AppLink'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/utils/classNames'

import classes from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { className } = props
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggleIsCollapsed = (): void => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <div className={classes.links}>
        <AppLink className={classes.link} color="inverted" to={APP_ROUTES.main}>
          <MainPageIcon className={classes.linkIcon} />
          <span>{t('Main')}</span>
        </AppLink>
        <AppLink className={classes.link} color="inverted" to={APP_ROUTES.about}>
          <AboutPageIcon className={classes.linkIcon} />
          <span>{t('About')}</span>
        </AppLink>
      </div>
      <Button
        className={classes.collapsedButton}
        data-testid="collapsed-button"
        color="backgroundInverted"
        square
        size="l"
        onClick={onToggleIsCollapsed}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  )
}
