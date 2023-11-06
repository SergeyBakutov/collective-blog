import { createSelector } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IArticlesSchema } from '../types/articlesSchema'

const getArticles = (state: IStateSchema): IArticlesSchema | undefined => state.articles
export const getArticlesIsLoading = createSelector(getArticles, (articles) => articles?.isLoading)
export const getArticlesError = createSelector(getArticles, (articles) => articles?.error)
export const getArticlesView = createSelector(getArticles, (articles) => articles?.view)
