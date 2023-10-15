import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (Story: StoryFn): JSX.Element => {
  return (
    <StoreProvider initialState={state as IStateSchema}>
      <Story />
    </StoreProvider>
  )
}
