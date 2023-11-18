import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'
import { classNames } from 'shared/utils/classNames'
import classes from './NotFoundPage.module.scss'

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page className={classNames(classes.wrapper)}>{t('Page not found')}</Page>
  )
}
