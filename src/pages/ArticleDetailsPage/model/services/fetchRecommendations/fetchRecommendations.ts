import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

export const fetchRecommendations = createAsyncThunk<IArticle[], void, IThunkApiConfig<string>>(
  'articlesDetailsRecommendations/fetchRecommendations',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: 8
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
