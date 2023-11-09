import { type EntityState } from '@reduxjs/toolkit'

import { type TArticlesView, type IArticle, type TArticlesSort, type TArticleType } from 'entities/Article'
import { type TSortOrder } from 'shared/types/sortOrder'

export interface IArticlesSchema extends EntityState<IArticle> {
  isLoading: boolean
  error?: string
  view: TArticlesView
  // Paginate params
  page: number
  limit: number
  hasMore: boolean
  // Sort and filter params
  sort: TArticlesSort
  sortOrder: TSortOrder
  search: string
  type: TArticleType

  _inited: boolean
}
