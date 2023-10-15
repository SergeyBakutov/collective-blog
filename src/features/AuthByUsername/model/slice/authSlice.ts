import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { authByUsername } from '../services/authByUsername/authByUsername'
import { type IAuthStateSchema } from '../types/schema'

const initialState: IAuthStateSchema = {
  username: '',
  password: '',
  isLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authByUsername.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(authByUsername.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(authByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: authActions, reducer: authReducer } = authSlice
