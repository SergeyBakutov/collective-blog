import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { classNames } from './helpers/classNames/classNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'

import './styles/index.scss'

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <br />

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}
