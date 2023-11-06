import axios, { type AxiosStatic } from 'axios'
import { type AsyncThunk, type Dispatch } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => IStateSchema
  api: jest.MockedFunctionDeep<AxiosStatic>
  private readonly asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>

  constructor(asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>, state?: DeepPartial<IStateSchema>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as IStateSchema)
    this.asyncThunk = asyncThunk

    this.api = mockedAxios
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.asyncThunk(arg)

    return await action(this.dispatch, this.getState, {
      api: this.api
    })
  }
}
