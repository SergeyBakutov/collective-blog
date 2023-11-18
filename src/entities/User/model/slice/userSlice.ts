import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'
import { type IUserStateSchema } from '../types/schema'
import { type IUser } from '../types/user'

const initialState: IUserStateSchema = {
  _isCheckedAuthData: false
}

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

      state._isCheckedAuthData = true
    },
    logout(state) {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
