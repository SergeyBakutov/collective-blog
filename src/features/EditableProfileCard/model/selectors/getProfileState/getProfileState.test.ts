import { type IStateSchema } from 'app/providers/StoreProvider'

import { getProfileState } from './getProfileState'

describe('getProfileState:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: {},
        formData: {},
        isLoading: false,
        error: undefined
      }
    }

    expect(getProfileState(state as IStateSchema)).toEqual({
      data: {},
      formData: {},
      isLoading: false,
      error: undefined
    })
  })
})
