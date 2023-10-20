import { type IProfile } from './profile'

export interface IProfileStateSchema {
  data?: IProfile
  isLoading: boolean
  error?: string
  readonly: boolean
}
