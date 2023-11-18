import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { APP_ROUTES } from 'shared/router'

export const RequireAuth: React.FC<React.PropsWithChildren> = ({ children }) => {
  const auth = useSelector(getUserAuthData)

  if (!auth) {
    return <Navigate to={APP_ROUTES.main} replace />
  }

  return children
}
