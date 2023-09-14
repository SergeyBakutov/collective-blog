import webpack from 'webpack'

import { getDevServer } from './getDevServer'
import { getLoaders } from './getLoaders'
import { getPlugins } from './getPlugins'
import { getResolvers } from './getResolvers'

type TMode = 'development' | 'production'

type TPaths = {
  entry: string
  output: string
  htmlTemplate: string
}

export type TConfigOptions = {
  mode: TMode
  paths: TPaths
  isDev: boolean
  port: number
}

export function getConfig(options: TConfigOptions): webpack.Configuration {
  const { mode, paths, isDev, port } = options

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
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? getDevServer({ port }) : undefined,
  }
}
