import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData, userActions } from 'entities/User'
import { AuthModal } from 'features/AuthByUsername'
import { Button } from 'shared/components/Button'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const onLoginClick = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [])

  const onCloseAuthModal = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [])

  const onLogoutClick = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(classes.wrapper, {}, [className])}>
        <Button color="clearInverted" onClick={onLogoutClick}>
          {t('Logout')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Button color="clearInverted" onClick={onLoginClick}>
        {t('Login')}
      </Button>
      <AuthModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
    </div>
  )
})

Navbar.displayName = 'Navbar'
