import { type IComment } from 'entities/Comment'
import { TestAsyncThunk } from 'shared/utils/tests'

import { addNewCommentForArticle } from './addNewCommentForArticle'

describe('addNewCommentForArticle:', () => {
  it('fulfilled', async () => {
    const comment: IComment = { id: 1, text: 'test', user: { id: 1, username: 'admin' } }
    const thunk = new TestAsyncThunk(addNewCommentForArticle, {
      user: {
        authData: {}
      },
      articleDetails: {
        data: {}
      },
      addNewCommentForArticle: {
        text: 'test'
      }
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }))
    const result = await thunk.callThunk()

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comment)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(addNewCommentForArticle, {
      user: {
        authData: {}
      },
      articleDetails: {
        data: {}
      },
      addNewCommentForArticle: {
        text: 'test'
      }
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })

  it('rejected (no data)', async () => {
    const thunk = new TestAsyncThunk(addNewCommentForArticle, {
      user: {
        authData: {}
      },
      articleDetails: {
        data: {}
      }
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.post).not.toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
