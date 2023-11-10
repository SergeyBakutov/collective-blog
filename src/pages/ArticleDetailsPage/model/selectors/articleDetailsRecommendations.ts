import { createSelector } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema'

const getArticleDetailsRecommendationsState = (state: IStateSchema): IArticleDetailsRecommendationsSchema | undefined => state.articleDetailsPage?.recommendations

export const getArticleDetailsRecommendationsIsLoading = createSelector(getArticleDetailsRecommendationsState, (articleDetailsRecommendationsState) => articleDetailsRecommendationsState?.isLoading)
export const getArticleDetailsRecommendationsError = createSelector(getArticleDetailsRecommendationsState, (articleDetailsRecommendationsState) => articleDetailsRecommendationsState?.error)
