import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
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
      <button
        data-testid="collapsed-button"
        onClick={onToggleIsCollapsed}
      >
        {isCollapsed ? t('Unroll') : t('Roll up')}
      </button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
