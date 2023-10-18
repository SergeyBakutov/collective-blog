import { type IProfile } from './profile'

export interface IProfileStateSchema {
  data?: IProfile
  isLoading: boolean
  error?: undefined
  readonly: boolean
}
