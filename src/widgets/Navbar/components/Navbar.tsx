import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData, userActions } from 'entities/User'
import { AuthModal } from 'features/AuthByUsername'
import { AppLink } from 'shared/components/AppLink'
import { Button } from 'shared/components/Button'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { APP_ROUTES } from 'shared/router'
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
      <header className={classNames(classes.wrapper, {}, [className])}>
        <div className={classes.titleWithLinks}>
          <Text color="inverted" title="Almost Habr" />

          <div className={classes.links}>
            <AppLink to={APP_ROUTES.articleCreate} color="inverted">
              {t('Create article')}
            </AppLink>
          </div>

        </div>

        <Button color="clearInverted" onClick={onLogoutClick}>
          {t('Logout')}
        </Button>
      </header>
    )
  }

  return (
    <header className={classNames(classes.wrapper, {}, [className])}>
      <Button color="clearInverted" onClick={onLoginClick}>
        {t('Login')}
      </Button>
      <AuthModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />
    </header>
  )
})

Navbar.displayName = 'Navbar'
