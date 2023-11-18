import { memo } from 'react'
import { classNames } from '../../utils/classNames'
import classes from './Icon.module.scss'

interface IIconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  color?: 'primary' | 'inverted'
}

export const Icon: React.FC<IIconProps> = memo((props) => {
  const { className, Svg, color = 'primary' } = props

  return <Svg className={classNames('', {}, [className, classes[color]])} />
})

Icon.displayName = 'Icon'
