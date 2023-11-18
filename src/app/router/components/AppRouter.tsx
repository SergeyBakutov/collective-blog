import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routes } from '../config/config'
import { RequireAuth } from './RequireAuth'

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes
          .map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.authOnly
                  ? <RequireAuth>{route.element}</RequireAuth>
                  : route.element
              }
            />
          ))}
      </Routes>
    </Suspense>
  )
}
