import { type IStateSchema } from 'app/providers/StoreProvider'
import { getAuthIsLoading } from './getAuthIsLoading'

describe('getAuthIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getAuthIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAuthIsLoading(state as IStateSchema)).toBeFalsy()
  })
})
