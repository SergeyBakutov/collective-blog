import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AuthModal } from 'features/AuthByUsername'
import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'
import { Button } from 'shared/components/Button'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  const onLoginClickHandler = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [])

  const onCloseAuthModalHandler = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Button color="clearInverted" onClick={onLoginClickHandler}>
        {t('Login')}
      </Button>
      <AuthModal isOpen={isOpenAuthModal} onClose={onCloseAuthModalHandler} />
    </div>
  )
}
