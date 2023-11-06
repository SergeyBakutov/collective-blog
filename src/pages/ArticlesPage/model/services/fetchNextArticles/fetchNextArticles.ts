import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'

import { getArticlesHasMore, getArticlesIsLoading, getArticlesPage } from '../../selectors/articlesSelectors'
import { articlesActions } from '../../slices/articlesSlice'

import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchNextArticles = createAsyncThunk<void, void, IThunkApiConfig<void>>(
  'articles/fetchNextArticles',
  async (_, { dispatch, getState }) => {
    const page = getArticlesPage(getState())
    const hasMore = getArticlesHasMore(getState())
    const isLoading = getArticlesIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesActions.setPage(page + 1))
      dispatch(fetchArticles({ page: page + 1 }))
    }
  }
)
