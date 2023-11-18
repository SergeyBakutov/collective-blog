import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { getUserIsCheckedAuthData, userActions } from 'entities/User'
import { HStack } from 'shared/components/Stack'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/utils/classNames'
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
      <HStack>
        <Sidebar className="sidebar" />
        {isCheckedAuthData && <AppRouter />}
      </HStack>
    </div>
  )
}
