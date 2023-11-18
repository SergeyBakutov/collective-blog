import { memo } from 'react'
import { classNames } from '../../utils/classNames'
import classes from './Button.module.scss'

type TButtonColor = 'clear' | 'clearInverted' | 'outline' | 'outlineInverted' | 'background' | 'backgroundInverted'
type TButtonSize = 'm' | 'l' | 'xl'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: TButtonColor
  size?: TButtonSize
  square?: boolean
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = memo((props) => {
  const {
    children,
    className,
    color = 'clear',
    size = 'm',
    square = false,
    disabled = false,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [classes.square]: square,
    [classes.disabled]: disabled
  }

  return (
    <button
      className={classNames(classes.button, mods, [className, classes[color], classes[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
