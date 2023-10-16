import { type ReducersMapObject, configureStore, type Reducer, type AnyAction } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { type IStateSchema } from '../types/schema'
import { createReducerManager } from './createReducerManager'

export function createStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
): ReturnType<typeof configureStore<IStateSchema>> {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce as Reducer<IStateSchema, AnyAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
