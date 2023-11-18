import { combineReducers } from '@reduxjs/toolkit'
import { type IArticleDetailsPageSchema } from '../types/articleDetailsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer
})
