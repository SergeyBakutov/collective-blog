import { useMemo } from 'react'
import { classNames } from '../../utils/classNames'
import classes from './Avatar.module.scss'

interface IAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  size?: number
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const { className, src, alt, size = 100 } = props

  const styles = useMemo<React.CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])

  return (
    <img
      className={classNames(classes.avatar, {}, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  )
}
