import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IProfile } from 'entities/Profile'

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type TValidateError } from '../../types/validateError'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkApiConfig<TValidateError[] | string>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    const formData = getProfileFormData(getState())
    const errors = validateProfileData(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<IProfile>('/profile', formData)

      return response.data
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)
