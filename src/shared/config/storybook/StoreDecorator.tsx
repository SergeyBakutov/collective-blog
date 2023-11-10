import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addNewCommentForArticleReducer } from 'features/AddNewCommentForArticle/model/slice/addNewCommentForArticleSlice'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { profileReducer } from 'features/EditableProfileCard'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsReducer'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  auth: authReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addNewCommentForArticle: addNewCommentForArticleReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) => (Story: StoryFn): JSX.Element => {
  const lazyReducers = {
    ...defaultAsyncReducers,
    ...asyncReducers
  }

  return (
    <StoreProvider
      initialState={state as IStateSchema}
      asyncReducers={lazyReducers as ReducersMapObject<IStateSchema>}
    >
      <Story />
    </StoreProvider>
  )
}
