import { type IUserStateSchema } from 'entities/User'
import { type IAuthStateSchema } from 'features/AuthByUsername'
import { type IProfileStateSchema } from 'features/EditableProfileCard'

export interface IStateSchema {
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
  profile?: IProfileStateSchema
}

export type TStateSchemaKey = keyof IStateSchema
