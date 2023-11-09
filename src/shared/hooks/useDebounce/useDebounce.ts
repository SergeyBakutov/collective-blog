import { useCallback, useEffect, useRef } from 'react'

export function useDebounce<Args extends any[]>(
  callback: (...args: Args) => void,
  delay: number
): (...args: Args) => void {
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return useCallback((...args: Args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
    }, delay)
  }, [callback, delay])
}
