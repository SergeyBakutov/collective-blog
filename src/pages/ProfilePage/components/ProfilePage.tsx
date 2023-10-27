import { memo, useEffect } from 'react'

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
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  return (
    <div>
      <EditableProfileCard />
    </div>
  )
}

export default memo(ProfilePage)
