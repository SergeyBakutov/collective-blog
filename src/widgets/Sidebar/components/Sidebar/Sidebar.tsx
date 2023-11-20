import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { getUserAuthData } from 'entities/User'
import { Button } from 'shared/components/Button'
import { HStack } from 'shared/components/Stack'
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
    <aside
      data-testid="sidebar"
      className={classNames(classes.wrapper, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <nav className={classes.links}>
        {sidebarItems.filter((item) => !(item.authOnly && !authData)).map((item) =>
          <SidebarItem key={item.path} item={item} collapsed={isCollapsed} />
        )}
      </nav>
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
      <HStack justifyContent="center" gap="20">
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </HStack>
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'
