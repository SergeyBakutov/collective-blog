import { useEffect } from 'react'

import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard'
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
      <EditableProfileCard />
    </div>
  )
}

export default ProfilePage
