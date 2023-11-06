import { useEffect, type RefObject } from 'react'

interface IUseInfinitesScrollProps {
  triggerRef: RefObject<HTMLElement>
  wrapperRef: RefObject<HTMLElement>
  callback: () => void
}

export function useInfiniteScroll({ wrapperRef, triggerRef, callback }: IUseInfinitesScrollProps): void {
  useEffect(() => {
    const trigger = triggerRef.current

    if (!trigger) {
      return
    }

    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    observer.observe(trigger)

    return () => {
      observer.unobserve(trigger)
    }
  }, [callback, triggerRef, wrapperRef])
}
