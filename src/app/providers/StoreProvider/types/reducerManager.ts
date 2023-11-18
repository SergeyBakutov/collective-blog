import {
  type ReducersMapObject,
  type CombinedState,
  type AnyAction,
  type Reducer
} from '@reduxjs/toolkit'
import { type IStateSchema, type TStateSchemaKey } from './schema'

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
  add: (key: TStateSchemaKey, reducer: Reducer) => void
  remove: (key: TStateSchemaKey) => void
}
