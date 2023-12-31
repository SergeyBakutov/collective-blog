import { type ICountry } from 'entities/Country'
import { type ICurrency } from 'entities/Currency'

export interface IProfile {
  id?: number
  firstname?: string
  lastname?: string
  age?: number
  currency?: ICurrency
  country?: ICountry
  city?: string
  username?: string
  avatar?: string
}
