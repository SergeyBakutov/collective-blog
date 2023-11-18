import { createSelector } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IAddNewCommentForArticleSchema } from '../types/schema'

const getAddNewCommentForArticleState = (state: IStateSchema): IAddNewCommentForArticleSchema | undefined => state.addNewCommentForArticle

export const getAddNewCommentForArticleText = createSelector(getAddNewCommentForArticleState, (addNewCommentForArticleState) => addNewCommentForArticleState?.text)
export const getAddNewCommentForArticleIsLoading = createSelector(getAddNewCommentForArticleState, (addNewCommentForArticleState) => addNewCommentForArticleState?.isLoading)
export const getAddNewCommentForArticleError = createSelector(getAddNewCommentForArticleState, (addNewCommentForArticleState) => addNewCommentForArticleState?.error)
