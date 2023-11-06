import { TestAsyncThunk } from 'shared/utils/tests'

import { fetchNextArticles } from './fetchNextArticles'
import { fetchArticles } from '../fetchArticles/fetchArticles'

jest.mock('../fetchArticles/fetchArticles')

describe('fetchNextArticles', () => {
  it('success (fetchArticles called)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    })
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticles).toBeCalledWith({ page: 3 })
  })

  it('error (fetchArticles not called)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articles: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false
      }
    })
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticles).not.toBeCalledWith({ page: 3 })
  })
})
