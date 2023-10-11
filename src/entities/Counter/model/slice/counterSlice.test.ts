import { type ICounterStateSchema } from '../types/schema'

import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  it('should work action increment', () => {
    const counterState: ICounterStateSchema = {
      value: 10
    }
    expect(counterReducer(counterState, counterActions.increment)).toEqual({ value: 11 })
  })

  it('should work action decrement', () => {
    const counterState: ICounterStateSchema = {
      value: 10
    }
    expect(counterReducer(counterState, counterActions.decrement)).toEqual({ value: 9 })
  })

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
  })
})
