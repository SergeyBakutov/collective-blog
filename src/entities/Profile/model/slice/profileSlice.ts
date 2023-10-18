import { createSlice } from '@reduxjs/toolkit'

import { type IProfileStateSchema } from '../types/schema'

const initialState: IProfileStateSchema = {
  isLoading: false,
  readonly: true
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
