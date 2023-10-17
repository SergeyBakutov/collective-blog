import { type AsyncThunk, type Dispatch } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => IStateSchema
  private readonly asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>

  constructor(asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.asyncThunk = asyncThunk
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.asyncThunk(arg)

    return await action(this.dispatch, this.getState, undefined)
  }
}
