import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getUserIsCheckedAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/utils/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './router'

import './styles/index.scss'

export const App: React.FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const isCheckedAuthData = useSelector(getUserIsCheckedAuthData)

  useEffect(() => {
    dispatch(userActions.checkAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        {isCheckedAuthData && <AppRouter />}
      </div>
    </div>
  )
}
