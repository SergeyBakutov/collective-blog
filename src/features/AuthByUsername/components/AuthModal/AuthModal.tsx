import { Suspense } from 'react'

import { Loader } from 'shared/components/Loader'
import { Modal } from 'shared/components/Modal'
import { classNames } from 'shared/utils/classNames'

import { AuthFormLazy as AuthForm } from '../AuthForm/AuthForm.lazy'

import classes from './AuthModal.module.scss'

interface IAuthModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: React.FC<IAuthModalProps> = (props) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal
      className={classNames(classes.wrapper, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <AuthForm />
      </Suspense>
    </Modal>
  )
}
