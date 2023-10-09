import { useCallback, useEffect, useRef, useState } from 'react'

import { Portal } from 'shared/ui/Portal'
import { classNames } from 'shared/utils/classNames'

import classes from './Modal.module.scss'

interface IModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const ANIMATION_DELAY = 300

export const Modal: React.FC<React.PropsWithChildren<IModalProps>> = (props) => {
  const {
    children,
    className,
    isOpen,
    onClose
  } = props
  const [isOpening, setIsOpening] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const onCloseHandler = useCallback(() => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
      setIsOpening(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true)
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onCloseHandler()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', onKeyDownHandler)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.addEventListener('keydown', onKeyDownHandler)
    }
  }, [isOpen, onCloseHandler])

  const onContentClickHandler = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
  }, [])

  if (!isOpen) {
    return null
  }

  return (
    <Portal renderIn={document.querySelector('.app') ?? document.body}>
      <div className={classNames(classes.fixed, { [classes.opened]: isOpening, [classes.closed]: isClosing }, [className])}>
        <div className={classes.overlay} onClick={onCloseHandler}>
          <div className={classes.content} onClick={onContentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
