import { createSlice } from '@reduxjs/toolkit'

import { type IUserStateSchema } from '../types/schema'

const initialState: IUserStateSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const { reducer: userReducer } = userSlice
