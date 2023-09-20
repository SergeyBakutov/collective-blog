import type webpack from 'webpack'

import { getDevServer } from './getDevServer'
import { getLoaders } from './getLoaders'
import { getPlugins } from './getPlugins'
import { getResolvers } from './getResolvers'

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
}

export function getConfig (options: TConfigOptions): webpack.Configuration {
  const { mode, paths, isDev, port } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      assetModuleFilename: 'assets/[contenthash][ext]',
      clean: true
    },
    plugins: getPlugins({
      htmlTemplatePath: paths.htmlTemplate,
      isDev
    }),
    module: {
      rules: getLoaders({
        isDev
      })
    },
    resolve: getResolvers({
      srcPath: paths.src
    }),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? getDevServer({ port }) : undefined
  }
}
