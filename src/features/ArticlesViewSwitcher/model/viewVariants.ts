import ListIcon from 'shared/assets/icons/list-icon.svg'
import TileIcon from 'shared/assets/icons/tile-icon.svg'
import { type IViewVariant } from './types/viewVariant'

export const viewVariants: IViewVariant[] = [
  {
    view: 'tile',
    Icon: TileIcon
  },
  {
    view: 'list',
    Icon: ListIcon
  }
]
