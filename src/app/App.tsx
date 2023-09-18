import { Link } from 'react-router-dom'

import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/utils/classNames'

import { AppRouter } from './router/AppRouter'

import './styles/index.scss'

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <AppRouter />
    </div>
  )
}
