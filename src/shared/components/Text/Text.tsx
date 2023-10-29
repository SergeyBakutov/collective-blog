import { memo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Text.module.scss'

type TTextColor = 'default' | 'error'
type TTextAlign = 'center' | 'left' | 'right'
type TTextSize = 'm' | 'l'

interface ITextProps {
  className?: string
  color?: TTextColor
  title?: string
  description?: string
  align?: TTextAlign
  size?: TTextSize
}

export const Text: React.FC<ITextProps> = memo((props) => {
  const {
    className,
    color = 'default',
    title,
    description,
    align = 'left',
    size = 'm'
  } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className, classes[color], classes[align], classes[size]])}>
      {title && <p className={classes.title}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  )
})

Text.displayName = 'Text'
