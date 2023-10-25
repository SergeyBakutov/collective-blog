type TMode = 'development' | 'production'

interface TPaths {
  entry: string
  output: string
  htmlTemplate: string
  src: string
}

export interface TConfigOptions {
  mode: TMode
  paths: TPaths
  isDev: boolean
  port: number
  apiUrl: string
  project: 'main' | 'storybook' | 'jest'
}
