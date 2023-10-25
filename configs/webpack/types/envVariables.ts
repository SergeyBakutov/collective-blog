import { type TConfigOptions } from './config'

export interface TEnvVariables {
  mode: TConfigOptions['mode']
  port: TConfigOptions['port']
  apiUrl: string
}
