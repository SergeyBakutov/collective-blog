import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { Text } from 'shared/components/Text'

const reducers: TReducersList = {
  profile: profileReducer
}

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('profile')

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData(Number(id)))
    }
  }, [dispatch, id])

  if (!id && __PROJECT__ !== 'storybook') {
    return <Text title={t('Profile not found')} />
  }

  return (
    <div>
      <EditableProfileCard />
    </div>
  )
}

export default memo(ProfilePage)
