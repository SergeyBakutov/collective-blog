import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IProfile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<IProfile, number, IThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IProfile>(`/profile/${profileId}`)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)
