import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from 'shared/components/Page'

const AboutPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>{t('About')}</Page>
  )
}

export default memo(AboutPage)
