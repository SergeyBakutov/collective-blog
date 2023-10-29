import { createSelector } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IArticleDetailsSchema } from '../types/schema'

const getArticleDetailsState = (state: IStateSchema): IArticleDetailsSchema | undefined => state?.articleDetails

export const getArticleDetailsData = createSelector(getArticleDetailsState, (articleDetails) => articleDetails?.data)
export const getArticleDetailsIsLoading = createSelector(getArticleDetailsState, (articleDetails) => articleDetails?.isLoading)
export const getArticleDetailsError = createSelector(getArticleDetailsState, (articleDetails) => articleDetails?.error)
