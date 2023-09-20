export type TAppRoutes = 'main' | 'about' | 'not-found'

export const APP_ROUTES: Record<TAppRoutes, string> = {
  main: '/',
  about: '/about',
  'not-found': '*'
}
