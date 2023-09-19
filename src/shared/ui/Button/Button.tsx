import { classNames } from 'shared/utils/classNames'

import classes from './Button.module.scss'

type TButtonColor = 'clear'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: TButtonColor
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = (props) => {
  const { children, className, color = 'clear', ...otherProps } = props

  return (
    <button className={classNames(classes.button, {}, [className, classes[color]])} {...otherProps}>
      {children}
    </button>
  )
}
