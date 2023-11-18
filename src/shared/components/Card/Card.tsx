import { classNames } from '../../utils/classNames'
import classes from './Card.module.scss'

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: React.FC<React.PropsWithChildren<ICardProps>> = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={classNames(classes.wrapper, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
