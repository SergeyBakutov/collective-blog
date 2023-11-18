import { createSelector } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'

const getArticleDetailsCommentsState = (state: IStateSchema): IArticleDetailsCommentsSchema | undefined => state.articleDetailsPage?.comments
export const getArticleDetailsCommentsIsLoading = createSelector(getArticleDetailsCommentsState, (articleDetailsCommentsState) => articleDetailsCommentsState?.isLoading)
export const getArticleDetailsCommentsError = createSelector(getArticleDetailsCommentsState, (articleDetailsCommentsState) => articleDetailsCommentsState?.error)
