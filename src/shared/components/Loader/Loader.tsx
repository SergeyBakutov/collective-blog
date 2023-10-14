import { classNames } from 'shared/utils/classNames'

import classes from './Loader.module.scss'

interface ILoaderProps {
  className?: string
}

export const Loader: React.FC<ILoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(classes.loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
