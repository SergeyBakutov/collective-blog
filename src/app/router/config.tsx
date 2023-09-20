import { type RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { APP_ROUTES } from 'shared/router'

export const routes: RouteProps[] = [
  {
    path: APP_ROUTES.main,
    element: <MainPage />
  },
  {
    path: APP_ROUTES.about,
    element: <AboutPage />
  }

]
