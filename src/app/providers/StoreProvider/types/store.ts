import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

import { type IStateSchema } from './schema'
import { type IReducerManager } from './reducerManager'

export interface IStoreWithReducerManager extends ToolkitStore<IStateSchema> {
  reducerManager: IReducerManager
}
