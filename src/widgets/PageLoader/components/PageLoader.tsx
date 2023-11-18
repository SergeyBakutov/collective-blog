import { Loader } from 'shared/components/Loader'
import { HStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import classes from './PageLoader.module.scss'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
  const { className } = props

  return (
    <HStack
      className={classNames(classes.wrapper, {}, [className])}
      alignItems="center"
      justifyContent="center"
    >
      <Loader />
    </HStack>
  )
}
