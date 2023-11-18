import path from 'path'
import type { Configuration } from 'webpack'
import { getConfig } from './configs/webpack/getConfig'
import { type TEnvVariables } from './configs/webpack/types/envVariables'

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
      src: path.resolve(__dirname, 'src'),
      localesFrom: path.resolve(__dirname, 'public', 'locales'),
      localesTo: path.resolve(__dirname, 'build', 'locales')
    },
    isDev,
    port: PORT,
    apiUrl,
    project: 'main'
  })

  return config
}
