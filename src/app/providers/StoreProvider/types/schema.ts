import { type ICounterStateSchema } from 'entities/Counter'
import { type IUserStateSchema } from 'entities/User'
import { type IAuthStateSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterStateSchema
  user: IUserStateSchema
  auth: IAuthStateSchema
}
