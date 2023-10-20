import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'

const reducers: TReducersList = {
  profile: profileReducer
}

const ProfilePage: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    dispatch(fetchProfileData()).catch(error => {
      console.log(error)
    })
  }, [dispatch])

  return (
    <div>
      <ProfileCard />
    </div>
  )
}

export default ProfilePage
