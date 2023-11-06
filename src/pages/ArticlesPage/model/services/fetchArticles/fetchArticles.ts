import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

import { getArticlesLimit } from '../../selectors/articlesSelectors'

interface IFetchArticlesProps {
  page: number
}

export const fetchArticles = createAsyncThunk<IArticle[], IFetchArticlesProps, IThunkApiConfig<string>>(
  'articles/fetchArticles',
  async ({ page }, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesLimit(getState())

    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch {
      return rejectWithValue('Error')
    }
  }
)
