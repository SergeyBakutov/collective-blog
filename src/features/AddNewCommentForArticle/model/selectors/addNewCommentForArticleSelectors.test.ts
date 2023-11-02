import { type IStateSchema } from 'app/providers/StoreProvider'

import { getAddNewCommentForArticleError, getAddNewCommentForArticleIsLoading, getAddNewCommentForArticleText } from './addNewCommentForArticleSelectors'

describe('getAddNewCommentForArticleText:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      addNewCommentForArticle: {
        text: 'Comment'
      }
    }
    expect(getAddNewCommentForArticleText(state as IStateSchema)).toBe('Comment')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAddNewCommentForArticleText(state as IStateSchema)).toBeUndefined()
  })
})

describe('getAddNewCommentForArticleIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      addNewCommentForArticle: {
        isLoading: true
      }
    }
    expect(getAddNewCommentForArticleIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAddNewCommentForArticleIsLoading(state as IStateSchema)).toBeFalsy()
  })
})

describe('getAddNewCommentForArticleError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      addNewCommentForArticle: {
        error: 'Error'
      }
    }
    expect(getAddNewCommentForArticleError(state as IStateSchema)).toBe('Error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAddNewCommentForArticleError(state as IStateSchema)).toBeUndefined()
  })
})
