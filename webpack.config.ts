import path from 'path'

import { getConfig } from './configs/webpack/getConfig'

const mode = 'development'
const isDev = mode === 'development'

const config = getConfig({
  mode,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
  },
  isDev,
})

export default config
