import { type ICounterStateSchema } from 'entities/Counter'
import { type IUserStateSchema } from 'entities/User'

export interface IStateSchema {
  counter: ICounterStateSchema
  user: IUserStateSchema
}
