import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IComment } from 'entities/Comment'

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type IArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id
})

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    ids: [],
    entities: {},
    isLoading: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
      commentsAdapter.setAll(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const articleDetailsCommentsSelectors = commentsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsComments ?? commentsAdapter.getInitialState())

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer
} = articleDetailsCommentsSlice
