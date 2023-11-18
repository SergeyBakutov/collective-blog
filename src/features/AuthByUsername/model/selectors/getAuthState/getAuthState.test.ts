import { type IStateSchema } from 'app/providers/StoreProvider'
import { getAuthState } from './getAuthState'

describe('getAuthState:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: false
      }
    }

    expect(getAuthState(state as IStateSchema)).toEqual(state.auth)
  })
})
