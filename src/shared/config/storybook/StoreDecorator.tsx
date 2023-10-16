import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { authReducer } from 'features/AuthByUsername/model/slice/authSlice'
import { type TReducersList } from 'shared/hooks/useAsyncReducer'

const defaultAsyncReducers: TReducersList = {
  auth: authReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<IStateSchema>, asyncReducers?: TReducersList) => (Story: StoryFn): JSX.Element => {
  return (
    <StoreProvider
      initialState={state as IStateSchema}
      asyncReducers={{
        ...defaultAsyncReducers,
        ...asyncReducers
      }}
    >
      <Story />
    </StoreProvider>
  )
}
