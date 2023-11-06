import { memo, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { getScrollInfoPositionByPath, scrollInfoActions } from 'features/SaveScrollInfo'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'
import { classNames } from 'shared/utils/classNames'

import classes from './Page.module.scss'
import { useThrottle } from 'shared/hooks/useThrottle.ts'

interface IPageProps {
  className?: string
  onScrollEnd?: () => void
}

export const Page: React.FC<React.PropsWithChildren<IPageProps>> = memo((props) => {
  const { children, className, onScrollEnd } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: IStateSchema) => getScrollInfoPositionByPath(state, pathname))

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: () => {
      onScrollEnd && onScrollEnd()
    }
  })

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition
    }
  }, [scrollPosition])

  const onScroll = useThrottle((event: React.UIEvent<HTMLDivElement>): void => {
    dispatch(scrollInfoActions.setPosition({
      path: pathname,
      position: event.currentTarget.scrollTop
    }))
  }, 500)

  return (
    <section
      className={classNames(classes.wrapper, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef}></div>
    </section>
  )
})

Page.displayName = 'Page'
