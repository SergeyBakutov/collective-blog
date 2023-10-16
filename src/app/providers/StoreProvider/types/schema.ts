import { type ICounterStateSchema } from 'entities/Counter'
import { type IUserStateSchema } from 'entities/User'
import { type IAuthStateSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterStateSchema
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
}

export type TStateSchemaKey = keyof IStateSchema
