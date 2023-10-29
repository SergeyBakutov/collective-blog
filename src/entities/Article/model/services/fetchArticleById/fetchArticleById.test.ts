import { TestAsyncThunk } from 'shared/utils/tests'

import { type IArticle } from '../../types/article'

import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleById', () => {
  it('fulfilled', async () => {
    const article: DeepPartial<IArticle> = {
      id: 1,
      title: 'Article',
      subtitle: 'Description article'
    }
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }))
    const result = await thunk.callThunk(1)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(article)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(1)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
