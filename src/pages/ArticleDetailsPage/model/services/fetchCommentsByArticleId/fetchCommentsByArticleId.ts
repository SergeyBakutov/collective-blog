import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IComment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], number, IThunkApiConfig<string>>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) {
      return rejectWithValue('Error')
    }

    try {
      const response = await extra.api.get<IComment[]>('/comments', {
        params: {
          articleId,
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
