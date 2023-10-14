import { Modal } from 'shared/ui/Modal'
import { classNames } from 'shared/utils/classNames'

import { AuthForm } from '../AuthForm/AuthForm'

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
      <AuthForm />
    </Modal>
  )
}
