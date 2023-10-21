import { useEffect } from 'react'

import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'

const reducers: TReducersList = {
  profile: profileReducer
}

const ProfilePage: React.FC = () => {
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
