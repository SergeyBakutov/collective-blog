import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getUserAuthData } from 'entities/User'
import { PageLoader } from 'widgets/PageLoader'

import { routes } from './config'

export const AppRouter: React.FC = () => {
  const authData = useSelector(getUserAuthData)

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.filter((route) => !(route.authOnly && !authData)).map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
