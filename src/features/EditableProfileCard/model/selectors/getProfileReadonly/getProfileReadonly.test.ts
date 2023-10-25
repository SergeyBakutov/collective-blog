import { type IStateSchema } from 'app/providers/StoreProvider'

import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: false
      }
    }

    expect(getProfileReadonly(state as IStateSchema)).toBeFalsy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileReadonly(state as IStateSchema)).toBeTruthy()
  })
})
