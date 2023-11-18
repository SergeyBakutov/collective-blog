import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/components/AppLink'
import { Icon } from 'shared/components/Icon'
import { HStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import { type ISidebarItem } from '../../model/types/item'
import classes from './SidebarItem.module.scss'

interface ISidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem: React.FC<ISidebarItemProps> = memo((props) => {
  const { item, collapsed } = props
  const { t } = useTranslation()

  return (
    <AppLink
      className={classNames('', { [classes.collapsedLink]: collapsed }, [])}
      color="inverted"
      to={item.path}
    >
      <HStack alignItems="center" gap="20">
        <Icon color="inverted" Svg={item.Icon} />
        <span>{t(item.text)}</span>
      </HStack>
    </AppLink>
  )
})

SidebarItem.displayName = 'SidebarItem'
