import { memo, useRef } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Page.module.scss'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'

interface IPageProps {
  className?: string
  onScrollEnd?: () => void
}

export const Page: React.FC<React.PropsWithChildren<IPageProps>> = memo((props) => {
  const { children, className, onScrollEnd } = props
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: () => {
      onScrollEnd && onScrollEnd()
    }
  })

  return (
    <section ref={wrapperRef} className={classNames(classes.wrapper, {}, [className])}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  )
})

Page.displayName = 'Page'
