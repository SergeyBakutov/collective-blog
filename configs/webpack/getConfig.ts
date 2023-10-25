import type webpack from 'webpack'

import { type TConfigOptions } from './types/config'

import { getDevServer } from './getDevServer'
import { getLoaders } from './getLoaders'
import { getPlugins } from './getPlugins'
import { getResolvers } from './getResolvers'

export function getConfig(options: TConfigOptions): webpack.Configuration {
  const { mode, paths, isDev, port, apiUrl, project } = options

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
      isDev,
      apiUrl,
      project
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
