import { type TConfigOptions } from './config'

export interface TPluginsOptions {
  htmlTemplatePath: string
  localesFromPath: string
  localesToPath: string
  isDev: boolean
  apiUrl: string
  project: TConfigOptions['project']
}
