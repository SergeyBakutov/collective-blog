import MainPageIcon from 'shared/assets/icons/main-page-icon.svg'
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg'
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg'
import { APP_ROUTES } from 'shared/router'

import { type ISidebarItem } from './types/item'

export const sidebarItems: ISidebarItem[] = [
  {
    path: APP_ROUTES.main,
    text: 'Main',
    Icon: MainPageIcon
  },
  {
    path: APP_ROUTES.about,
    text: 'About',
    Icon: AboutPageIcon
  },
  {
    path: APP_ROUTES.profile,
    text: 'Profile',
    Icon: ProfilePageIcon,
    authOnly: true
  }
]
