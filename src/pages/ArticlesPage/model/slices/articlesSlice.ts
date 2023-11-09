import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { type TArticlesView, type IArticle, type TArticlesSort, type TArticleType } from 'entities/Article'
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from 'shared/constants/localStorage'
import { type TSortOrder } from 'shared/types/sortOrder'

import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type IArticlesSchema } from '../types/articlesSchema'

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<IArticlesSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    view: 'tile',
    page: 1,
    limit: 12,
    hasMore: true,
    sort: 'createdAt',
    sortOrder: 'asc',
    search: '',
    type: 'all',
    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<TArticlesView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSort: (state, action: PayloadAction<TArticlesSort>) => {
      state.sort = action.payload
    },
    setSortOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.sortOrder = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setType: (state, action: PayloadAction<TArticleType>) => {
      state.type = action.payload
    },
    initState: (state) => {
      const articleView = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY) as TArticlesView

      if (articleView) {
        state.view = articleView
      }
      state.limit = articleView === 'list' ? 4 : 12
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true
      state.error = undefined

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state)
      }
    })
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false
      state.hasMore = action.payload.length >= state.limit

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload)
      } else {
        articlesAdapter.addMany(state, action.payload)
      }
    })
    builder.addCase(fetchArticles.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const articlesSelectors = articlesAdapter.getSelectors<IStateSchema>((state) => state.articles ?? articlesAdapter.getInitialState())

export const {
  actions: articlesActions,
  reducer: articlesReducer
} = articlesSlice
