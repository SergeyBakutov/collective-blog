import { userActions } from 'entities/User'

import { authByUsername } from './authByUsername'
import { TestAsyncThunk } from 'shared/utils/tests'

describe('authByUsername:', () => {
  it('fulfilled', async () => {
    const user = { id: 1, username: 'test' }
    const thunk = new TestAsyncThunk(authByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }))
    const result = await thunk.callThunk({ username: 'test', password: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(user)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(authByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'test', password: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
