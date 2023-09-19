import { useState } from 'react'

import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { classNames } from 'shared/utils/classNames'

import classes from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { className } = props
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggleIsCollapsed = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(classes.sidebar, { [classes.collapsed]: isCollapsed }, [className])}>
      <button onClick={onToggleIsCollapsed}>toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
