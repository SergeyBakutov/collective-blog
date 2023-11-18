import { addNewCommentForArticle } from '../services/addNewCommentForArticle/addNewCommentForArticle'
import { type IAddNewCommentForArticleSchema } from '../types/schema'
import { addNewCommentForArticleActions, addNewCommentForArticleReducer } from './addNewCommentForArticleSlice'

describe('addNewCommentForArticleSlice:', () => {
  it('action setText', () => {
    const state: DeepPartial<IAddNewCommentForArticleSchema> = {
      text: ''
    }

    expect(addNewCommentForArticleReducer(state as IAddNewCommentForArticleSchema, addNewCommentForArticleActions.setText('New')))
      .toEqual({
        text: 'New'
      })
  })

  it('action addNewCommentForArticle (pending)', () => {
    const state: DeepPartial<IAddNewCommentForArticleSchema> = {
      isLoading: false,
      error: 'Error'
    }

    expect(addNewCommentForArticleReducer(state as IAddNewCommentForArticleSchema, addNewCommentForArticle.pending))
      .toEqual({
        isLoading: true,
        error: undefined
      })
  })

  it('action addNewCommentForArticle (fulfilled)', () => {
    const state: DeepPartial<IAddNewCommentForArticleSchema> = {
      text: 'Comment'
    }

    expect(
      addNewCommentForArticleReducer(
        state as IAddNewCommentForArticleSchema,
        addNewCommentForArticle.fulfilled))
      .toEqual({
        text: '',
        isLoading: false
      })
  })
})
