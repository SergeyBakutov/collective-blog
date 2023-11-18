import { type IAuthStateSchema } from '../types/schema'
import { authActions, authReducer } from './authSlice'

describe('authSlice:', () => {
  it('should work action setUsername', () => {
    const authState: DeepPartial<IAuthStateSchema> = {
      username: 'test'
    }

    expect(
      authReducer(authState as IAuthStateSchema, authActions.setUsername('new'))
    ).toEqual({ username: 'new' })
  })

  it('should work action setPassword', () => {
    const authState: DeepPartial<IAuthStateSchema> = {
      password: '123'
    }

    expect(
      authReducer(authState as IAuthStateSchema, authActions.setPassword('345'))
    ).toEqual({ password: '345' })
  })

  it('should work if empty state', () => {
    expect(authReducer(undefined, authActions.setPassword('345'))).toEqual({
      username: '',
      password: '345',
      isLoading: false
    })
  })
})
