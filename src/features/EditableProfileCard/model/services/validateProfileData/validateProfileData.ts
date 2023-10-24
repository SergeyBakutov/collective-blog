import { type IProfile } from 'entities/Profile'

import { type TValidateError } from '../../types/validateError'

export const validateProfileData = (profile?: IProfile): TValidateError[] => {
  const errors: TValidateError[] = []

  if (!profile) {
    errors.push('NO_DATA')
  } else {
    const { firstname, lastname, age, city, username, avatar } = profile

    if (!firstname) {
      errors.push('INCORRECT_FIRSTNAME')
    }

    if (!lastname) {
      errors.push('INCORRECT_LASTNAME')
    }

    if (!age || !Number.isInteger(age)) {
      errors.push('INCORRECT_AGE')
    }

    if (!city) {
      errors.push('INCORRECT_CITY')
    }

    if (!username) {
      errors.push('INCORRECT_USERNAME')
    }

    if (!avatar) {
      errors.push('INCORRECT_AVATAR')
    }
  }

  return errors
}
