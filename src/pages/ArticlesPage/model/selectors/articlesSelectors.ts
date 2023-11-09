import { createSelector } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { type TArticlesView, type TArticleType, type TArticlesSort } from 'entities/Article'
import { type TSortOrder } from 'shared/types/sortOrder'

import { type IArticlesSchema } from '../types/articlesSchema'

const getArticles = (state: IStateSchema): IArticlesSchema | undefined => state.articles
export const getArticlesIsLoading = createSelector(getArticles, (articles) => articles?.isLoading)
export const getArticlesError = createSelector(getArticles, (articles) => articles?.error)
export const getArticlesView = createSelector(getArticles, (articles): TArticlesView => articles?.view ?? 'tile')
export const getArticlesPage = createSelector(getArticles, (articles) => articles?.page ?? 1)
export const getArticlesLimit = createSelector(getArticles, (articles) => articles?.limit ?? 12)
export const getArticlesHasMore = createSelector(getArticles, (articles) => articles?.hasMore ?? true)
export const getArticlesSort = createSelector(getArticles, (articles): TArticlesSort => articles?.sort ?? 'createdAt')
export const getArticlesSortOrder = createSelector(getArticles, (articles): TSortOrder => articles?.sortOrder ?? 'asc')
export const getArticlesSearch = createSelector(getArticles, (articles) => articles?.search ?? '')
export const getArticlesType = createSelector(getArticles, (articles): TArticleType => articles?.type ?? 'all')
export const getArticlesInited = createSelector(getArticles, (articles) => articles?._inited)
