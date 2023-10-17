import axios from 'axios'

import { userActions } from 'entities/User'

import { authByUsername } from './authByUsername'
import { TestAsyncThunk } from 'shared/utils/tests'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('authByUsername:', () => {
  it('fulfilled', async () => {
    const user = { id: 1, username: 'test' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }))
    const thunk = new TestAsyncThunk(authByUsername)
    const result = await thunk.callThunk({ username: 'test', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(user)
  })

  it('rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(authByUsername)
    const result = await thunk.callThunk({ username: 'test', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
