import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { type IStateSchema } from '../types/schema'

export function createStore(initialState?: IStateSchema): ReturnType<typeof configureStore<IStateSchema>> {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
