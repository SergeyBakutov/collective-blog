import { createSlice } from '@reduxjs/toolkit'

import { type ICounterStateSchema } from '../types/schema'

const initialState: ICounterStateSchema = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice
