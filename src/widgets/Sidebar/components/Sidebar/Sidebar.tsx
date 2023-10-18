import { memo, useState } from 'react'

import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button } from 'shared/components/Button'
import { classNames } from 'shared/utils/classNames'

import classes from './Sidebar.module.scss'
import { sidebarItems } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface ISidebarProps {
  className?: string
}

export const Sidebar: React.FC<ISidebarProps> = memo((props) => {
  const { className } = props
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggleIsCollapsed = (): void => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.wrapper, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <div className={classes.links}>
        {sidebarItems.map((item) =>
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
