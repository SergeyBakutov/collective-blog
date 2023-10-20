import path from 'path'
import type { Configuration } from 'webpack'

import { type TConfigOptions, getConfig } from './configs/webpack/getConfig'

interface TEnvVariables {
  mode: TConfigOptions['mode']
  port: TConfigOptions['port']
  apiUrl: string
}

export default (env: TEnvVariables): Configuration => {
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const config = getConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src')
    },
    isDev,
    port: PORT,
    apiUrl
  })

  return config
}
