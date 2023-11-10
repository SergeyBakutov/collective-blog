import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations'
import { type IArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema'

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (recommendation) => recommendation.id
})

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendations',
  initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
    ids: [],
    entities: {},
    isLoading: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendations.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchRecommendations.fulfilled, (state, action) => {
      recommendationsAdapter.setAll(state, action.payload)
      state.isLoading = false
    })
    builder.addCase(fetchRecommendations.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const articleDetailsRecommendationsSelectors = recommendationsAdapter.getSelectors<IStateSchema>((state) => state.articleDetailsPage?.recommendations ?? recommendationsAdapter.getInitialState())

export const {
  actions: articleDetailsRecommendationsActions,
  reducer: articleDetailsRecommendationsReducer
} = articleDetailsRecommendationsSlice
