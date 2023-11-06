import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'

import { getArticlesInited } from '../../selectors/articlesSelectors'
import { articlesActions } from '../../slices/articlesSlice'

import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticles = createAsyncThunk<void, void, IThunkApiConfig<void>>(
  'articles/initArticles',
  async (_, { dispatch, getState }) => {
    const inited = getArticlesInited(getState())

    if (!inited) {
      dispatch(articlesActions.initState())
      dispatch(fetchArticles({ page: 1 }))
    }
  }
)
