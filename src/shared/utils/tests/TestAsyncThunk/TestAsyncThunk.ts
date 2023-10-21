import axios, { type AxiosStatic } from 'axios'
import { type NavigateFunction } from 'react-router-dom'
import { type AsyncThunk, type Dispatch } from '@reduxjs/toolkit'

import { type IStateSchema } from 'app/providers/StoreProvider'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch
  getState: () => IStateSchema
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<NavigateFunction>
  private readonly asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>

  constructor(asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.asyncThunk = asyncThunk

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.asyncThunk(arg)

    return await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate
    })
  }
}
