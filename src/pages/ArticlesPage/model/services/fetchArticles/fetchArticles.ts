import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

export const fetchArticles = createAsyncThunk<IArticle[], void, IThunkApiConfig<string>>(
  'articles/fetchArticles',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user'
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
