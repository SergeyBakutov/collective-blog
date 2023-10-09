/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from 'shared/ui/Modal'
import { classNames } from 'shared/utils/classNames'

import classes from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'

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
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button color="clearInverted" onClick={onLoginClickHandler}>
        {t('Login')}
      </Button>
      <Modal isOpen={isOpenAuthModal} onClose={onCloseAuthModalHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, deleniti asperiores voluptates, ipsam voluptate impedit quae distinctio itaque corrupti illum tempora nihil aliquam! Recusandae id aliquam necessitatibus molestiae earum harum labore quod optio distinctio, delectus itaque fugit corrupti impedit voluptatibus odit. Ullam aperiam dolore sint illum similique corporis obcaecati eaque.
      </Modal>
    </div>
  )
}
