import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type IArticle } from '../types/article'
import { type IArticleDetailsSchema } from '../types/schema'

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchArticleById.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
