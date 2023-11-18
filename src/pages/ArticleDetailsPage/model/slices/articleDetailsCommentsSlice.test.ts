import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type IArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

describe('articleDetailsCommentsSlice:', () => {
  it('action addNewCommentForArticle (pending)', () => {
    const state: DeepPartial<IArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'Error'
    }

    expect(articleDetailsCommentsReducer(state as IArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending))
      .toEqual({
        isLoading: true,
        error: undefined
      })
  })

  it('action addNewCommentForArticle (fulfilled)', () => {
    const state: DeepPartial<IArticleDetailsCommentsSchema> = {
      ids: [],
      entities: {}
    }

    expect(
      articleDetailsCommentsReducer(
        state as IArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled([
          { id: 1, text: 'comment 1', user: { id: 1, username: 'admin' } },
          { id: 2, text: 'comment 2', user: { id: 1, username: 'admin' } }
        ], '', 1)))
      .toEqual({
        ids: [1, 2],
        entities: {
          1: { id: 1, text: 'comment 1', user: { id: 1, username: 'admin' } },
          2: { id: 2, text: 'comment 2', user: { id: 1, username: 'admin' } }
        },
        isLoading: false
      })
  })
})
