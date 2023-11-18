import { type IStateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: ['INCORRECT_FIRSTNAME']
      }
    }

    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(['INCORRECT_FIRSTNAME'])
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getProfileValidateErrors(state as IStateSchema)).toBeUndefined()
  })
})
