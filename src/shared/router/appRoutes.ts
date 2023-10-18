export type TAppRoutes = 'main' | 'about' | 'profile' | 'not-found'

export const APP_ROUTES: Record<TAppRoutes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  'not-found': '*'
}
