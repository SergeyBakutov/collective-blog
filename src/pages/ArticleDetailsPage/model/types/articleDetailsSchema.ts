import { type IArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema'
import { type IArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema'

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema
  recommendations: IArticleDetailsRecommendationsSchema
}
