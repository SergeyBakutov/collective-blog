import { memo } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '../../utils/classNames'
import classes from './AppLink.module.scss'

type TAppLinkColor = 'primary' | 'inverted'

interface IAppLinkProps extends LinkProps {
  className?: string
  color?: TAppLinkColor
}

export const AppLink: React.FC<React.PropsWithChildren<IAppLinkProps>> = memo((props) => {
  const {
    children,
    className,
    color = 'primary',
    ...otherProps
  } = props

  return (
    <Link
      className={classNames(classes.wrapper, {}, [className, classes[color]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})

AppLink.displayName = 'AppLink'
