import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type IArticle } from '../types/article'
import { type IArticleDetailsSchema } from '../types/schema'

import { articleDetailsReducer } from './articleDetailsSlice'

describe('articleDetailsSlice:', () => {
  it('action fetchArticleById (pending)', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
      error: 'Error'
    }

    expect(articleDetailsReducer(state as IArticleDetailsSchema, fetchArticleById.pending))
      .toEqual({
        isLoading: true,
        error: undefined
      })
  })

  it('action fetchArticleById (fulfilled)', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {
      data: undefined
    }

    const article: DeepPartial<IArticle> = {
      id: 1,
      title: 'Article',
      subtitle: 'Description article'
    }

    expect(
      articleDetailsReducer(
        state as IArticleDetailsSchema,
        fetchArticleById.fulfilled(article as IArticle, '', 1)))
      .toEqual({
        data: article,
        isLoading: false
      })
  })
})
