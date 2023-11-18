import { Loader } from 'shared/components/Loader'
import { classNames } from 'shared/utils/classNames'
import classes from './PageLoader.module.scss'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Loader />
    </div>
  )
}
