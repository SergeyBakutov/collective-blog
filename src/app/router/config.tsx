import { type RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { APP_ROUTES } from 'shared/router'

export const routes: RouteProps[] = [
  {
    path: APP_ROUTES.main,
    element: <MainPage />
  },
  {
    path: APP_ROUTES.about,
    element: <AboutPage />
  },
  {
    path: APP_ROUTES.profile,
    element: <ProfilePage />
  },
  {
    path: APP_ROUTES['not-found'],
    element: <NotFoundPage />
  }
]
