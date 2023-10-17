import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'
import { getError } from './getError'

describe('getError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: false,
        error: 'error'
      }
    }

    expect(getError(state as IStateSchema)).toBe('error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getError(state as IStateSchema)).toBeUndefined()
  })
})
