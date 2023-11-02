import { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import { getUserAuthData } from 'entities/User'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button } from 'shared/components/Button'
import { classNames } from 'shared/utils/classNames'

import { getSidebarItems } from '../../model/selectors/getISidebartems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import classes from './Sidebar.module.scss'
interface ISidebarProps {
  className?: string
}

export const Sidebar: React.FC<ISidebarProps> = memo((props) => {
  const { className } = props
  const [isCollapsed, setIsCollapsed] = useState(false)
  const authData = useSelector(getUserAuthData)
  const sidebarItems = useSelector(getSidebarItems)

  const onToggleIsCollapsed = (): void => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.wrapper, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <div className={classes.links}>
        {sidebarItems.filter((item) => !(item.authOnly && !authData)).map((item) =>
          <SidebarItem key={item.path} item={item} collapsed={isCollapsed} />
        )}
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
})

Sidebar.displayName = 'Sidebar'
