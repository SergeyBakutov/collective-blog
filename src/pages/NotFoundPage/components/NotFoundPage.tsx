import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/utils/classNames'
import { Page } from 'widgets/Page'

import classes from './NotFoundPage.module.scss'

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page className={classNames(classes.wrapper)}>{t('Page not found')}</Page>
  )
}
