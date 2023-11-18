import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { APP_ROUTES } from 'shared/router'

type TAppRouteProps = RouteProps & {
  authOnly?: boolean
}

export const routes: TAppRouteProps[] = [
  {
    path: APP_ROUTES.main,
    element: <MainPage />
  },
  {
    path: APP_ROUTES.about,
    element: <AboutPage />
  },
  {
    path: `${APP_ROUTES.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  {
    path: APP_ROUTES.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  {
    path: `${APP_ROUTES.articleDetails}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  {
    path: `${APP_ROUTES.articleCreate}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  {
    path: `${APP_ROUTES.articleEdit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  {
    path: APP_ROUTES.notFound,
    element: <NotFoundPage />
  }
]
