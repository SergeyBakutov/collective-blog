import { type IStateSchema } from 'app/providers/StoreProvider'
import { getAuthUsername } from './getAuthUsername'

describe('getAuthUsername:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      auth: {
        username: 'test',
        password: '123',
        isLoading: true
      }
    }

    expect(getAuthUsername(state as IStateSchema)).toBe('test')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getAuthUsername(state as IStateSchema)).toBe('')
  })
})
