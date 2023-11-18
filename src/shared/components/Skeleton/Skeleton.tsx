import { memo } from 'react'
import { classNames } from '../../utils/classNames'
import classes from './Skeleton.module.scss'

interface ISkeletonProps {
  className?: string
  height?: React.CSSProperties['height']
  width?: React.CSSProperties['width']
  borderRadius?: React.CSSProperties['borderRadius']
}

export const Skeleton: React.FC<ISkeletonProps> = memo((props) => {
  const { className, borderRadius, height, width } = props

  return (
    <div
      style={{ width, height, borderRadius }}
      className={classNames(classes.skeleton, {}, [className])}
    />
  )
})

Skeleton.displayName = 'Skeleton'
