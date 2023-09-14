import path from 'path'

import { TConfigOptions, getConfig } from './configs/webpack/getConfig'

type TEnvVariables = {
  mode: TConfigOptions['mode']
  port: TConfigOptions['port']
}

export default (env: TEnvVariables) => {

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config = getConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
    port: PORT
  })


  return config
}
