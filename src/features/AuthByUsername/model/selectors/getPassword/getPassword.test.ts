import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { getPassword } from './getPassword'

describe('getPassword:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getPassword(state as IStateSchema)).toBe('123')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getPassword(state as IStateSchema)).toBe('')
  })
})
