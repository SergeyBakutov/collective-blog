import { useCallback } from 'react'

import { Card } from 'shared/components/Card'
import { classNames } from 'shared/utils/classNames'

import classes from './Tabs.module.scss'

export interface ITabItem<T extends string> {
  value: T
  content: React.ReactNode
}

interface ITabsProps<T extends string> {
  className?: string
  tabs: Array<ITabItem<T>>
  value: T
  onTabClick: (tab: T) => void
}

export const Tabs = <T extends string>(props: ITabsProps<T>): JSX.Element => {
  const { className, tabs, value, onTabClick } = props

  const onTabClickHandler = useCallback((tabItem: T) => () => {
    onTabClick(tabItem)
  }, [onTabClick])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={classNames(classes.tab, { [classes.selected]: tab.value === value }, [className])}
          onClick={onTabClickHandler(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
