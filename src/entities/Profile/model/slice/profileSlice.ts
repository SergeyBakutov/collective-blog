import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type IProfileStateSchema } from '../types/schema'
import { type IProfile } from '../types/profile'

export const initialState: IProfileStateSchema = {
  isLoading: false,
  readonly: true
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
