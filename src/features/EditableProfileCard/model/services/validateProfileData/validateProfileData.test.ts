import { type IProfile } from 'entities/Profile'
import { validateProfileData } from './validateProfileData'

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

describe('validateProfileData:', () => {
  it('should return ["NO_DATA"]', () => {
    expect(validateProfileData(undefined)).toEqual(['NO_DATA'])
  })

  it('should return ["INCORRECT_FIRSTNAME"]', () => {
    expect(validateProfileData({ ...profile, firstname: '' })).toEqual(['INCORRECT_FIRSTNAME'])
  })

  it('should return ["INCORRECT_LASTNAME"]', () => {
    expect(validateProfileData({ ...profile, lastname: '' })).toEqual(['INCORRECT_LASTNAME'])
  })

  it('should return ["INCORRECT_AGE"]', () => {
    expect(validateProfileData({ ...profile, age: 0 })).toEqual(['INCORRECT_AGE'])
  })

  it('should return ["INCORRECT_CITY"]', () => {
    expect(validateProfileData({ ...profile, city: '' })).toEqual(['INCORRECT_CITY'])
  })

  it('should return ["INCORRECT_USERNAME"]', () => {
    expect(validateProfileData({ ...profile, username: '' })).toEqual(['INCORRECT_USERNAME'])
  })

  it('should return ["INCORRECT_AVATAR"]', () => {
    expect(validateProfileData({ ...profile, avatar: '' })).toEqual(['INCORRECT_AVATAR'])
  })
})
