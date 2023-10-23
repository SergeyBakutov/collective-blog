import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router-dom'

import { type IStateSchema } from './schema'

interface IThunkApiExtraArg {
  api: AxiosInstance
  navigate: NavigateFunction
}

export interface IThunkApiConfig<RejectedValue> {
  extra: IThunkApiExtraArg
  rejectValue: RejectedValue
  state: IStateSchema
}
