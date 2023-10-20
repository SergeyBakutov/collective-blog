import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router-dom'

interface IThunkApiExtraArg {
  api: AxiosInstance
  navigate: NavigateFunction
}

export interface IThunkApiConfig<RejectedValue> {
  extra: IThunkApiExtraArg
  rejectValue: RejectedValue
}
