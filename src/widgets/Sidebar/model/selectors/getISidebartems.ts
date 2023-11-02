import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthData } from 'entities/User'
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg'
import ArticlesPageIcon from 'shared/assets/icons/articles-page-icon.svg'
import MainPageIcon from 'shared/assets/icons/main-page-icon.svg'
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg'
import { APP_ROUTES } from 'shared/router'

import { type ISidebarItem } from '../types/item'

export const getSidebarItems = createSelector(getUserAuthData, (authData): ISidebarItem[] => {
  if (authData) {
    return [
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
        path: APP_ROUTES.profile + authData.id,
        text: 'Profile',
        Icon: ProfilePageIcon,
        authOnly: true
      },
      {
        path: APP_ROUTES.articles,
        text: 'Articles',
        Icon: ArticlesPageIcon,
        authOnly: true
      }
    ]
  }

  return [
    {
      path: APP_ROUTES.main,
      text: 'Main',
      Icon: MainPageIcon
    },
    {
      path: APP_ROUTES.about,
      text: 'About',
      Icon: AboutPageIcon
    }
  ]
})
