import { type IProfile } from 'entities/Profile'
import { TestAsyncThunk } from 'shared/utils/tests'

import { updateProfileData } from './updateProfileData'

const profile: IProfile = {
  firstname: 'Ivan',
  lastname: 'Ivanov',
  age: 24,
  country: 'Russia',
  city: 'Moscow',
  currency: 'RUB',
  username: 'test',
  avatar: 'avatar'
}

describe('updateProfileData:', () => {
  it('fulfilled', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })

  it('rejected with validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: {
          ...profile,
          username: ''
        }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual(['INCORRECT_USERNAME'])
  })
})
