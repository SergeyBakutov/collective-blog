import { memo } from 'react'
import { classNames } from '../../../utils/classNames'
import { Flex, type IFlexProps } from '../Flex/Flex'

interface IVStackProps extends Omit<IFlexProps, 'direction' | 'wrap'> { }

export const VStack: React.FC<React.PropsWithChildren<IVStackProps>> = memo((props) => {
  const { children, className, ...otherProps } = props

  return (
    <Flex
      className={classNames('', {}, [className])}
      direction="column"
      {...otherProps}
    >
      {children}
    </Flex>
  )
})

VStack.displayName = 'VStack'
