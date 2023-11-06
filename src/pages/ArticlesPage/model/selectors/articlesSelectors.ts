import { createSelector } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IArticlesSchema } from '../types/articlesSchema'

const getArticles = (state: IStateSchema): IArticlesSchema | undefined => state.articles
export const getArticlesIsLoading = createSelector(getArticles, (articles) => articles?.isLoading)
export const getArticlesError = createSelector(getArticles, (articles) => articles?.error)
export const getArticlesView = createSelector(getArticles, (articles) => articles?.view)
export const getArticlesPage = createSelector(getArticles, (articles) => articles?.page ?? 1)
export const getArticlesLimit = createSelector(getArticles, (articles) => articles?.limit ?? 12)
export const getArticlesHasMore = createSelector(getArticles, (articles) => articles?.hasMore)
export const getArticlesInited = createSelector(getArticles, (articles) => articles?._inited)
