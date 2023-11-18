import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkApiConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'
import { addQueryParams } from 'shared/utils/addQueryParams'
import { getArticlesLimit, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesSortOrder, getArticlesType } from '../../selectors/articlesSelectors'

interface IFetchArticlesProps {
  replace?: boolean
}

export const fetchArticles = createAsyncThunk<IArticle[], IFetchArticlesProps, IThunkApiConfig<string>>(
  'articles/fetchArticles',
  async (_, { extra, rejectWithValue, getState }) => {
    const page = getArticlesPage(getState())
    const limit = getArticlesLimit(getState())
    const sort = getArticlesSort(getState())
    const sortOrder = getArticlesSortOrder(getState())
    const search = getArticlesSearch(getState())
    const type = getArticlesType(getState())

    try {
      addQueryParams({ sort, order: sortOrder, search, type })
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: sortOrder,
          q: search,
          type_like: type === 'all' ? undefined : type
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch {
      return rejectWithValue('Error')
    }
  }
)
