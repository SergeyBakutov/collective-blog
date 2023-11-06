import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { type TArticlesView, type IArticle } from 'entities/Article'

import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type IArticlesSchema } from '../types/articlesSchema'
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from 'shared/constants/localStorage'

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
    hasMore: true
  }),
  reducers: {
    setView: (state, action: PayloadAction<TArticlesView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const articleView = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY) as TArticlesView

      if (articleView) {
        state.view = articleView
      }
      state.limit = articleView === 'list' ? 4 : 12
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
      articlesAdapter.addMany(state, action.payload)
      state.isLoading = false
      state.hasMore = action.payload.length > 0
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
