import { type DeepPartial } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

import { getCounter } from './getCounter'

describe('getCounter', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: {
        value: 10
      }
    }

    expect(getCounter(state as IStateSchema)).toEqual({ value: 10 })
  })
})
