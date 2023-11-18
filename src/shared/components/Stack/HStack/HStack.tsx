import { memo } from 'react'
import { classNames } from '../../../utils/classNames'
import { Flex, type IFlexProps } from '../Flex/Flex'

interface IHStackProps extends Omit<IFlexProps, 'direction'> { }

export const HStack: React.FC<React.PropsWithChildren<IHStackProps>> = memo((props) => {
  const { children, className, ...otherProps } = props

  return (
    <Flex
      className={classNames('', {}, [className])}
      direction="row"
      {...otherProps}
    >
      {children}
    </Flex>
  )
})

HStack.displayName = 'HStack'
