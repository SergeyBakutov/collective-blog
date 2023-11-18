import { memo, useMemo } from 'react'
import { classNames } from '../../../utils/classNames'
import classes from './Flex.module.scss'

type IFlexJustifyContent = 'center' | 'flexEnd' | 'flexStart' | 'spaceAround' | 'spaceBetween'
type IFlexAlignItems = 'center' | 'flexEnd' | 'flexStart'
type IFlexDirection = 'row' | 'column'
type IFlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32'
type IFlexWrap = 'wrap' | 'noWrap'

export interface IFlexProps {
  className?: string
  justifyContent?: IFlexJustifyContent
  alignItems?: IFlexAlignItems
  direction?: IFlexDirection
  gap?: IFlexGap
  wrap?: IFlexWrap
  fullWidth?: boolean
}

const justifyContentClasses: Record<IFlexJustifyContent, 'justifyContentCenter' | 'justifyContentFlexStart' | 'justifyContentFlexEnd' | 'justifyContentSpaceAround' | 'justifyContentSpaceBetween'> = {
  center: 'justifyContentCenter',
  flexStart: 'justifyContentFlexStart',
  flexEnd: 'justifyContentFlexEnd',
  spaceAround: 'justifyContentSpaceAround',
  spaceBetween: 'justifyContentSpaceBetween'
}

const alignItemsClasses: Record<IFlexAlignItems, 'alignItemsCenter' | 'alignItemsFlexStart' | 'alignItemsFlexEnd'> = {
  center: 'alignItemsCenter',
  flexStart: 'alignItemsFlexStart',
  flexEnd: 'alignItemsFlexEnd'
}

const directionClasses: Record<IFlexDirection, 'directionColumn' | 'directionRow'> = {
  column: 'directionColumn',
  row: 'directionRow'
}

const gapClasses: Record<IFlexGap, 'gap4' | 'gap8' | 'gap12' | 'gap16' | 'gap20' | 'gap24' | 'gap28' | 'gap32'> = {
  4: 'gap4',
  8: 'gap8',
  12: 'gap12',
  16: 'gap16',
  20: 'gap20',
  24: 'gap24',
  28: 'gap28',
  32: 'gap32'
}

const wrapClasses: Record<IFlexWrap, 'wrap' | 'noWrap'> = {
  wrap: 'wrap',
  noWrap: 'noWrap'
}

export const Flex: React.FC<React.PropsWithChildren<IFlexProps>> = memo((props) => {
  const {
    children,
    className,
    justifyContent = 'flexStart',
    alignItems = 'flexStart',
    direction = 'row',
    gap = '4',
    wrap = 'noWrap',
    fullWidth = false
  } = props

  const aditional = useMemo(() => ([
    className,
    classes[justifyContentClasses[justifyContent]],
    classes[alignItemsClasses[alignItems]],
    classes[directionClasses[direction]],
    classes[gapClasses[gap]],
    classes[wrapClasses[wrap]]
  ]), [alignItems, className, direction, gap, justifyContent, wrap])

  return (
    <div
      className={classNames(classes.wrapper, { [classes.fullWidth]: fullWidth }, aditional)}
    >
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
