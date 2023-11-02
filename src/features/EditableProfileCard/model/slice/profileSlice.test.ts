import { type IProfile } from 'entities/Profile'

import { type IProfileStateSchema } from '../types/schema'
import { profileActions, profileReducer } from './profileSlice'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

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

describe('profileSlice:', () => {
  it('action setReadonly', () => {
    const profileState: DeepPartial<IProfileStateSchema> = {
      readonly: true
    }

    expect(profileReducer(profileState as IProfileStateSchema, profileActions.setReadonly(false)))
      .toEqual({
        readonly: false
      })
  })

  it('action updateFormData', () => {
    const profileState: DeepPartial<IProfileStateSchema> = {
      formData: profile
    }

    expect(profileReducer(profileState as IProfileStateSchema, profileActions.updateFormData({ age: 25 })))
      .toEqual({
        formData: {
          ...profile,
          age: 25
        }
      })
  })

  it('action cancelEdit', () => {
    const profileState: DeepPartial<IProfileStateSchema> = {
      data: profile,
      formData: {
        ...profile,
        firstname: ''
      },
      readonly: false,
      validateErrors: ['INCORRECT_FIRSTNAME']
    }

    expect(profileReducer(profileState as IProfileStateSchema, profileActions.cancelEdit()))
      .toEqual({
        data: profile,
        formData: profile,
        readonly: true,
        validateErrors: undefined
      })
  })

  it('action fetchProfileData (pending)', () => {
    const profileState: DeepPartial<IProfileStateSchema> = {
      isLoading: false
    }

    expect(profileReducer(profileState as IProfileStateSchema, fetchProfileData.pending))
      .toEqual({
        error: undefined,
        isLoading: true
      })
  })

  it('action fetchProfileData (fulfilled)', () => {
    const profileState: DeepPartial<IProfileStateSchema> = {
      data: undefined,
      formData: undefined,
      isLoading: false
    }

    expect(profileReducer(profileState as IProfileStateSchema, fetchProfileData.fulfilled(profile, '', 1)))
      .toEqual({
        data: profile,
        formData: profile,
        isLoading: false
      })
  })
})
