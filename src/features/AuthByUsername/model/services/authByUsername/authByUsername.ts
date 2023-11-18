import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { userActions, type IUser } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

interface IAuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<IUser, IAuthByUsernameProps, IThunkApiConfig<string>>(
  'auth/authByUsername',
  async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<IUser>('/login', { username, password })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return rejectWithValue('Error')
    }
  }
)
