import { type ICounterStateSchema } from 'entities/Counter'
import { type IProfileStateSchema } from 'entities/Profile'
import { type IUserStateSchema } from 'entities/User'
import { type IAuthStateSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterStateSchema
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
  profile?: IProfileStateSchema
}

export type TStateSchemaKey = keyof IStateSchema
