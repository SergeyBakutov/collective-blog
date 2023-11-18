import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type IReducerManager } from './reducerManager'
import { type IStateSchema } from './schema'

export interface IStoreWithReducerManager extends ToolkitStore<IStateSchema> {
  reducerManager: IReducerManager
}
