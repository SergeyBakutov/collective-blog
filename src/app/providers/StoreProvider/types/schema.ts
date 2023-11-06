import { type IArticleDetailsSchema } from 'entities/Article'
import { type IUserStateSchema } from 'entities/User'
import { type IAddNewCommentForArticleSchema } from 'features/AddNewCommentForArticle'
import { type IAuthStateSchema } from 'features/AuthByUsername'
import { type IProfileStateSchema } from 'features/EditableProfileCard'
import { type IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type IArticlesSchema } from 'pages/ArticlesPage'

export interface IStateSchema {
  user: IUserStateSchema

  // Асинхронные редьюсеры
  auth?: IAuthStateSchema
  profile?: IProfileStateSchema
  articleDetails?: IArticleDetailsSchema
  articleDetailsComments?: IArticleDetailsCommentsSchema
  addNewCommentForArticle?: IAddNewCommentForArticleSchema
  articles?: IArticlesSchema
}

export type TStateSchemaKey = keyof IStateSchema
