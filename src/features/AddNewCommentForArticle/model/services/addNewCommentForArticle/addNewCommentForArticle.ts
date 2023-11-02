import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { type IComment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'

import { getAddNewCommentForArticleText } from '../../selectors/addNewCommentForArticleSelectors'

export const addNewCommentForArticle = createAsyncThunk<IComment, void, IThunkApiConfig<string>>(
  'addNewCommentForArticle/addNewCommentForArticle',
  async (_, { extra, rejectWithValue, getState }) => {
    const authData = getUserAuthData(getState())
    const text = getAddNewCommentForArticleText(getState())
    const article = getArticleDetailsData(getState())

    if (!authData || !text || !article) {
      return rejectWithValue('Error')
    }

    try {
      const response = await extra.api.post<IComment>('/comments', {
        text,
        articleId: article.id,
        userId: authData.id
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (err) {
      return rejectWithValue('Error')
    }
  }
)
