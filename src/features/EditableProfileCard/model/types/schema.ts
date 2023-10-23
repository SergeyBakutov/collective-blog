import { type IProfile } from 'entities/Profile'

export interface IProfileStateSchema {
  data?: IProfile
  formData?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}
