import { type IArticleDetailsSchema } from 'entities/Article'
import { type IUserStateSchema } from 'entities/User'
import { type IAddNewCommentForArticleSchema } from 'features/AddNewCommentForArticle'
import { type IAuthStateSchema } from 'features/AuthByUsername'
import { type IProfileStateSchema } from 'features/EditableProfileCard'
import { type IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'

export interface IStateSchema {
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
  profile?: IProfileStateSchema
  articleDetails?: IArticleDetailsSchema
  articleDetailsComments?: IArticleDetailsCommentsSchema
  addNewCommentForArticle?: IAddNewCommentForArticleSchema
}

export type TStateSchemaKey = keyof IStateSchema
