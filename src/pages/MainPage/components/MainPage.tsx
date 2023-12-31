import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const MainPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>{t('Main')}</Page>
  )
}

export default memo(MainPage)
