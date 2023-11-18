import { type IStateSchema } from 'app/providers/StoreProvider'
import { getProfileFormData } from './getProfileFormData'

describe('getProfileFormData:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        formData: {
          firstname: 'Ivan',
          lastname: 'Ivanov'
        }
      }
    }

    expect(getProfileFormData(state as IStateSchema)).toEqual({
      firstname: 'Ivan',
      lastname: 'Ivanov'
    })
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileFormData(state as IStateSchema)).toBeUndefined()
  })
})
