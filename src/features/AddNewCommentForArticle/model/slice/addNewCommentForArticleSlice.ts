import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type IAddNewCommentForArticleSchema } from '../types/schema'
import { addNewCommentForArticle } from '../services/addNewCommentForArticle/addNewCommentForArticle'

const initialState: IAddNewCommentForArticleSchema = {
  text: '',
  isLoading: false
}

const addNewCommentForArticleSlice = createSlice({
  name: 'addNewCommentForArticle',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addNewCommentForArticle.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(addNewCommentForArticle.fulfilled, (state) => {
      state.isLoading = false
      state.text = ''
    })
    builder.addCase(addNewCommentForArticle.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: addNewCommentForArticleActions, reducer: addNewCommentForArticleReducer } = addNewCommentForArticleSlice
