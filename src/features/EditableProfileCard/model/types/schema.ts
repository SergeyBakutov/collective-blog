import { type IProfile } from 'entities/Profile'

import { type TValidateError } from './validateError'

export interface IProfileStateSchema {
  data?: IProfile
  formData?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: TValidateError[]
}
