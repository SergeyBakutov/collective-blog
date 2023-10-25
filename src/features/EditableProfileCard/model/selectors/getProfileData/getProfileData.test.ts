import { type IStateSchema } from 'app/providers/StoreProvider'

import { getProfileData } from './getProfileData'

describe('getProfileData:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: {
          firstname: 'Ivan',
          lastname: 'Ivanov'
        }
      }
    }

    expect(getProfileData(state as IStateSchema)).toEqual({
      firstname: 'Ivan',
      lastname: 'Ivanov'
    })
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileData(state as IStateSchema)).toBeUndefined()
  })
})
