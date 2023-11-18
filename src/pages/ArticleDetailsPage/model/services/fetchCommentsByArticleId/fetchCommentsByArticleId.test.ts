import { type IComment } from 'entities/Comment'
import { TestAsyncThunk } from 'shared/utils/tests'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

describe('fetchCommentsByArticleId:', () => {
  it('fulfilled', async () => {
    const comments: IComment[] = [
      { id: 1, text: 'comment 1', user: { id: 1, username: 'admin' } },
      { id: 2, text: 'comment 2', user: { id: 1, username: 'admin' } }
    ]
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }))
    const result = await thunk.callThunk(1)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comments)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(1)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
