import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { getUsername } from './getUsername'

describe('getUsername:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getUsername(state as IStateSchema)).toBe('test')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getUsername(state as IStateSchema)).toBe('')
  })
})
