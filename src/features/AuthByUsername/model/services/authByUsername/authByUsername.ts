import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { userActions, type IUser } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

interface IAuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<IUser, IAuthByUsernameProps, { rejectValue: string }>(
  'auth/authByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', { username, password })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Error')
    }
  }
)
