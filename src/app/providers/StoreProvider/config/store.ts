import { type ReducersMapObject, configureStore, type Reducer, type AnyAction } from '@reduxjs/toolkit'
import { scrollInfoReducer } from 'features/SaveScrollInfo'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { type IStateSchema } from '../types/schema'
import { createReducerManager } from './createReducerManager'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollInfo: scrollInfoReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<IStateSchema, AnyAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
