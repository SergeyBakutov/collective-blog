import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config'

export const AppRouter: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
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
