import { type EntityState } from '@reduxjs/toolkit'

import { type TArticlesView, type IArticle } from 'entities/Article'

export interface IArticlesSchema extends EntityState<IArticle> {
  isLoading: boolean
  error?: string
  view: TArticlesView
}
