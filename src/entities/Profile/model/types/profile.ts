import { type ICountry } from 'shared/types/country'
import { type ICurrency } from 'shared/types/currency'

export interface IProfile {
  firstname: string
  lastname: string
  age: number
  currency: ICurrency
  country: ICountry
  city: string
  username: string
  avatar: string
}
