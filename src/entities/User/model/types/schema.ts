import { type IUser } from './user'

export interface IUserStateSchema {
  authData?: IUser

  _isCheckedAuthData: boolean
}
