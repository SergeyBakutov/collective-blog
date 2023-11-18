import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type TArticleType, type TArticlesSort } from 'entities/Article'
import { type TSortOrder } from 'shared/types/sortOrder'
import { getArticlesInited } from '../../selectors/articlesSelectors'
import { articlesActions } from '../../slices/articlesSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticles = createAsyncThunk<void, URLSearchParams, IThunkApiConfig<void>>(
  'articles/initArticles',
  async (searchParams, { dispatch, getState }) => {
    const inited = getArticlesInited(getState())

    if (!inited) {
      const sortFromUrl = searchParams.get('sort') as TArticlesSort
      const orderFromUrl = searchParams.get('order') as TSortOrder
      const searchFromUrl = searchParams.get('search')
      const typeFromUrl = searchParams.get('type') as TArticleType

      sortFromUrl && dispatch(articlesActions.setSort(sortFromUrl))
      orderFromUrl && dispatch(articlesActions.setSortOrder(orderFromUrl))
      searchFromUrl && dispatch(articlesActions.setSearch(searchFromUrl))
      typeFromUrl && dispatch(articlesActions.setType(typeFromUrl))

      dispatch(articlesActions.initState())
      dispatch(fetchArticles({}))
    }
  }
)
