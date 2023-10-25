import { type TConfigOptions } from './config'

export interface TPluginsOptions {
  htmlTemplatePath: string
  isDev: boolean
  apiUrl: string
  project: TConfigOptions['project']
}
