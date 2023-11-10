export type TAppRoutes = 'main' | 'about' | 'profile' | 'articles' | 'articleDetails' | 'articleCreate' | 'articleEdit' | 'notFound'

export const APP_ROUTES: Record<TAppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/',
  articles: '/articles',
  articleDetails: '/articles/',
  articleCreate: '/articles/new',
  articleEdit: '/articles/:id/edit',
  notFound: '*'
}
