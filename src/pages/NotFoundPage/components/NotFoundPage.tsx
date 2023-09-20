import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/utils/classNames'

import classes from './NotFoundPage.module.scss'

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={classNames(classes.wrapper)}>{t('Page not found')}</div>
  )
}
