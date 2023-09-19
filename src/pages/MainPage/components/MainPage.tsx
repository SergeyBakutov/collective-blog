import { useTranslation } from 'react-i18next'

const MainPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>{t('Main')}</div>
  )
}

export default MainPage
