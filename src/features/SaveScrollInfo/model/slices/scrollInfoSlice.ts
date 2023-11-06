import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type IScrollInfoSchema } from '../types/schema'

const initialState: IScrollInfoSchema = {
  position: {}
}

const scrollInfoSlice = createSlice({
  name: 'scrollInfo',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      const { path, position } = action.payload

      state.position[path] = position
    }
  }
})

export const { actions: scrollInfoActions, reducer: scrollInfoReducer } = scrollInfoSlice
