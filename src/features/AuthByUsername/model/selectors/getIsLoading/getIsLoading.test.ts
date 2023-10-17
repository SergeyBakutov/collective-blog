import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { getIsLoading } from './getIsLoading'

describe('getIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getIsLoading(state as IStateSchema)).toBeFalsy()
  })
})
