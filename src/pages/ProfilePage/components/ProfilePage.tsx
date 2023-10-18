import { useTranslation } from 'react-i18next'

import { profileReducer } from 'entities/Profile'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'

const reducers: TReducersList = {
  profile: profileReducer
}

const ProfilePage: React.FC = () => {
  const { t } = useTranslation()
  useAsyncReducer({ reducers, removeAfterUnmount: true })

  return (
    <div>{t('Profile')}</div>
  )
}

export default ProfilePage
