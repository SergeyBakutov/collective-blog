import { type AxiosInstance } from 'axios'

import { type IStateSchema } from './schema'

interface IThunkApiExtraArg {
  api: AxiosInstance
}

export interface IThunkApiConfig<RejectedValue> {
  extra: IThunkApiExtraArg
  rejectValue: RejectedValue
  state: IStateSchema
}
