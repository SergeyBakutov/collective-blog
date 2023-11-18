import { Suspense } from 'react'
import { Loader } from 'shared/components/Loader'
import { Modal } from 'shared/components/Modal'
import { classNames } from 'shared/utils/classNames'
import { AuthFormLazy as AuthForm } from '../AuthForm/AuthForm.lazy'

interface IAuthModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: React.FC<IAuthModalProps> = (props) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <AuthForm onSuccessAuth={onClose} />
      </Suspense>
    </Modal>
  )
}
