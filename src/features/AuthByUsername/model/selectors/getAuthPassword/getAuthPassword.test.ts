import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { getAuthPassword } from './getAuthPassword'

describe('getAuthPassword:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getAuthPassword(state as IStateSchema)).toBe('123')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAuthPassword(state as IStateSchema)).toBe('')
  })
})
