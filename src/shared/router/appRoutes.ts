export type TAppRoutes = 'main' | 'about' | 'profile' | 'articles' | 'article-details' | 'not-found'

export const APP_ROUTES: Record<TAppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  articles: '/articles',
  'article-details': '/articles/',
  'not-found': '*'
}
