import webpack from 'webpack'

import { getLoaders } from './getLoaders'
import { getPlugins } from './getPlugins'
import { getResolvers } from './getResolvers'

type TOptionsMode = 'development' | 'production'

type TOptionsPaths = {
  entry: string
  output: string
  htmlTemplate: string
}

type TGetConfigOptions = {
  mode: TOptionsMode
  paths: TOptionsPaths
  isDev: boolean
}

export function getConfig(options: TGetConfigOptions): webpack.Configuration {
  const { mode, paths } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: getPlugins({
      htmlTemplatePath: paths.htmlTemplate
    }),
    module: {
      rules: getLoaders(),
    },
    resolve: getResolvers(),
  }
}
