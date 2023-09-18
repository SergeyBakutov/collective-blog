import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/utils/classNames'
import { Navbar } from 'widgets/Navbar'

import { AppRouter } from './router/AppRouter'

import './styles/index.scss'

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />

      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}
