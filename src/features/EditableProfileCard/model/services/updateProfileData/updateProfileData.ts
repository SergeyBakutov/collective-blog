import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IProfile } from 'entities/Profile'

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkApiConfig<string>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getProfileFormData(getState())

    try {
      const response = await extra.api.put<IProfile>('/profile', formData)

      return response.data
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)
