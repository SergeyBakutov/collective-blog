import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type IUserStateSchema } from '../types/schema'
import { type IUser } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

const initialState: IUserStateSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IUser>) {
      state.authData = action.payload
    },
    checkAuthData(state) {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout(state) {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
