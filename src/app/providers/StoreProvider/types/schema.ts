import { type IArticleDetailsSchema } from 'entities/Article'
import { type IUserStateSchema } from 'entities/User'
import { type IAuthStateSchema } from 'features/AuthByUsername'
import { type IProfileStateSchema } from 'features/EditableProfileCard'

export interface IStateSchema {
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
  profile?: IProfileStateSchema
  articleDetails?: IArticleDetailsSchema
}

export type TStateSchemaKey = keyof IStateSchema
