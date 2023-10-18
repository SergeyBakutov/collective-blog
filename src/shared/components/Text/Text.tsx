import { memo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Text.module.scss'

type TTextColor = 'default' | 'error'

interface ITextProps {
  className?: string
  color?: TTextColor
  title?: string
  description?: string
}

export const Text: React.FC<ITextProps> = memo((props) => {
  const { className, color = 'default', title, description } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className, classes[color]])}>
      {title && <p className={classes.title}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  )
})

Text.displayName = 'Text'
