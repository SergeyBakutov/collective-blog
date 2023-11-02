import { type IUser } from 'entities/User'

export interface IComment {
  id: number
  text: string
  user: IUser
}
