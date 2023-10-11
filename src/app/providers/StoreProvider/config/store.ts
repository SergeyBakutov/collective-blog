import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'

import { type IStateSchema } from '../types/schema'

export function createStore(initialState?: IStateSchema): ReturnType<typeof configureStore<IStateSchema>> {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
