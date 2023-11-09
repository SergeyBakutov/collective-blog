import { useCallback, useEffect, useRef } from 'react'

export function useThrottle<Args extends any[]>(
  callback: (...args: Args) => void,
  delay: number
): (...args: Args) => void {
  const throttleRef = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return useCallback((...args: Args) => {
    if (!throttleRef.current) {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
      throttleRef.current = true

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [callback, delay])
}
