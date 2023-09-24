import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      { }
    </div>
  )
}
